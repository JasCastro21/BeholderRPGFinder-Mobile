import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Slide() {
  const [activeTab, setActiveTab] = useState('Recomendados');

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={[styles.tabItem, activeTab === 'Recomendados' && styles.activeTab]} onPress={() => switchTab('Recomendados')}>
        <Text style={[styles.tabTitle, activeTab === 'Recomendados' ? styles.activeTabTitle : null]}>Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabItem, activeTab === 'Seguindo' && styles.activeTab]} onPress={() => switchTab('Seguindo')}>
        <Text style={[styles.tabTitle, activeTab === 'Seguindo' ? styles.activeTabTitle : null]}>Menções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff', 
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#8B0000',
  },
  tabTitle: {
    color: '#666666', // Cor padrão para o texto
  },
  activeTabTitle: {
    color: '#8B0000', // Cor para o texto quando a aba está ativa
  },
});

export default Slide;
