import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const OurButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Image Button</Text>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Alert.alert("Image Button Pressed!");
        }}
      >
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 30,
    marginBottom: 30,
  },

  imageButton: {
    width: 100,
    height: 100,
  },
});

export default OurButton;
