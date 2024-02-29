import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Slide from '../../components/Slide/index';
import Cards from '../../components/Cards/index';

export function Feed() {
  return (
    <View style={styles.container}>
      <Slide />
      <ScrollView>
        <Cards />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Feed;
