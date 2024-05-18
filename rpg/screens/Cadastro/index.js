import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { criarNovoUsuario } from '../../services/api/usuario';

const Cadastro = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    try {
      const data = {
        nome: username,
        email: email,
        senha: password,
        datanascimento: birthdate
      };
      await criarNovoUsuario(data);
      Alert.alert(
        "Sucesso!",
        "Usuário cadastrado com sucesso.",
        [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      Alert.alert(
        "Erro ao cadastrar",
        "Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
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
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="calendar" size={20} color="#8B0000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Data de Nascimento"
                  keyboardType="numeric"
                  onChangeText={(text) => setBirthdate(text)}
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
