import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getMesas } from '../../services/api/mesa';
import { getUsuarioPorId } from '../../services/api/usuario';
import { entrarNaMesa } from '../../services/api/usuario';

import CardM from '../../components/CardM'; 

const Pesquisa = () => {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await getMesas();
        const mesasData = response.data;

        // Itera sobre cada mesa para buscar o nome do mestre
        const mesasComMestre = await Promise.all(mesasData.map(async (mesa) => {
          const mestreResponse = await getUsuarioPorId(mesa.mestre);
          return {
            ...mesa,
            mestreNome: mestreResponse.data.nome,
          };
        }));

        setMesas(mesasComMestre);
      } catch (error) {
        console.error('Erro ao buscar mesas:', error);
      }
    };

    fetchMesas();
  }, []);

  const handleEntrarPress = async (mesaId) => {
    try {
      await entrarNaMesa(mesaId);
      alert('Você entrou na mesa com sucesso!');
      // Aqui você pode adicionar lógica adicional, como redirecionar o usuário para a página da mesa
    } catch (error) {
      alert('Erro ao entrar na mesa. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mesas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardM
            title={item.titulo}
            subtitle={item.subtitulo}
            descricao={item.descricao}
            mestre={item.mestreNome}
            vagas={item.vagas}
            dia={item.dia}
            horario={item.horario}
            preco={item.preco}
            onPress={() => { /* ação quando clicar no card */ }}
            onEntrarPress={() => handleEntrarPress(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>Nenhuma mesa encontrada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default Pesquisa;