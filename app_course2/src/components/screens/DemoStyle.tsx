import { StyleSheet, Text, View } from "react-native";

const DemoStyle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childText1}>
        <Text style={styles.text1}>Box Model RN</Text>
      </View>

      <View style={styles.childText2}>
        <Text style={styles.text2}>Box Model RN</Text>
      </View>

      <View style={styles.childText3}>
        <Text style={styles.text3}>Box Model RN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    borderWidth: 2,
    borderColor: "#263238",
    paddingVertical: 20,
    paddingHorizontal: 36,
  },

  childText1: {
    height: 95,
    backgroundColor: "#9BBF63",
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  childText2: {
    height: 95,
    backgroundColor: "#D4B996",
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  childText3: {
    height: 95,
    backgroundColor: "#9CC3D5",
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    color: "#45652A",
    fontSize: 16,
  },

  text2: {
    color: "#A07855",
    fontSize: 16,
  },

  text3: {
    color: "#0063B2",
    fontSize: 16,
  },
});

export default DemoStyle;
