import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const series = [
  {
    id: "1",
    title: "Stranger Things",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "2",
    title: "Wednesday",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "3",
    title: "Money Heist",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "4",
    title: "Dark",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "5",
    title: "The Witcher",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "6",
    title: "Breaking Bad",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "7",
    title: "The Crown",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "8",
    title: "Peaky Blinders",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "9",
    title: "Squid Game",
    image: require("../../../assets/images/stranger.png"),
  },
  {
    id: "10",
    title: "Lucifer",
    image: require("../../../assets/images/stranger.png"),
  },
];

const ChallagentFlatList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Top 10 Series</Text>

      <FlatList
        data={series}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.number}>{item.id}</Text>

              <Image source={item.image} style={styles.image} />

              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        // showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    paddingTop: 40,
  },

  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    height: 180,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#222",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  number: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    width: 45,
    textAlign: "center",
  },

  image: {
    width: 110,
    height: 155,
    borderRadius: 8,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    flex: 1,
  },
});

export default ChallagentFlatList;
