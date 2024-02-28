import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Perfil from '../screens/Perfil';
import  Inicial from '../screens/Inicial';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name='perfil'  
                component={Perfil} 
            />
            <Stack.Screen 
                name='Inicial'  
                component={Inicial} 
            />
        </Stack.Navigator>
    );
}
