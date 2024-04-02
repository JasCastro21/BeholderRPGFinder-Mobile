import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const NavBar = ({ tabs, initialActiveTab }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setActiveTab(initialActiveTab);
    }, [initialActiveTab])
  );

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[
            styles.tab,
            activeTab === tab.key ? styles.activeTab : {}
          ]}
          onPress={() => {
            setActiveTab(tab.key);
            navigation.navigate(tab.screen);
          }}
        >
          <Text style={[styles.tabText, activeTab === tab.key ? styles.activeText : styles.inactiveText]}>
            {tab.text}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicator,
            {
              marginLeft: `${(100 / tabs.length) * tabs.findIndex(tab => tab.key === activeTab)}%`,
            },
            styles.activeIndicator
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B0000',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
  },
  inactiveText: {
    color: '#D9D9D9', 
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
  },
  indicator: {
    width: '50%',
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  activeIndicator: {
    backgroundColor: '#D9D9D9',
  },
});

export default NavBar;
