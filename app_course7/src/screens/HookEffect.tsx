import { useEffect, useState } from "react";

import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  image: string;
};

const HookEffect = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myData, setMyData] = useState<User[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json",
      );

      const actualResponse: User[] = await response.json();

      setMyData(actualResponse);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const showData = ({ item }: { item: User }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: item.image,
            }}
          />
        </View>

        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}>Bio-Data</Text>

          <Text style={styles.idNumber}>
            #{item.id < 10 ? `0${item.id}` : item.id}
          </Text>
        </View>

        <View style={styles.mainContain}>
          <Text style={styles.myName}>Name: {item.name}</Text>

          <Text style={styles.myName}>Email: {item.email}</Text>

          <Text style={styles.myName}>Mobile: {item.mobile}</Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>List Of Students</Text>

      <FlatList
        data={myData}
        renderItem={showData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b99be3",
    paddingTop: 20,
  },

  mainHeader: {
    fontSize: 22,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 15,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "72%",
    backgroundColor: "#ffffff",
    alignSelf: "center",
    marginBottom: 30,
  },

  imgContainer: {
    padding: 6,
    backgroundColor: "#ffffff",
  },

  imgStyle: {
    width: "100%",
    height: 125,
    resizeMode: "cover",
  },

  bioDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#292929",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },

  bioData: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },

  idNumber: {
    fontSize: 16,
    color: "#ffffff",
  },

  mainContain: {
    backgroundColor: "#292929",
    paddingHorizontal: 8,
    paddingBottom: 12,
  },

  myName: {
    color: "#ffffff",
    fontSize: 12,
    marginTop: 5,
  },
});

export default HookEffect;
