import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


import Feed from '../screens/Feed';
import Notificacao from '../screens/Notificacao';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: 'Feed'
                }}
            />
            <Tab.Screen
                name="Notificações"
                component={Notificacao}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='bell' color={color} size={size} />,
                    tabBarLabel: 'Notificações' 
                }}
            />
        </Tab.Navigator>
    );
}
