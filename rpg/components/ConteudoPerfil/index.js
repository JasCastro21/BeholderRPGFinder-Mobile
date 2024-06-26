import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import chu1 from '../../img/7.png';
import fundo1 from '../../img/chu3.png';

const posts = [
  {
    id: '1',
    text: 'A nova soundtrack do meu RPG tá fino do fino, amo as produções do @jvic',
    image: chu1,
    likes: 256,
    comments: 12,
    time: '1h',
  },
];

const ConteudoPerfil = () => {
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postText}>{item.text}</Text>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postFooter}>
        <Text>{item.time}</Text>
        <Text>{item.comments} comments</Text>
        <Text>{item.likes} likes</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={fundo1} style={styles.profileImage} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Chuu do Critei | 🇺🇦</Text>
          <Text style={styles.handle}>@chuull02</Text>
          <Text style={styles.bio}>
            Sou mestra e jogadora de RPG, atualmente, mestro uma campanha de D&D chamada "Stellarium", mais informações no link fixado!
          </Text>
          <Text style={styles.location}>🇧🇷 Brasil</Text>
          <Text style={styles.link}>stellariumrpg.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statItem}>23 Seguindo</Text>
        <Text style={styles.statItem}>56 Seguidores</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>Avaliação: ★★★★☆</Text>
      </View>
      <View style={styles.tags}>
        <Text style={styles.tag}>Medieval</Text>
        <Text style={styles.tag}>Suspense</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  handle: {
    color: 'gray',
  },
  bio: {
    marginTop: 8,
  },
  location: {
    marginTop: 8,
  },
  link: {
    marginTop: 8,
    color: 'blue',
  },
  editButton: {
    backgroundColor: '#d32f2f',
    padding: 8,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#fff',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  statItem: {
    fontSize: 16,
  },
  rating: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  ratingText: {
    fontSize: 16,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  postsList: {
    padding: 16,
  },
  postContainer: {
    marginBottom: 16,
  },
  postText: {
    fontSize: 16,
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default ConteudoPerfil;
