import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { ThemeImg } from "../BoxImg";
import { ThemeSubTitleMD, ThemeSubTitleSM } from "../Title";

type Props = {
  source: HTMLImageElement;
  title: string | null;
  subTitle?: string | null;
  containerStyle?: ViewStyle;
};

export const ThemeCard = ({
  source,
  title = null,
  subTitle = null,
  containerStyle,
}: Props) => {
  return (
    <View
      style={{
        ...containerStyle,
        alignItems: "flex-start",
      }}
    >
      <ThemeImg source={source} />
      <ThemeSubTitleMD text={title} />
      <ThemeSubTitleSM text={subTitle} />
    </View>
  );
};

const styles = StyleSheet.create({});
