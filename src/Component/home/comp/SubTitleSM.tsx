import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  text: string | null;
  margin?: number | undefined;
  padding?: number | undefined;
};

const SubTitleSM = ({ text, margin, padding }: Props) => {
  return (
    <View>
      <Text style={{ ...styles.font, margin, padding }}>{text}</Text>
    </View>
  );
};

export default SubTitleSM;

const styles = StyleSheet.create({
  font: {
    color: "#c3a3a8",
  },
});
