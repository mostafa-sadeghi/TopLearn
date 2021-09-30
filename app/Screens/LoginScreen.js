import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="ایمیل کاربری"
                autoCompleteType="email"
                keyboardType="email-address"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={handleChange("email")}
              />
              <MaterialIcons
                name="email"
                size={24}
                color="black"
                style={styles.icon}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="کلمه عبور"
                autoCompleteType="password"
                style={styles.textInput}
                onChangeText={handleChange("password")}
              />
              <MaterialCommunityIcons
                name="onepassword"
                size={24}
                color="black"
                style={styles.icon}
              />
            </View>
            <View style={{ width: "60%" }}>
              <CustomButton title="ورود کاربر" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  logo: {
    width: 200,
    height: 200,
  },
  textInput: {
    width: "80%",
    marginBottom: 10,
    backgroundColor: "lightgray",
    borderRadius: 30,
    textAlign: "center",

    padding: 10,
  },
  icon: {
    alignSelf: "center",
    marginBottom: 10,
    marginLeft: 10,
  },
});
