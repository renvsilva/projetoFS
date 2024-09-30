import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { useState } from "react";

export default function Login(navigation) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.loginInput}
        placeholder="Usuário"
        onChangeText={(text) => setUser(text)}
      />

      <TextInput
        style={styles.loginInput}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(user + " " + password)}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
