import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  text: string | null;
  margin?: number | undefined;
  padding?: number | undefined;
};

export const SubTitleMD = ({ text, margin, padding }: Props) => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          letterSpacing: 1,
          margin: margin,
          padding: padding,
          fontSize: 12,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
