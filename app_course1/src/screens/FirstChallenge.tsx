// import { StyleSheet, Text, View } from "react-native";

// const App = () => {
//   const myName = "Aryan";

//   return (
//     <View style={styles.container}>
//       {/* First Text Element */}
//       <Text style={styles.firstText}>Welcome to Thapa Technical Channel</Text>

//       {/* Second Text Element */}
//       <Text style={styles.secondText}>
//         We love React Native and I am a subscriber of Thapa Technical Channel
//       </Text>

//       {/* Third Text Element */}
//       <Text style={styles.thirdText}>Hii, My name is {myName}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },

//   firstText: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 40,
//   },

//   secondText: {
//     fontSize: 30,
//   },

//   thirdText: {
//     fontSize: 25,
//   },
// });

// export default App;

import { StyleSheet, Text, View } from "react-native";

const FirstChallenge = () => {
  const YourName = "GUNI";
  return (
    <View>
      <Text style={styles.textstyleOne}>Welcome to This Challenge</Text>

      <Text style={styles.textstyleTwo}>I am enjoying the new tech</Text>

      <Text>Hyy, My name is {YourName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyleOne: {
    fontSize: 30,
    color: "blue",
  },

  textstyleTwo: {
    fontSize: 20,
    color: "red",
  },
});

export default FirstChallenge;
