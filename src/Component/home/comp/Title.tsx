import {
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { FontWeightProperty } from "../../../../app/types/CSS";
import { connect } from "react-redux";
import { RootState } from "../../../../app/store";

interface ComponentProps {
  text: string | null;
  margin?: number | undefined;
  padding?: number | undefined;
  fontSize?: 12 | 16 | 15 | null;
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
  (state: RootState, ownProps: { text: string }): ComponentProps => {
    return {
      ComponentId: "TitleLG",
      text: ownProps.text,
      fontSize: 16,
      weight: 500,
    };
  }
)(Title);

export const ThemeTitle = connect(
  (state: RootState, ownProps: { text: string }): ComponentProps => {
    return {
      ComponentId: "TitleLG",
      text: ownProps.text,
      fontSize: 16,
      weight: 500,
      containerStyle: { marginLeft: 16, marginBottom: 10 },
    };
  }
)(Title);

export const TitleMD = connect(
  (state: RootState, ownProps: { text: string }): ComponentProps => {
    return {
      ComponentId: "TitleMD",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1, color: "#FFF1F4" },
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
  (state: RootState, ownProps: { text: string | null }): ComponentProps => {
    return {
      ComponentId: "ThemeSubTitleSM",
      text: ownProps.text,
      weight: "normal",
      style: { letterSpacing: 1 },
      fontSize: 12,
      color: "#E7CED2",
    };
  }
)(Title);
