import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterComponent = () => {
  // Estados para controlar a visibilidade dos modais/pickers
  const [isTopic1Visible, setTopic1Visible] = useState(false);
  const [isTopic2Visible, setTopic2Visible] = useState(false);
  const [isScheduleVisible, setScheduleVisible] = useState(false);
  const [isValuesVisible, setValuesVisible] = useState(false);

  // Função para renderizar um botão de filtro
  const renderFilterButton = (label, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderFilterButton('Tema 1', () => setTopic1Visible(true))}
      {renderFilterButton('Tema 2', () => setTopic2Visible(true))}
      {renderFilterButton('Horário', () => setScheduleVisible(true))}
      {renderFilterButton('Valores', () => setValuesVisible(true))}

      {/* Modais ou Pickers para seleção de filtros iriam aqui */}
      {/* Exemplo:
      <Modal visible={isTopic1Visible} onRequestClose={() => setTopic1Visible(false)}>
        // Conteúdo do modal para Tema 1
      </Modal>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default FilterComponent;
