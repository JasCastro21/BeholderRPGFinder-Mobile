import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Certifique-se de instalar essa biblioteca

const CardM = ({ mestre, horario, preco, descricao, onPress, avaliacao }) => {
  // Função para renderizar as estrelas de avaliação
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= avaliacao ? 'star' : 'star-o'}
          size={16}
          color={i <= avaliacao ? "#FFD700" : "#e4e5e9"}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {/* Imagem circular com borda vermelha */}
        <Image source={require('../../img/chuu2.jpg')} style={styles.image} />
        <View style={styles.starsContainer}>{renderStars()}</View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>Medieval</Text>
        </View>
        <Text style={styles.title}>A Maldição de Strahd</Text>
        <Text style={styles.info}>Mestre: {mestre}</Text>
        <Text style={styles.info}>Vagas: 1/3</Text>
        <Text style={styles.info}>Domingo | {horario}</Text>
        <Text style={styles.info}>{preco}/Sessão</Text>
        <Text style={styles.description}>{descricao}</Text>
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
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
  },
  imageContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#8B0000',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tagContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#8B0000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: 'black',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#8B0000',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  star: {
    marginRight: 3,
  },
});

export default CardM;
