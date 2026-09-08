import { StyleSheet, View } from "react-native";
import DemoStyle from "../components/screens/DemoStyle";

export default function App() {
  return (
    <View style={styles.container}>
      <DemoStyle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
