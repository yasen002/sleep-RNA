import {
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { FontWeightProperty } from "../../app/types/CSS";
import { connect } from "react-redux";
import { RootState } from "../../app/store";

interface ComponentProps {
  text: string | null;
  margin?: number | undefined;
  padding?: number | undefined;
  fontSize?: 10 | 12 | 16 | 15 | 14 | null;
  weight?: FontWeightProperty;
  ComponentId: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  color?: ColorValue;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

export const Title = ({
  text,
  margin,
  padding,
  fontSize = null,
  weight = 500,
  ComponentId = "Title",
  containerStyle = {},
  style,
  color = "white",
}: Props) => {
  return (
    <View style={{ ...containerStyle }} id={ComponentId}>
      <Text
        style={{
          ...style,
          color,
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

export const TitleLG = connect(
  (
    state: RootState,
    ownProps: { text: string; color?: ColorValue }
  ): ComponentProps => {
    return {
      ComponentId: "TitleLG",
      text: ownProps.text,
      fontSize: 16,
      weight: 500,
      color: ownProps.color ?? "white",
    };
  }
)(Title);

export const ThemeTitle = connect(
  (
    state: RootState,
    ownProps: { text: string; color?: ColorValue }
  ): ComponentProps => {
    return {
      ComponentId: "ThemeTitle",
      text: ownProps.text,
      fontSize: 16,
      weight: 500,
      containerStyle: { marginLeft: 16, marginBottom: 10 },
      color: ownProps.color,
    };
  }
)(Title);

export const TitleMD = connect(
  (
    state: RootState,
    ownProps: { text: string; color?: ColorValue }
  ): ComponentProps => {
    return {
      ComponentId: "TitleMD",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      color: ownProps.color ?? "#FFF1F4",
      fontSize: 12,
    };
  }
)(Title);

export const ThemeSubTitleMD = connect(
  (state: RootState, ownProps: { text: string | null }): ComponentProps => {
    return {
      ComponentId: "ThemeSubTitleMD",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      fontSize: 15,
      containerStyle: { marginBottom: 1 },
    };
  }
)(Title);

export const ThemeSubTitleSM = connect(
  (
    state: RootState,
    ownProps: { text: string | null; color?: ColorValue }
  ): ComponentProps => {
    return {
      ComponentId: "ThemeSubTitleSM",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      fontSize: 12,
      color: ownProps.color ?? "#E7CED2",
    };
  }
)(Title);
export const LightCloudTitleSM = connect(
  (state: RootState, ownProps: { text: string | null }): ComponentProps => {
    return {
      ComponentId: "LightCloudTitleSM",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      fontSize: 12,
      color: "#787878",
    };
  }
)(Title);

export const TabTitle = connect(
  (state: RootState, ownProps: { text: string | null }): ComponentProps => {
    return {
      ComponentId: "TabTitle",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      fontSize: 10,
      color: "#B5B5C0",
    };
  }
)(Title);

export const TabTitleFocus = connect(
  (state: RootState, ownProps: { text: string | null }): ComponentProps => {
    return {
      ComponentId: "TabTitle",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      fontSize: 10,
      color: "#333333",
    };
  }
)(Title);

export const LightCloudTitleMD = connect(
  (state: RootState, ownProps: { text: string | null }): ComponentProps => {
    return {
      ComponentId: "ThemeSubTitleMD",
      text: ownProps.text,
      weight: 700,
      style: { letterSpacing: 1 },
      fontSize: 15,
      color: "#787878",
      containerStyle: { marginBottom: 1 },
    };
  }
)(Title);

export const SleepTitleMdBlack = connect(
  (
    state: RootState,
    ownProps: {
      text: string | null;
      width?: number;
      align?: TextStyle["textAlign"];
    }
  ): ComponentProps => {
    return {
      ComponentId: "LightCloudTitleSM",
      text: ownProps.text,
      weight: "normal",
      style: {
        letterSpacing: 1,
        flexWrap: "wrap",
        width: ownProps.width ?? "auto",
        textAlign: ownProps.align,
      },
      fontSize: 14,
      color: "black",
    };
  }
)(Title);

export const SleepTitleMdGray = connect(
  (
    state: RootState,
    ownProps: {
      text: string | null;
      width?: number;
      align?: TextStyle["textAlign"];
    }
  ): ComponentProps => {
    return {
      ComponentId: "LightCloudTitleSM",
      text: ownProps.text,
      weight: "normal",
      style: {
        letterSpacing: 1,
        flexWrap: "wrap",
        width: ownProps.width ?? "auto",
        textAlign: ownProps.align,
      },
      fontSize: 14,
      color: "#777777",
    };
  }
)(Title);
