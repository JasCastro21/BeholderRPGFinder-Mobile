import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Inicial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../img/Fundo.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}>Inscrever-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomView: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 40,
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B0000',
    width: 300,
  },
  buttonText: {
    color: '#8B0000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'none', 
  },
});

export default Inicial;
