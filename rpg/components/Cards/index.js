import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cards = ({
    username="Chuu do Critei",
    handle="@chuu102",
    timeAgo="1h",
    content="A nova soundtrack do meu RPG tá fino do fino, amo as produções do @jvic",
    likes=256,
    retweets=12,
    comments=1,
    profileImage= require('../../img/chu.jpg'),
    contentImage= require('../../img/7.png'),
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={profileImage} style={styles.profilePic} />
        <View style={styles.headerText}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.handleAndTime}>{handle} · {timeAgo}</Text>
        </View>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Image source={contentImage} style={styles.contentPic} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="comment-o" size={20} color="#555" />
          <Text style={styles.iconText}>{comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="retweet" size={20} color="#555" />
          <Text style={styles.iconText}>{retweets}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="heart-o" size={20} color="#555" />
          <Text style={styles.iconText}>{likes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  handleAndTime: {
    color: 'grey',
    fontSize: 14,
  },
  content: {
    padding: 15,
    paddingTop: 0,
  },
  contentPic: {
    width: '100%',
    height: 200,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
  },
});

export default Cards;
