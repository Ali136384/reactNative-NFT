import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "react-native";
import Welcome from "./screens/Welcome";
import NFTdetails from "./screens/NFTdetails";
export default function App() {
  const [fontLoded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Black.ttf"),
  });

  const Stack = createNativeStackNavigator();
  if (!fontLoded) return null;
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen
            options={{
              headerTitleAlign: "center",
              headerShown: false,
            }}
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen
            options={{
              headerTitleAlign: "center",
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              headerTitleAlign: "center",
              headerShown: false,
            }}
            name="NFT-detalis"
            component={NFTdetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
