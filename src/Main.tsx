import { StyleSheet, Dimensions, View } from "react-native";
import React, { useEffect } from "react";
import Home from "./page/Home";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "./features/device/slice";
import Example from "./page/Example";

/**
 * This component is created to have App.tsx as a top level component.
 * Since we don't have access to index.js, this component acts as the
 * secondary top level layer.
 * @param props null
 * @returns  JSX.Element
 */
const Main = () => {
  const dispatch = useDispatch();
  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    dispatch(setWidth(width));
    dispatch(setHeight(height));
  }, []);

  return (
    <View>
      <Home />
      {/* <Example /> */}
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({});
