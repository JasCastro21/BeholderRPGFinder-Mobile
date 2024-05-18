import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardM = ({ onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={require('../../img/08.jpg')} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>A Maldição de Strahd</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Medieval</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="user" size={16} color="#900" />
          <Text style={styles.info}>Mestre: Gisele Costa</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="users" size={16} color="#900" />
          <Text style={styles.info}>Vagas: 1/3</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="calendar" size={16} color="#900" />
          <Text style={styles.info}>Domingo | 20:00 - 22:30</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="money" size={16} color="#900" />
          <Text style={styles.info}>30R$/Sessão</Text>
        </View>
        <Text style={styles.description}>
          Sob furiosas nuvens tempestuosas, o vampiro Conde Strahd von Zaro...
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Enviar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imageContainer: {
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tagContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#900',
    borderRadius: 10,
    padding: 5,
  },
  tagText: {
    color: '#900',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  info: {
    marginLeft: 10,
    fontSize: 14,
    color: 'black',
  },
  description: {
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CardM;
