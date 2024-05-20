import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { getMesas } from '../../services/api/mesa';
import { getUsuarioPorId } from '../../services/api/usuario';
import { entrarNaMesa } from '../../services/api/usuario';
import { useNavigation } from '@react-navigation/native'; // Importe o useNavigation aqui
import CardM from '../../components/CardM'; 

import { listarUsuariosDaMesa } from '../../services/api/usuariomesa';
import { fetchUserData } from '../../services/utils/auth';

const Pesquisa = () => {
  const navigation = useNavigation(); // Use o hook useNavigation

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
          console.log("Dados do mestre:", mestreResponse.data); // Adiciona este console.log para depurar
    
          const usuariosDaMesaResponse = await listarUsuariosDaMesa(mesa.id);
    
          const [mestreResponseData, usuariosDaMesaResponseData] = await Promise.all([mestreResponse, usuariosDaMesaResponse]);
    
          const usuariosNaMesa = usuariosDaMesaResponseData.data.map(usuario => usuario.usuario.id);
          const usuarioJaNaMesa = usuariosNaMesa.includes(userId);


    
          mesasComMestre.push({
            ...mesa,
            mestreNome: mestreResponseData.data[0].nome,
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
        
        Alert.alert(
          'Sucesso',
          'Retorne à aventura!',
          [
            {
              text: 'Continuar',
              onPress: () => navigation.navigate('Chat'),
            },
          ],
          { cancelable: false }
        );
  
      } else if (mesa.vagasDisponiveis <= 0) {
        
        alert('Desculpe, esta mesa está cheia. Tente outra!');
      } else {
        await entrarNaMesa(mesaId);
        Alert.alert(
          'Sucesso',
          'Mesa criada com sucesso!',
          [
            {
              text: 'Continuar',
              onPress: () => navigation.navigate('Chat'),
            },
          ],
          { cancelable: false }
        );
        
      }
    } catch (error) {
      alert('Erro ao entrar na mesa. Tente novamente.');
    }
  };
  

  const handleAdicionarMesaPress = () => {
    navigation.navigate('CriarMesa');
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
      <TouchableOpacity style={styles.addButton} onPress={handleAdicionarMesaPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#8b0000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  addButtonText: {
    fontSize: 30,
    color: 'white',
  },
});

export default Pesquisa;
