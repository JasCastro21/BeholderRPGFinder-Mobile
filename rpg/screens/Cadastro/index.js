import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { criarNovoUsuario } from '../../services/api/usuario';

const Cadastro = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [datanascimento, setDataNascimento] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    try {
      const response = await criarNovoUsuario({ email, senha: password, nome, datanascimento });
      // Verifica se a resposta da API é bem-sucedida
      if (response.status === 200) {
        // Exibe uma mensagem de sucesso ou redireciona para outra tela
        console.log("Usuário criado com sucesso:", response.data);
        navigation.navigate('Login');
      } else {
        // Exibe uma mensagem de erro caso a resposta não seja 200
        console.log("Erro ao criar usuário:", response.data);
        Alert.alert(
          "Erro ao criar usuário",
          "Não foi possível criar o usuário. Por favor, tente novamente mais tarde.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      // Exibe uma mensagem de erro em caso de falha na chamada à API
      if (error.response && error.response.data && error.response.data.errors) {
        // Se a resposta da API contiver uma matriz de erros, compõe os erros em uma lista
        const errorMessages = error.response.data.errors.map(error => error.msg);
        const errorMessageList = errorMessages.join("\n"); // Compondo os erros em uma lista
        Alert.alert(
          "Erro ao criar usuário",
          errorMessageList, // Exibindo a lista de erros
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      } else {
        // Caso contrário, exibe uma mensagem de erro genérica
        console.log("Erro ao criar usuário:", error);
        Alert.alert(
          "Erro ao criar usuário",
          "Não foi possível criar o usuário. Por favor, verifique sua conexão com a internet e tente novamente.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    }
  };
  
  
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require('../../img/Fundo2.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#8B0000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Nome de usuário"
                  autoCapitalize="none"
                  onChangeText={(text) => setNome(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="calendar" size={20} color="#8B0000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Data de Nascimento"
                  keyboardType="numeric"
                  onChangeText={(text) => setDataNascimento(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#8B0000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#8B0000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Inscreva-se</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUp} onPress={handleSignIn}>
                <Text>
                  <Text style={styles.simpleText}>Já possui uma conta?</Text> 
                  <Text style={styles.linkText}> Entre aqui!</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B0000',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingHorizontal: 40,
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#8B0000',
    textDecorationLine: 'none',
  },
  signUp: {
    marginTop: 10,
    alignSelf: 'center',
  },
  simpleText: {
    color: 'black',
  },
  linkText: {
    color: '#8B0000',
    textDecorationLine: 'none',
  },
});

export default Cadastro;
