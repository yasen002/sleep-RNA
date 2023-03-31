import { StyleSheet, View } from "react-native";
import React from "react";
import BoxImg from "../../BoxImg";
import { SubTitleMD } from "./SubTitleMD";
import SubTitleSM from "./SubTitleSM";

type Props = {
  source: HTMLImageElement;
  title: string | null;
  subTitle?: string | null;
};

export const ThemeCard = ({ source, title, subTitle = null }: Props) => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        gap: 2,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <BoxImg source={source} />
      <SubTitleMD text={title} margin={1} />
      <SubTitleSM text={subTitle} margin={1} />
    </View>
  );
};

const styles = StyleSheet.create({});
