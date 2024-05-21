import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

export default function EditarMesa({ route }) {
  const [mesa, setMesa] = useState({
    id: "",
    titulo: "",
    subtitulo: "",
    sistema: "",
    descricao: "",
    criado_em: "",
    dia: "",
    horario: "",
    periodo: "",
    preco: 0,
    vagas: 0,
    mestre: "",
  });

  useEffect(() => {
    // Função para buscar os dados da mesa ao carregar a página
    const fetchMesaData = async () => {
      try {
        // Simulando fetch de dados da mesa
        const fetchedMesa = {
          id: "60934a5e-7f8e-4913-9e5f-90a8c76ade8e",
          titulo: "Mesa do Helldin",
          subtitulo: "Subtitulo bom",
          sistema: "Fate",
          descricao: "descrição boa",
          criado_em: "2023-12-13T22:46:22.061508+00:00",
          dia: "Diária",
          horario: "22:00:00",
          periodo: "diaria",
          preco: 1,
          vagas: 4,
          mestre: "1408f1b9-501d-45d2-a877-f6872f153aee",
          chat: "16a136bb-fb19-41c7-8ec2-0f5fec3e04cc",
        };
        setMesa(fetchedMesa);
      } catch (error) {
        console.error("Erro ao buscar dados da mesa:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados da mesa.");
      }
    };

    fetchMesaData();
  }, []);

  const handleSave = () => {
    // Função para salvar os dados da mesa
    Alert.alert("Salvar", "Dados da mesa salvos com sucesso!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{mesa.titulo}</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>ID da Mesa</Text>
        <Text style={styles.nonEditable}>{mesa.id}</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={mesa.titulo}
          onChangeText={(text) => setMesa({ ...mesa, titulo: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Subtítulo</Text>
        <TextInput
          style={styles.input}
          value={mesa.subtitulo}
          onChangeText={(text) => setMesa({ ...mesa, subtitulo: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Sistema</Text>
        <TextInput
          style={styles.input}
          value={mesa.sistema}
          onChangeText={(text) => setMesa({ ...mesa, sistema: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={mesa.descricao}
          onChangeText={(text) => setMesa({ ...mesa, descricao: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Dia</Text>
        <TextInput
          style={styles.input}
          value={mesa.dia}
          onChangeText={(text) => setMesa({ ...mesa, dia: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Horário</Text>
        <TextInput
          style={styles.input}
          value={mesa.horario}
          onChangeText={(text) => setMesa({ ...mesa, horario: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Período</Text>
        <TextInput
          style={styles.input}
          value={mesa.periodo}
          onChangeText={(text) => setMesa({ ...mesa, periodo: text })}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Vagas</Text>
        <Text style={styles.nonEditable}>{mesa.vagas}</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Preço</Text>
        <Text style={styles.nonEditable}>{mesa.preco}</Text>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.participantsButton}
        onPress={() =>
          Alert.alert(
            "Participantes",
            "Função de participantes ainda não implementada"
          )
        }
      >
        <Text style={styles.participantsButtonText}>Participantes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#8B0000",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#8B0000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#8B0000",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f0f0f0",
  },
  saveButton: {
    backgroundColor: "#8B0000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  participantsButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#8B0000",
  },
  participantsButtonText: {
    color: "#8B0000",
    fontSize: 18,
    fontWeight: "bold",
  },
  nonEditable: {
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#c4c4c4",
    marginBottom: 10,
  },
});
