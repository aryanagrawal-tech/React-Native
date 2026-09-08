import { View } from "react-native";
import CardDetail from "../components/CardDetails";

const ImageFile = () => {
  return (
    <View>
      <CardDetail textdata="Hello" />
      <CardDetail textdata="React Native" />
      <CardDetail textdata="Thapa Technical" />
    </View>
  );
};

export default ImageFile;
