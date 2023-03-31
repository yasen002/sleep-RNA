import { StyleSheet, View, Image } from "react-native";
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
    width: 45,
    height: 45,
  },
  iconMdBg: {
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
