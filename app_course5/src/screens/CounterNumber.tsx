import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CounterNumber = () => {
  const [count, setCount] = useState(0);

  // Increase counter
  const increase = () => {
    setCount(count + 10);
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  // Decrease counter
  const decrease = () => {
    if (count > 0) {
      setCount(count - 10);
    } else {
      alert("Counter cannot be less than 0");
    }
  };

  return (
    <View style={styles.container}>
      {/* Counter Number */}
      <Text style={styles.number}>{count}</Text>

      {/* Increase Button */}
      <TouchableOpacity style={styles.button} onPress={increase}>
        <Text style={styles.buttonText}>+ 10</Text>
      </TouchableOpacity>

      {/* Reset Button */}
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      {/* Decrease Button */}
      <TouchableOpacity style={styles.button} onPress={decrease}>
        <Text style={styles.buttonText}>- 10</Text>
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

  number: {
    fontSize: 55,
    marginBottom: 50,
  },

  button: {
    width: 140,
    height: 56,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default CounterNumber;
