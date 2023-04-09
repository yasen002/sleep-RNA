import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { ThemeImg } from "../BoxImg";
import { ThemeSubTitleMD, ThemeSubTitleSM } from "../Title";
import TouchableCard from "../Touchable";
import { ScreenNames } from "../../Main";

type Props = {
  source: HTMLImageElement;
  title: string | null;
  subTitle?: string | null;
  containerStyle?: ViewStyle;
  navigate?: ScreenNames;
};

export const ThemeCard = ({
  source,
  title = null,
  subTitle = null,
  containerStyle,
  navigate,
}: Props) => {
  return (
    <TouchableCard
      // navigate={navigate}

      navigate="Breaks" //Note: only navigates to breaksDetail for now.
    >
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
    </TouchableCard>
  );
};

const styles = StyleSheet.create({});
