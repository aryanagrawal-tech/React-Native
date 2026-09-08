import { Image, StyleSheet, Text, View } from "react-native";

const CardDetail = (props: { textdata: string }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
      />

      <Text style={styles.text}>{props.textdata} Card Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 20,
    margin: 10,
    backgroundColor: "#eee",
  },

  image: {
    width: 100,
    height: 100,
  },

  text: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default CardDetail;
