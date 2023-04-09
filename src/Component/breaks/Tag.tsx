import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeSubTitleSM } from "../Title";

type Props = { text: string };

const Tag = ({ text }: Props) => {
  return (
    <View style={{ backgroundColor: "#D9D9FF", padding: 5, borderRadius: 5 }}>
      <ThemeSubTitleSM text={text} color={"#8383FF"} />
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({});
