import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontWeightProperty } from "../../../app/types/CSS";

type Props = {
  text: string | null;
  margin?: number | undefined;
  padding?: number | undefined;
  fontSize?: 12 | 16 | null;
  weight?: FontWeightProperty;
};

export const SubTitleMD = ({
  text,
  margin,
  padding,
  fontSize = null,
  weight = 500,
}: Props) => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontWeight: `${weight}`,
          letterSpacing: 1,
          margin: margin,
          padding: padding,
          fontSize: fontSize ?? 12,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
