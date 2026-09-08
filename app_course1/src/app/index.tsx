// import { StyleSheet, Text, View } from "react-native";
// import CustomComponent from "../screens/CustomComponent";
// import ThreeTextElements from "../screens/ThreeTextElements";

// const App = () => {
//   const myName = "Thapa Technical";

//   const myElement = <Text>Hello World</Text>;

//   const getFullName = (
//     firstName: string,
//     secondName: string,
//     thirdName: string,
//   ) => {
//     return `My name is ${firstName} ${secondName} ${thirdName}`;
//   };

//   return (
//     <View>
//       <Text style={styles.textStyle}>Hello World {myName}</Text>

//       <CustomComponent />

//       {myElement}

//       <Text>Hyy my name is {getFullName("Vinod", "Ram", "Jay")}</Text>
//     </View>
//   );
// };

// // Create a StyleSheet to style the component
// const styles = StyleSheet.create({
//   textStyle: {
//     color: "red",
//   },
// });

// export default function App() {
//   return <ThreeTextElements />;
// }

// // Export the file, so that we can use it elsewhere in our app
// export default App;
// import FlatListDemo from "@/screens/FlatListDemo";
// import { View } from "react-native";
// import FisrtChallange from "../screens/FirstChallenge";
// import Outbutton form "../screens/outbutton";

// export default function App() {
//   return (
//     <View>
//       <FisrtChallange />
//       <FlatListDemo />
//     </View>
//   );
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ScrollView, StyleSheet } from "react-native";
import NetflixCard from "../components/NetflixCard";
// import DemoStyle from "../screens/DemoStyle";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NetflixCard />
      {/* <DemoStyle /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
