import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
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
import Seguindo from './screens/Seguindo';
import Jogadores from './screens/Jogadores';
import Todos from './screens/Todos';
import Mencoes from './screens/Mencoes';
import Conversa from './screens/Conversa';
import CriarMesa from './components/CriarMesa';
import EditarMesa from './screens/EditarMesa';
import EditarPerfil from './screens/EditarPerfil';

const Stack = createStackNavigator();

const HeaderTitleWithProfile = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('./img/Logo.png')}
      />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <Image
        style={styles.profileIcon}
        source={require('./img/chuu2.jpg')}
      />
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicial"
        screenOptions={({ navigation }) => ({
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          animationEnabled: false,
          headerTitle: () => <HeaderTitleWithProfile navigation={navigation} />,
        })}>
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Notificacao" component={Notificacao} options={{ headerShown: true }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} />
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: true, headerLeft: null }} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: true }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: true }} />
        <Stack.Screen name="Seguindo" component={Seguindo} options={{ headerShown: true }} />
        <Stack.Screen name="Jogadores" component={Jogadores} options={{ headerShown: true }} />
        <Stack.Screen name="Todos" component={Todos} options={{ headerShown: true }} />
        <Stack.Screen name="Mencoes" component={Mencoes} options={{ headerShown: true }} />
        <Stack.Screen name="Conversa" component={Conversa} options={{ headerShown: true }} />
        <Stack.Screen name="CriarMesa" component={CriarMesa} options={{ headerShown: true }} />
        <Stack.Screen name="EditarMesa" component={EditarMesa} options={{ headerShown: true }} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: true }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8B0000',
    minHeight: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 50, // Alterado para mover a foto de perfil para a direita
  },
});
