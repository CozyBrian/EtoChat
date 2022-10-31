import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import OnCallScreen from "./src/views/onCall/on-call.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/views/home/home.screen";
import WaitingScreen from "./src/views/waiting/waiting.screen";
import LobbyScreen from "./src/views/lobby/lobby.screen";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["SplashScreen.show"]);

export type RootStackParams = {
  Home: any;
  Waiting: any;
  OnCall: any;
  Lobby: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Waiting" component={WaitingScreen} />
          <Stack.Screen name="OnCall" component={OnCallScreen} />
          <Stack.Screen name="Lobby" component={LobbyScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
