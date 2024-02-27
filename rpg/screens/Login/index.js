import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <ImageBackground 
      source={require('../../img/Fundo2.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Usuário"
          style={styles.input}
        />
        <TextInput
          placeholder="Data de Nascimento"
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail ou Número"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Inscreva-se</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Já possui uma conta? <Text style={styles.loginLink}>Entre aqui!</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffffff', 
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;
