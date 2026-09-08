import { StyleSheet, Text, View } from "react-native";

const DemoStyle = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* Box 1 */}
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>

        {/* Box 2 */}
        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>

        {/* Box 3 */}
        <View style={styles.box3}>
          <Text>Box 3</Text>
        </View>

        {/* Box 4 */}
        <View style={styles.box4}>
          <Text>Box 4</Text>
        </View>

        {/* Box 5 - Exact Center */}
        <View style={styles.box5}>
          <Text>Box 5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: 260,
    height: 350,
    margin: 1,
    backgroundColor: "#eef7ff",
    borderWidth: 2,
    borderColor: "#263238",
    position: "relative",
  },

  box1: {
    width: 42,
    height: 42,
    backgroundColor: "#9BBF63",
    position: "absolute",
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  box2: {
    width: 42,
    height: 42,
    backgroundColor: "#D4B996",
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  box3: {
    width: 42,
    height: 42,
    backgroundColor: "#9CC3D5",
    position: "absolute",
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  box4: {
    width: 42,
    height: 42,
    backgroundColor: "#E6A5A5",
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  box5: {
    width: 42,
    height: 42,
    backgroundColor: "#B5E5D5",

    position: "absolute",

    // Exact center of parent
    top: "50%",
    left: "50%",

    transform: [{ translateX: -21 }, { translateY: -21 }],

    justifyContent: "center",
    alignItems: "center",
  },
});

export default DemoStyle;
