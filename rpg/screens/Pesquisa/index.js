import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getMesas } from '../../services/api/mesa';
import { getUsuarioPorId } from '../../services/api/usuario';
import { entrarNaMesa } from '../../services/api/usuario';

import CardM from '../../components/CardM'; 

import { listarUsuariosDaMesa } from '../../services/api/usuariomesa';
import { fetchUserData } from '../../services/utils/auth';

const Pesquisa = () => {
  const [mesas, setMesas] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserDataAndMesas = async () => {
      try {
        const userData = await fetchUserData();
        const userId = userData.id; // Defina userId dentro da função fetchUserDataAndMesas
  
        const response = await getMesas();
        const mesasData = response.data;
  
        const mesasComMestre = [];
        for (const mesa of mesasData) {
          const mestreResponse = await getUsuarioPorId(mesa.mestre); 
          const usuariosDaMesaResponse = await listarUsuariosDaMesa(mesa.id);
  

          const [mestreResponseData, usuariosDaMesaResponseData] = await Promise.all([mestreResponse, usuariosDaMesaResponse]);
  
          const usuariosNaMesa = usuariosDaMesaResponseData.data.map(usuario => usuario.usuario.id);
          const usuarioJaNaMesa = usuariosNaMesa.includes(userId);
  
          mesasComMestre.push({
            ...mesa,
            mestreNome: mestreResponseData.data.nome,
            usuarioJaNaMesa,
            vagasDisponiveis: mesa.vagas
          });
        }
  
        setMesas(mesasComMestre);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário e mesas:', error);
      }
    };
  
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        console.log('ID do usuário fetchado pesquisa:', userData.id);
        setUserId(userData.id);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };
  
    fetchData();
    fetchUserDataAndMesas(); // Chame fetchUserDataAndMesas após setUserId
  
  }, []); // Certifique-se de passar um array vazio como segundo argumento do useEffect
  

  const handleEntrarPress = async (mesaId) => {
    try {
      const mesa = mesas.find(m => m.id === mesaId);
      if (!mesa) {
        console.error("Mesa não encontrada.");
        return;
      }
  
      const usuarioJaNaMesa = mesa.usuarioJaNaMesa;
  
      if (usuarioJaNaMesa) {
        // Se o usuário já estiver na mesa, podemos implementar a lógica para sair da mesa aqui
        alert('Você está retornando à mesa!');
        // Implemente a lógica para sair da mesa aqui
      }else if (vagasDisponiveis <= 0) {
        // Se não houver vagas disponíveis, exiba uma mensagem de erro
        alert('Desculpe, esta mesa está cheia. Tente outra!');
      } else {
        await entrarNaMesa(mesaId);
        alert('Você entrou na mesa com sucesso!');
        // Aqui você pode adicionar lógica adicional, como redirecionar o usuário para a página da mesa
      }
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
            buttonText={item.usuarioJaNaMesa ? 'Retornar' : 'Entrar'}
            onButtonPress={() => handleEntrarPress(item.id)}
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
