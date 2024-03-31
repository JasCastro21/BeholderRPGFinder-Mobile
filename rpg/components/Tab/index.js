import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Tab() {
  const navigation = useNavigation();

  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };

  const navigateToNotificacao = () => {
    navigation.navigate('Notificacao');
  };

  const navigateToChat = () => {
    navigation.navigate('Chat');
  };

  const navigateToPesquisa = () => {
    navigation.navigate('Pesquisa');
  };

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem} onPress={navigateToFeed}>
        <FontAwesome name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={navigateToNotificacao}>
        <FontAwesome name="bell" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={navigateToChat}>
        <FontAwesome name="comments" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={navigateToPesquisa}>
        <FontAwesome name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    backgroundColor: '#8B0000',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
