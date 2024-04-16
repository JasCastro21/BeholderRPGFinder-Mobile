import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardJogador = ({ onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../img/chuu2.jpg')} style={styles.avatar} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#900" />
          <Icon name="star" size={16} color="#900" />
          <Icon name="star" size={16} color="#900" />
          <Icon name="star" size={16} color="#900" />
          <Icon name="star-half-empty" size={16} color="#900" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.username}>Amanda Amaral</Text>
        <Text style={styles.userhandle}>@amandx</Text>
        <Text style={styles.description}>Meu nome é Amanda, faço Artes na faculdade e gosto de jogar RPG com um estilo mais fantasioso e medieval...</Text>
        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Medieval</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Suspense</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.followButton}>
        <Text style={styles.followButtonText}>Seguindo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 60, 
    height: 60, 
    borderRadius: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userhandle: {
    color: '#555',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#900',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  followButton: {
    backgroundColor: '#900',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CardJogador;
