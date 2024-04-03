import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; 

const NotificationCard = ({
  type,
  userPhoto,
  userName,
  actionText,
  content,
  timeAgo
}) => {
  let actionIcon;
  if (type === 'follow') {
    actionIcon = <FontAwesomeIcon name="user-plus" size={20} color="#555" />;
  } else if (type === 'like') {
    actionIcon = <FontAwesomeIcon name="heart" size={20} color="#E0245E" />;
  }

  return (
    <View style={styles.card}>
      <Image source={userPhoto} style={styles.userPhoto} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>
          {userName} <Text style={styles.actionText}>{actionText}</Text>
        </Text>
        {content && <Text style={styles.contentText}>{content}</Text>}
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
      {actionIcon && <View style={styles.actionIcon}>{actionIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
    backgroundColor: '#FFFFFF'
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold'
  },
  actionText: {
    fontSize: 14,
    color: '#555'
  },
  contentText: {
    fontSize: 12,
    color: '#555'
  },
  actionIcon: {
    padding: 5
  },
  timeAgo: {
    fontSize: 12,
    color: '#555',
    padding: 5
  }
});

export default NotificationCard;