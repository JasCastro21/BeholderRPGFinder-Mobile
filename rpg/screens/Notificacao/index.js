import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slide from '../../components/Slide/index2';

const notificationsData = [
  {
    id: '1',
    type: 'follow',
    user: 'Larissa',
    action: 'seguiu você',
    icon: 'person-add',
  },
  {
    id: '2',
    type: 'like',
    user: 'Amanda Amaral',
    action: 'curtiu seu post',
    content: 'Acho que vou comprar uma arte pro o monstro da minha próxima sessão, só não sei com quem ainda...',
    icon: 'favorite',
  },
  
];

const Notificacao = () => {

  <Slide />
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Icon name={item.icon} size={24} color={item.type === 'like' ? 'red' : 'black'} />
      <Text style={styles.notificationText}>
        <Text style={styles.username}>{item.user} </Text>
        {item.action}
        {item.content && `\n${item.content}`}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <Slide />
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  notificationText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
  },
 
});

export default Notificacao;
