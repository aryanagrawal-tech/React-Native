import { ScrollView, StyleSheet } from "react-native";
import DemoStyle from "../components/screens/DemoStyle";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DemoStyle />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
