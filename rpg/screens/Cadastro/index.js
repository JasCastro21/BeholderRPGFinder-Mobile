import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { criarNovoUsuario } from "../../services/api/usuario";
import DateTimePicker from "@react-native-community/datetimepicker";

const validatePassword = (password) => {
  const requirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[!@#$%^&*]/.test(password),
  };

  const isValid = Object.values(requirements).every(Boolean);
  return { requirements, isValid };
};

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [datanascimento, setDataNascimento] = useState(new Date());
  const [validation, setValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = async () => {
    if (!isPasswordValid) {
      Alert.alert("Erro", "A senha não atende aos requisitos.");
      return;
    }
  
    try {
      const userData = {
        nome,
        email,
        senha: password,
        datanascimento: formatDateForApi(datanascimento),
      };
  
      const response = await criarNovoUsuario(userData);
  
      if (response.status === 200) {
        Alert.alert("Sucesso", "Cadastro efetuado com sucesso!");
        navigation.navigate("Login");
      } else {
        const errorMessage = response.data.errors.map((error) => error.msg);
        setErrorMessages(errorMessage);
        Alert.alert(
          "Erro ao criar usuário",
          errorMessage.join("\n"),
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.errors.map((error) => error.msg);
        setErrorMessages(errorMessage);
        Alert.alert(
          "Erro ao criar usuário",
          errorMessage.join("\n"),
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Erro ao criar usuário",
          "Não foi possível criar o usuário. Por favor, verifique sua conexão com a internet e tente novamente.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    const { requirements, isValid } = validatePassword(text);
    setValidation(requirements);
    setIsPasswordValid(isValid);
  };

  const formatDateForApi = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${day}/${month}/${year}`;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require("../../img/Fundo2.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Icon
                  name="user"
                  size={20}
                  color="#8B0000"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Nome de usuário"
                  autoCapitalize="none"
                  onChangeText={(text) => setNome(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon
                  name="envelope"
                  size={20}
                  color="#8B0000"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon
                  name="lock"
                  size={20}
                  color="#8B0000"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry={true}
                  onChangeText={handlePasswordChange}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon
                  name="calendar"
                  size={20}
                  color="#8B0000"
                  style={styles.icon}
                />
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        color: "black",
                        fontSize: 16,
                        height: 48,
                        width: "100%",
                      },
                    ]}
                    placeholder="Data de Nascimento"
                    editable={false}
                    value={datanascimento ? formatDateForApi(datanascimento) : ""}
                  />
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={datanascimento ? datanascimento : new Date()}
                   
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(false);
                      if (selectedDate) {
                        setDataNascimento(selectedDate);
                      }
                    }}
                  />
                )}
              </View>
              <View style={styles.passwordRequirements}>
                <Text>
                  {validation.length ? "✓" : "✕"} Pelo menos 8 caracteres
                </Text>
              </View>
              <View style={styles.passwordRequirements}>
                <Text>
                  {validation.uppercase ? "✓" : "✕"} Pelo menos 1 letra maiúscula
                </Text>
              </View>
              <View style={styles.passwordRequirements}>
                <Text>
                  {validation.lowercase ? "✓" : "✕"} Pelo menos uma letra
                  minúscula
                </Text>
              </View>
              <View style={styles.passwordRequirements}>
                <Text>
                  {validation.number ? "✓" : "✕"} Pelo menos um número
                </Text>
              </View>
              <View style={styles.passwordRequirements}>
                <Text>
                  {validation.specialChar ? "✓" : "✕"} Pelo menos um caractere
                  especial (!@#$%^&*)
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                disabled={!isPasswordValid}
              >
                <Text style={styles.buttonText}>Inscreva-se</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUp} onPress={handleSignIn}>
                <Text>
                  <Text style={styles.simpleText}>Já possui uma conta?</Text>
                  <Text style={styles.linkText}> Entre aqui!</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: "80%",
    maxWidth: 400,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#8B0000",
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: 12,
    left: 10,
  },
  button: {
    backgroundColor: "#8B0000",
    paddingHorizontal: 40,
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUp: {
    marginTop: 10,
    alignSelf: "center",
  },
  simpleText: {
    color: "black",
  },
  linkText: {
    color: "#8B0000",
    textDecorationLine: "none",
  },
  passwordRequirements: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
