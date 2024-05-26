import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import Dialog from "react-native-dialog";
import { fetchUserData } from "../../services/utils/auth";
import { editarPerfil, excluirPerfil } from "../../services/api/usuario";
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    telefone: "",
    descricao: "",
  });

  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const [dialogVisible, setDialogVisible] = useState(false); // Estado para controlar a visibilidade do diálogo

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

  const handleExcluir = async () => {
    try {
      const response = await excluirPerfil(senha);

      if (response) {
        Alert.alert("Perfil Excluído", "O Beholder está triste");
        navigation.navigate("Login");
      } else {
        throw new Error("Erro ao excluir perfil (beholder feliz)");
      }
    } catch (error) {
      console.error("Erro ao excluir perfil:", error.message);
      Alert.alert("Erro", "Ocorreu um erro ao excluir o perfil. Por favor, tente novamente mais tarde.");
    }
  };

  const promptForPassword = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleConfirm = () => {
    setDialogVisible(false);
    handleExcluir();
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
      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={handleSubmit} color="#8b0000" />
      </View>

      <View style={styles.deleteButtonContainer}>
        <Button title="Excluir" onPress={promptForPassword} color="#8b0000" />
      </View>
      
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Excluir Conta</Dialog.Title>
        <Dialog.Description>
          Deseja destruir os sentimentos do Beholder? Esta ação não pode ser desfeita.
        </Dialog.Description>
        <Dialog.Input
          placeholder="Digite sua senha"
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
        />
        <Dialog.Button label="Cancelar" onPress={handleCancel} />
        <Dialog.Button label="Excluir" onPress={handleConfirm} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  deleteButtonContainer: {
    marginTop: 20,
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
  deleteButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#8b0000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
    color: "#8b0000",
  },
});
