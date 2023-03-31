import { StyleSheet, Image, View } from "react-native";
import React from "react";

type Props = { source: HTMLImageElement };

const BoxImg = ({ source }: Props) => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={source} />
    </View>
  );
};

export default BoxImg;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  imgContainer: {
    justifyContent: "center",
  },
});
