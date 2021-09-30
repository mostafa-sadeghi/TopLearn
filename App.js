import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import LoginScreen from "./app/Screens/LoginScreen";

const Stack = createStackNavigator();
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
export default function App() {
  const [fontLoading, setFontLoading] = useState(false);
  const getFonts = () => {
    return Font.loadAsync({
      yekan: require("./app/assets/fonts/yekan.ttf"),
    });
  };
  if (fontLoading) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoading(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
