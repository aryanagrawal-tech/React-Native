import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ColorGenerator = () => {
  const [newColor, setNewColor] = useState<string[]>([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setNewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.textStyle}>Generate Random Color</Text>
      </TouchableOpacity>

      <FlatList
        data={newColor}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.colorContainer, { backgroundColor: item }]}>
            <Text style={styles.colorText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },

  buttonStyle: {
    backgroundColor: "#03A9F4",
    padding: 10,
    marginHorizontal: 0,
  },

  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

  colorContainer: {
    height: 55,
    width: 150,
    alignSelf: "center",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  colorText: {
    color: "white",
    fontSize: 16,
  },
});

export default ColorGenerator;
