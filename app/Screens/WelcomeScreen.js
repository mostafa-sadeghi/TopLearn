import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={1}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.firstText}>
          خودآموزی، کسب تجربه، ورود به بازار کار
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="ورود"
          color="blue"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <CustomButton title="ثبت نام" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 255,
    height: 200,
  },
  firstText: {
    fontFamily: "yekan",
    fontSize: 25,
    top: 25,
    color: "white",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
