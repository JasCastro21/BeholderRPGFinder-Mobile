import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NotificationComponent = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.notification}>
        <Image source={require('../../img/chuu2.jpg')} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Larissa</Text>
          <Text style={styles.regularText}>seguiu você</Text>
        </View>
      </View>

      
      <View style={styles.notification}>
        <Image source={require('../../img/chu3.png')} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Amanda Amaral</Text>
          <Text style={styles.regularText}>curtiu seu post</Text>
          <Text style={styles.commentText}>Acho que vou comprar uma arte para o monstro da minha próxima sessão, só não sei com quem ainda...</Text>
        </View>
      </View>
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
    paddingVertical: 8,
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
  },
  regularText: {
    color: 'grey',
  },
  commentText: {
    color: 'grey',
    marginTop: 4,
  },
});

export default NotificationComponent;
