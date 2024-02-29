import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Feed from '../screens/Feed';
import Notificacao from '../screens/Notificacao';
import Chat from '../screens/Chat';
import Pesquisar from '../screens/Pesquisar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#8B0000',
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Notificação"
        component={Notificacao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" color={color} size={size} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={Pesquisar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" color={color} size={size} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
