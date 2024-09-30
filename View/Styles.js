import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#225c20",
    color: "#ffffff",
    width: "25%",
    borderRadius: 5,
    padding: 5,
  },

  buttonText: {
    color: "#ffffff",
  },

  loginInput: {
    borderWidth: 1,
    alignItems: "center",
    width: "75%",
    height: "6%",
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
});

export { styles };
