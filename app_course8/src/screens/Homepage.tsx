import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Homepage = () => {
  const router = useRouter();
  const { userName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome {userName} 😀</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  welcome: {
    fontSize: 24,
    color: "#405a99",
    marginBottom: 8,
  },

  button: {
    backgroundColor: "#2196f3",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 2,
  },

  buttonText: {
    color: "white",
    fontSize: 11,
  },
});

export default Homepage;
