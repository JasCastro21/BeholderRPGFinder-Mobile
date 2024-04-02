import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './screens/Inicial';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Notificacao from './screens/Notificacao';
import Chat from './screens/Chat';
import Feed from './screens/Feed'; 
import Pesquisa from './screens/Pesquisa';
import Perfil from './screens/Perfil';
import Seguindo from './screens/Seguindo'
import Mesas from './screens/Mesas';
import Jogadores from './screens/Jogadores';
import Todos from './screens/Todos';
import Mencoes from './screens/Mencoes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicial"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: '#fff', 
          headerTitleAlign: 'center', 
          animationEnabled: false, 
          headerTitle: () => (
            <Image
              style={{ width: 50, height: 50 }} 
              source={require('./img/Logo.png')}
            />
          ),
        }}>
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Notificacao" component={Notificacao} options={{ headerShown: true }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} />
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: true, headerLeft: null }} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: true }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: true }} />
        <Stack.Screen name="Seguindo" component={Seguindo} options={{ headerShown: true }} />
        <Stack.Screen name="Mesas" component={Mesas} options={{ headerShown: true }} />
        <Stack.Screen name="Jogadores" component={Jogadores} options={{ headerShown: true }} />
        <Stack.Screen name="Todos" component={Todos} options={{ headerShown: true }} />
        <Stack.Screen name="Mencoes" component={Mencoes} options={{ headerShown: true }} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8B0000', 
    minHeight: 40, 
  },
});
