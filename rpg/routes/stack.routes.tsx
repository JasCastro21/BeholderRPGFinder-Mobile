import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Inicial from '../screens/Inicial';
import Feed from '../screens/Feed';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name='Inicial'  
                component={Inicial} 
            />
            <Stack.Screen 
                name='Feed'  
                component={Feed} 
            />
        </Stack.Navigator>
    );
}
