import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type Props = { source: HTMLImageElement };

export const IconMd = ({ source }: Props) => {
  return (
    <View style={styles.iconMdBg}>
      <Image style={styles.iconMd} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconMd: {
    width: 24,
    height: 24,
  },
  iconMdBg: {
    backgroundColor: "#c9b6b8e6",
    padding: 15,
    borderRadius: 50,
  },
});
