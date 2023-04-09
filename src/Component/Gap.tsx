import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { width?: number; height?: number };
/**
 * gap property for <View/> is not working in Expo Snack, so I am using this empty view.
 * @param param0
 * @returns
 */
const Gap = ({ width, height }: Props) => {
  return <View style={{ height, width }}></View>;
};

export default Gap;

const styles = StyleSheet.create({});
