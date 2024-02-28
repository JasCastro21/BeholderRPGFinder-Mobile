import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Perfil = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: 'link_to_your_background_image' }} style={styles.coverImage} />
      <View style={styles.profileSection}>
        <Image source={{ uri: 'link_to_profile_picture' }} style={styles.profileImage} />
        <Text style={styles.name}>Chuu do Critei 🏳️‍🌈</Text>
        <Text style={styles.handle}>@chuu102</Text>
        <Text style={styles.description}>
          Sou mestra e jogadora de RPG, atualmente, mostro uma campanha de D&D chamada
          "Stellarium", mais informações no link fixado!
        </Text>
        <Text style={styles.location}>🇧🇷 Brasil</Text>
        <Text style={styles.website}>stellariumrpg.com</Text>
        <View style={styles.rating}>
          <FontAwesome5 name="star" size={14} color="gold" />
          {/* Repeat stars as needed */}
        </View>
        <Text style={styles.theme}>Temas:</Text>
        <View style={styles.tags}>
          <Text style={styles.tag}>Medieval</Text>
          <Text style={styles.tag}>Suspense</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.footerCount}>23</Text>
          <Text style={styles.footerLabel}>Seguindo</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerCount}>56</Text>
          <Text style={styles.footerLabel}>Seguidores</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <MaterialCommunityIcons name="pencil" size={14} color="black" />
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 150, // Set the height you want
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50, // Half of the profile image size to overlap
    borderWidth: 3,
    borderColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  handle: {
    color: 'grey',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
  },
  location: {
    marginTop: 10,
  },
  website: {
    color: 'blue',
  },
  rating: {
    flexDirection: 'row',
    marginTop: 10,
  },
  theme: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerCount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerLabel: {
    color: 'grey',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
  },
  editButtonText: {
    marginLeft: 5,
  },
});

export default Perfil;
