import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./Styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
