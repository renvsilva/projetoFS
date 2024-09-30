import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./Styles";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <StatusBar style="auto" />
    </View>
  );
}
