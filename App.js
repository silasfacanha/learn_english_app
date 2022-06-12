import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

const msg = () => {
  Alert.alert("Aviso", "Você se compromete a estudar.");
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Eu estou sempre fazendo aquilo que não consigo fazer para que eu possa
        aprender a fazê-lo. Pablo Picasso
      </Text>
      <Button title="Mudar minha vida" onPress={msg} />
      <Image source={require("./assets/lower_part.jpg")} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
