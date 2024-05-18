import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUserData } from '../../services/utils/auth';
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserData();
        setUserData(userData);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
      }
    };
    loadUserData();
  }, []);

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
          <Text style={styles.name}>{userData ? userData.nome : "Carregando..."}</Text>
          <Text style={styles.email}>{userData ? userData.email : ""}</Text>
          <Text style={styles.xp}>XP: {userData ? userData.xp : 0}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
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
  email: {
    fontSize: 16,
    color: 'gray',
  },
  xp: {
    marginTop: 8,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#d32f2f',
    padding: 8,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#fff',
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
