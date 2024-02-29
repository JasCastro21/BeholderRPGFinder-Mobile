import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cards = ({ user, content, imageUri, userAvatarUri }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [retweetsCount, setRetweetsCount] = useState(0);
  const [sharesCount, setSharesCount] = useState(0);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLikesCount(likesCount + (newLikedState ? 1 : -1));
  };

  const handleComment = () => {
    console.log('Comment action');
    setCommentsCount(commentsCount + 1);
  };

  const handleRetweet = () => {
    console.log('Retweet action');
    setRetweetsCount(retweetsCount + 1);
  };

  const handleShare = () => {
    console.log('Share action');
    setSharesCount(sharesCount + 1);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.userInfo}>
        {userAvatarUri ? (
          <Image source={{ uri: userAvatarUri }} style={styles.userAvatar} />
        ) : (
          <View style={styles.placeholderAvatar} />
        )}
        <Text style={styles.userName}>{user}</Text>
      </View>
      <Image source={{ uri: imageUri }} style={styles.postImage} />
      <View style={styles.postContent}>
        <Text style={styles.contentText}>{content}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={toggleLike} style={styles.actionButton}>
          <Icon name={liked ? 'heart' : 'heart-o'} size={20} color={liked ? 'red' : 'black'} />
          <Text style={styles.actionText}>{likesCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment} style={styles.actionButton}>
          <Icon name="comment-o" size={20} color="black" />
          <Text style={styles.actionText}>{commentsCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRetweet} style={styles.actionButton}>
          <Icon name="retweet" size={20} color="black" />
          <Text style={styles.actionText}>{retweetsCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
          <Icon name="share" size={20} color="black" />
          <Text style={styles.actionText}>{sharesCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '90%', 
    alignSelf: 'center', 
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginVertical: 20, 
  },
  postContent: {
    padding: 10,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default Cards;
