import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  // Username typing
  const handleUsername = (data: string) => {
    setUserName(data);

    console.log("Username:", data);
  };

  // Password typing
  const handlePassword = (data: string) => {
    setPassword(data);

    console.log("Password:", data);
  };

  const submit = () => {
    if (!userName || !password) {
      Alert.alert("Validation", "Please fill all the fields");
      return;
    }

    if (!agree) {
      Alert.alert("Validation", "Please agree with the TC");
      return;
    }

    // Final user details
    console.log("Username:", userName);
    console.log("Password:", password);
    console.log("Agree:", agree);

    // Go to Homepage
    router.push({
      pathname: "/homepage",
      params: {
        userName: userName,
      },
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>

      <Text style={styles.description}>
        You can reach us anytime via any@thapa.com
      </Text>

      {/* Username */}
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your userName</Text>

        <TextInput
          style={styles.inputStyle}
          placeholder="vinod"
          autoCorrect={false}
          autoCapitalize="none"
          value={userName}
          onChangeText={handleUsername}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>

        <TextInput
          style={styles.inputStyle}
          placeholder="demo@thapa.com"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePassword}
        />
      </View>

      {/* Checkbox */}
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={setAgree}
          color={agree ? "#4630EB" : undefined}
        />

        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 8,
  },

  description: {
    fontSize: 15,
    color: "#777",
    paddingBottom: 15,
    lineHeight: 20,
  },

  inputContainer: {
    marginTop: 18,
  },

  labels: {
    fontSize: 13,
    color: "#777",
    paddingBottom: 5,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: "#bbb",
    paddingHorizontal: 10,
    paddingVertical: 7,
    height: 40,
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  wrapperText: {
    marginLeft: 8,
    color: "#777",
    fontSize: 11,
  },

  buttonStyle: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Login;
