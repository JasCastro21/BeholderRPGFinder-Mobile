import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FilterComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

  const onFilterPress = (filterName) => {
    console.log(`Filter ${filterName} pressed`);
    setSelectedFilter(filterName);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={() => onFilterPress('Tema 1')}>
        <Text style={styles.filterText}>Tema 1</Text>
        <FontAwesome5 name="angle-down" size={16} color="#7D7D7D" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.filterButton} onPress={() => onFilterPress('Tema 2')}>
        <Text style={styles.filterText}>Tema 2</Text>
        <FontAwesome5 name="angle-down" size={16} color="#7D7D7D" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.filterButton} onPress={() => onFilterPress('Horário')}>
        <Text style={styles.filterText}>Horário</Text>
        <FontAwesome5 name="angle-down" size={16} color="#7D7D7D" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.filterButton} onPress={() => onFilterPress('Valores')}>
        <Text style={styles.filterText}>Valores</Text>
        <FontAwesome5 name="angle-down" size={16} color="#7D7D7D" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedFilter}</Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 4,
    minWidth: 90,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  filterText: {
    fontSize: 16,
    color: '#7D7D7D',
    marginRight: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default FilterComponent;
