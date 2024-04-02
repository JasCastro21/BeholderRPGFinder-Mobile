import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Tab from '../../components/Tab';
import Chu1 from '../../img/chu3.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Chat() {
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

  return (
    <View style={styles.container}>
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
