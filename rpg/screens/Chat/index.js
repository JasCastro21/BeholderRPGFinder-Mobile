import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tab from '../../components/Tab';
import Chu1 from '../../img/chu3.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getMesa } from '../../services/api/mesa';
import { listarUsuariosDaMesa } from '../../services/api/usuariomesa';

export default function Chat({ route }) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Olá, como você está?',
      sentByMe: true,
    },
    {
      id: '2',
      text: 'Estou bem, obrigado! E você?',
      sentByMe: false,
      username: 'Amanda Amaral',
      avatarURL: Chu1,
    },
  ]);

  const [newMessageText, setNewMessageText] = useState('');
  const [mesa, setMesa] = useState(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchMesa = async () => {
      try {
        const mesaData = await getMesa(route.params.mesaId);
        console.log('Dados da mesa:', mesaData.data);
        setMesa(mesaData.data[0]);
      } catch (error) {
        console.error('Erro ao buscar dados da mesa:', error);
      }
    };

    fetchMesa();
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

  const sendMessage = () => {
    if (newMessageText.trim().length > 0) {
      const newMessage = {
        id: Date.now().toString(),
        text: newMessageText,
        sentByMe: true,
      };
      setMessages([...messages, newMessage]);
      setNewMessageText('');
    }
  };

  const renderMessageItem = ({ item }) => {
    return item.sentByMe ? (
      <View style={[styles.message, styles.sentMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    ) : (
      <View style={[styles.message, styles.receivedMessage]}>
        <Image source={item.avatarURL} style={styles.avatar} />
        <View style={styles.messageInfo}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
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
    marginRight: 10,
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    borderBottomRightRadius: 5,
  },
  receivedMessage: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 20,
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageInfo: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
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
