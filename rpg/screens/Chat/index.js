import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tab from '../../components/Tab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getMesa } from '../../services/api/mesa';
import { listarUsuariosDaMesa } from '../../services/api/usuariomesa';
import { enviarMensagem, listarMensagens } from '../../services/api/mensagem';
import { fetchUserData } from '../../services/utils/auth';

export default function Chat({ route }) {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');
  const [eu, setEu] = useState('');
  const [mesa, setMesa] = useState(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mesaData = await getMesa(route.params.mesaId);
        console.log('Dados da mesa:', mesaData.data);
        setMesa(mesaData.data[0]);
        await fetchParticipants(route.params.mesaId);
        await fetchMessages(route.params.mesaId);
        setEu(await fetchUserData().id)
      } catch (error) {
        console.error('Erro ao buscar dados da mesa:', error);
      }
    };
    
    fetchData();
  }, [route.params.mesaId]);
  

  const fetchParticipants = async (mesaId) => {
    try {
      const token = await AsyncStorage.getItem('BeholderToken');
      const participantsData = await listarUsuariosDaMesa(mesaId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Dados dos participantes:', participantsData.data);
      setParticipants(participantsData.data);
    } catch (error) {
      console.error('Erro ao buscar participantes da mesa:', error);
      Alert.alert('Erro', 'Não foi possível carregar os participantes.');
    }
  };

  const findAuthorName = (authorId) => {
    const author = participants.find(participant => participant.usuario.id === authorId);
    return author ? author.usuario.nome : 'Desconhecido';
  };

const fetchMessages = async (mesaId) => {
  try {
    const token = await AsyncStorage.getItem('BeholderToken');
    const messagesData = await listarMensagens(mesaId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    for (const message of messagesData) {
      console.log("----------------------------------")

      console.log("Mensagem sendo iterada: ", message)
      console.log("ID do autor: ", message.autor)

      console.log("----------------------------------")
    }

    setMessages(messagesData);
  } catch (error) {
    console.error('Erro ao buscar mensagens: ', error);
    Alert.alert('Erro', 'Não foi possível carregar as mensagens.');
  }
};
;

  const sendMessage = async () => {
    try {
      const token = await AsyncStorage.getItem('BeholderToken');
      const response = await enviarMensagem(mesa.id, {
        text: newMessageText,
        senderId: 'me', 
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewMessageText('');
      setMessages([...messages, response]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      Alert.alert('Erro', 'Não foi possível enviar a mensagem.');
    }
  };

  const renderMessageItem = ({ item }) => {
    const authorName = findAuthorName(item.autor);
    const isSentByMe = item.autor === eu;
    return (
      <View style={isSentByMe ? styles.sentMessage : styles.receivedMessage}>
        <Text style={styles.authorName}>{authorName}</Text>
        <Text style={styles.messageText}>{item.texto}</Text>
      </View>
    );
  };
  

  const ParticipantsList = ({ participants }) => {
    return (
      <View style={styles.participantsContainer}>
        <Text style={styles.participantsTitle}>Participantes</Text>
        {participants.map((participant, index) => (
          <View key={index} style={styles.participantItem}>
            <Text style={styles.participantName}>{participant.usuario.nome}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {mesa && (
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => {
            setShowParticipants(!showParticipants);
            if (!showParticipants) fetchParticipants(mesa.id);
          }}
        >
          <Text style={styles.titleText}>{mesa.titulo}</Text>
        </TouchableOpacity>
      )}
      {showParticipants && <ParticipantsList participants={participants} />}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        style={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessageText}
          onChangeText={setNewMessageText}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#666666"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#8B0000',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  participantsContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#8B0000',
    borderRadius: 10,
    margin: 10,
  },
  participantsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B0000',
  },
  participantItem: {
    borderWidth: 1,
    borderColor: '#8B0000',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  participantName: {
    fontSize: 16,
    color: '#8B0000',
  },
  messagesList: {
    flex: 1,
  },
  message: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 4,
    borderRadius: 20,
  },
  sentMessage: {
    backgroundColor: '#FFDBDB',
    alignSelf: 'flex-end',
    marginTop: 10, // Aumenta o espaçamento entre as mensagens
    marginBottom: 10, // Aumenta o espaçamento entre as mensagens
    borderRadius: 30, // Aumenta o tamanho do balão da mensagem
    borderBottomRightRadius: 10, // Aumenta o tamanho do balão da mensagem
    width: '100%', // Ocupa a tela inteira lateralmente
  },
  receivedMessage: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    alignItems: 'flex-start', // Alinha o texto à esquerda
    borderRadius: 30, // Aumenta o tamanho do balão da mensagem
    borderBottomLeftRadius: 10, // Aumenta o tamanho do balão da mensagem
    marginTop: 10, // Aumenta o espaçamento entre as mensagens
    marginBottom: 10, // Aumenta o espaçamento entre as mensagens
    width: '100%', // Ocupa a tela inteira lateralmente
  },
  messageText: {
    fontSize: 16,
    marginLeft: 20, // Aumenta a margem esquerda para mover o texto para a direita
  },
  authorName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#8B0000', // Cor do nome do autor
    marginLeft: 20, // Aumenta a margem esquerda para mover o nome do autor para a direita
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    borderColor: '#8B0000',
    borderWidth: 1.5,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 20,
    backgroundColor: '#8B0000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
