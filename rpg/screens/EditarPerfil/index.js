import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { fetchUserData } from "../../services/utils/auth";
import { editarPerfil } from "../../services/api/usuario";

export default function EditProfile() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    telefone: "",
    descricao: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleDescriptionChange = (text) => {
    setUserData({ ...userData, descricao: text });
  };

  const handleSubmit = async () => {
    try {
      const camposEditados = { descricao: userData.descricao };
  
      const response = await editarPerfil(camposEditados);
      
      if (response) {
        Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
      } else {
        throw new Error("Erro ao atualizar perfil");
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error.message);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar o perfil. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Perfil</Text>
      <View style={styles.formGroup}>
        <Text>Nome:</Text>
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value={userData.nome}
          editable={false}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Email:</Text>
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value={userData.email}
          editable={false}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={userData.telefone}
          onChangeText={(text) => setUserData({ ...userData, telefone: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Descrição:</Text>
        <TextInput
          style={styles.input}
          value={userData.descricao}
          onChangeText={handleDescriptionChange}
        />
      </View>
      <Button title="Salvar" onPress={handleSubmit} color="#8b0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  disabledInput: {
    backgroundColor: "#c4c4c4",
  },
});
