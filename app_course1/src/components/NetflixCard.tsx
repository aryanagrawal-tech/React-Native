import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";

const NetflixCard = () => {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const watchNow = () => {
    Linking.openURL("https://www.netflix.com/in/title/80057281");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Movie Image */}
        <Image
          source={require("../../assets/images/stranger.png")}
          style={styles.image}
        />

        {/* Movie Title */}
        <Text style={styles.title}>Stranger Things</Text>

        {/* Movie Description */}
        <Text style={styles.description}>
          When a young boy disappears, his friends uncover a mysterious world
          filled with secret experiments and strange creatures.
        </Text>

        {/* Watch Now Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={watchNow}
        >
          <Text style={styles.buttonText}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main screen
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
    padding: 20,
  },

  // Netflix card
  card: {
    width: 320,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#222",
    alignItems: "center",

    // Shadow
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,

    elevation: 8,
  },

  // Movie poster
  image: {
    width: 290,
    height: 350,
    borderRadius: 10,
  },

  // Movie title
  title: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "JosefinSans_700Bold",
    marginTop: 18,
    textAlign: "center",
  },

  // Movie description
  description: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    marginTop: 12,
  },

  // Watch button
  button: {
    width: "100%",
    backgroundColor: "#E50914",
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },

  // Button text
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "JosefinSans_700Bold",
  },
});

export default NetflixCard;
