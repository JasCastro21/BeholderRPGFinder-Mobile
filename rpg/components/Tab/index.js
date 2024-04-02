import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Tab() {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  const getIconColor = (screenName) => {
    return route.name === screenName ? 'white' : '#D9D9D9';
  };

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem} onPress={() => navigateTo('Feed')}>
        <Ionicons name="home-outline" size={28} color={getIconColor('Feed')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => navigateTo('Notificacao')}>
        <Ionicons name="notifications-outline" size={28} color={getIconColor('Notificacao')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => navigateTo('Pesquisa')}>
        <Ionicons name="search-outline" size={28} color={getIconColor('Pesquisa')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => navigateTo('Conversa')}>
        <Ionicons name="chatbubble-outline" size={28} color={getIconColor('Chat')} />
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
