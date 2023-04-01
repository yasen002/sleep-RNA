import { StyleSheet, Dimensions, View, Button, Text } from "react-native";
import React, { useEffect } from "react";
import Home from "./page/Home";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "./features/device/slice";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RecentSessions } from "./page/RecentSessions";
import Breaks from "./page/Breaks";
import Community from "./page/Community";
import Focus from "./page/Focus";
import Mine from "./page/Mine";
import Relax from "./page/Relax";
import Report from "./page/Report";
import Sleep from "./page/Sleep";

//--Navigator Types
export type RootStackParamList = {
  Home: undefined;
  RecentSessions: undefined;
  Sleep: undefined;
  Breaks: undefined;
  Community: undefined;
  Focus: undefined;
  Mine: undefined;
  Relax: undefined;
  Report: undefined;
};
export type ScreenNames = keyof RootStackParamList;
// export type HomeNavProps = NativeStackScreenProps<RootStackParamList, "Home">;

/**
 * This component is created to have App.tsx as a top level component.
 * Since we don't have access to index.js, this component acts as the
 * secondary top level layer. This pages hold the <NavigationContainer>
 * @param props null
 * @returns  JSX.Element
 */
const Main = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    dispatch(setWidth(width));
    dispatch(setHeight(height));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="RecentSessions" component={RecentSessions} />
        <Stack.Screen name="Breaks" component={Breaks} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Focus" component={Focus} />
        <Stack.Screen name="Mine" component={Mine} />
        <Stack.Screen name="Relax" component={Relax} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Sleep" component={Sleep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;

const styles = StyleSheet.create({});
