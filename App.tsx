import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Incomes from "./screens/Incomes";
import Expenses from "./screens/Expenses";
import { StackParamList } from "./@types/types";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor:
                theme.config.initialColorMode === "dark"
                  ? "#27272A"
                  : "#F5F5F4",
            },
            headerTintColor:
              theme.config.initialColorMode === "dark" ? "#F5F5F4" : "#27272A",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Incomes" component={Incomes} />
          <Stack.Screen name="Expenses" component={Expenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
