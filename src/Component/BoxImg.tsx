import { StyleSheet, Image, View, ViewStyle } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";

interface ComponentProps {
  source: HTMLImageElement;
  ComponentId: string;
  width?: number;
  height?: number;
  containerStyle?: ViewStyle;
}
interface ComponentDispatch {}

type Props = ComponentProps & ComponentDispatch;

const BoxImg = ({
  source,
  width = 158,
  height = 158,
  containerStyle = {},
}: Props) => {
  return (
    <View style={{ ...containerStyle }}>
      <Image style={{ ...styles.img, width, height }} source={source} />
    </View>
  );
};

export default BoxImg;

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export const ThemeImg = connect(
  (
    state: RootState,
    ownProps: { source: HTMLImageElement }
  ): ComponentProps => {
    return {
      ComponentId: "ThemeImg",
      source: ownProps.source,
      width: 158,
      height: 158,
      containerStyle: { marginBottom: 8 },
    };
  }
)(BoxImg);

export const SleepThemeSM = connect(
  (
    state: RootState,
    ownProps: { source: HTMLImageElement }
  ): ComponentProps => {
    return {
      ComponentId: "ThemeImg",
      source: ownProps.source,
      width: 80,
      height: 80,
    };
  }
)(BoxImg);

export const SleepThemeMD = connect(
  (
    state: RootState,
    ownProps: { source: HTMLImageElement }
  ): ComponentProps => {
    return {
      ComponentId: "ThemeImg",
      source: ownProps.source,
      width: 134,
      height: 134,
    };
  }
)(BoxImg);
