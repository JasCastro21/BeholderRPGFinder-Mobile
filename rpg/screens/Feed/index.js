import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Slide from '../../components/Slide';

export function Feed (){
  return (
    <View>
     
      <Slide />

      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: 'your_profile_image_url' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>Chuu do Critei | @chuullo2</Text>
            <Text style={styles.timestamp}>1h</Text>
          </View>
          <Text style={styles.postText}>
            A nova soundtrack do meu RPG tá fino do fino, amo as produções do @jvic
          </Text>
          <Image
            source={{ uri: 'your_post_image_url' }}
            style={styles.postImage}
          />
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>12</Text>
            <Text style={styles.footerText}>1</Text>
            <Text style={styles.footerText}>256</Text>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: 'your_profile_image_url' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>Larissa | @solaris1</Text>
            <Text style={styles.timestamp}>12h</Text>
          </View>
          <Text style={styles.postText}>
            Arte para @chuullo2, um monstro da campanha dela de D&D, a Hidra Falsa.
          </Text>
          <Image
            source={{ uri: 'your_artwork_image_url' }}
            style={styles.postImage}
          />
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>12</Text>
            <Text style={styles.footerText}>1</Text>
            <Text style={styles.footerText}>256</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
  },
  timestamp: {
    marginLeft: 'auto',
    color: '#555',
  },
  postText: {
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  footerText: {
    fontSize: 16,
  },
});

export default Feed;
