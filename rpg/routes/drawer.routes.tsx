import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import Perfil from '../screens/Perfil';
import Inicial from '../screens/Inicial';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: ' ',
                headerStyle: {
                    backgroundColor: '#8B0000',
                },
                headerTintColor: 'white', // Isso define a cor do texto e ícones no cabeçalho, incluindo o ícone do menu
                drawerIcon: ({ focused, size }) => (
                    <Feather name={focused ? 'menu' : 'menu'} size={size} color='white' />
                ),
            }}
        >
            <Drawer.Screen 
                name='Home'  
                component={TabRoutes} 
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />

            <Drawer.Screen 
                name='Perfil'  
                component={Perfil} 
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
                    drawerLabel: 'Meu Perfil',
                }}
            />

            <Drawer.Screen 
                name='Sair'  
                component={Inicial} 
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='log-out' color={color} size={size} />,
                    drawerLabel: 'Sair',
                    headerShown: false 
                }}
            />
        </Drawer.Navigator>
    );
}
