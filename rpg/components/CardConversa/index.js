import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardConversa = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.notification}>
        <Image source={require('../../img/chu3.png')} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Larissa</Text>
          <Text style={styles.regularText}>Aqui a arte finalizada pro seu projeto! Valeu pela preferência!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress} style={styles.notification}>
        <Image source={require('../../img/chuu2.jpg')} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Stelarrium - RPG</Text>
          <Text style={styles.regularText}>@amandx: Já vou ir criando minha personagem então...</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
    paddingBottom: 10,
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  regularText: {
    color: 'black',
    fontSize: 14,
    marginTop: 2,
  },
});

export default CardConversa;
