import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tab from '../../components/Tab';
import ConteudoPerfil from '../../components/ConteudoPerfil';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feedContent}>
        <ConteudoPerfil />
      </View>
      <Tab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Perfil;
