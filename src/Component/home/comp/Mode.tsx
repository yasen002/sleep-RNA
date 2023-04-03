import { StyleSheet, View } from "react-native";
import React from "react";
import { IconMD } from "./IconImg";
import { connect } from "react-redux";
import { sleep, focus, breaks, relax } from "../../../../assets/icon";
import { RootState } from "../../../../app/store";
import { TitleMD } from "./Title";
import { ScreenNames } from "../../../Main";

interface ComponentProps {
  source: HTMLImageElement;
  title: string;
  ComponentId: string;
  navigate?: ScreenNames;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

/**
 * Modes are circle icons in home page first screen.
 * @param param0
 * @returns JSX.Element
 */
export const Mode = ({ source, title, navigate, ComponentId }: Props) => {
  return (
    <View
      id={ComponentId}
      style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
    >
      <IconMD source={source} navigate={navigate} />
      <TitleMD text={title} />
    </View>
  );
};

const styles = StyleSheet.create({});

export const SleepMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      source: sleep,
      title: "sleep",
      ComponentId: "SleepMode",
      navigate: "Sleep",
    };
  }
)(Mode);

export const FocusMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      source: focus,
      title: "focus",
      ComponentId: "FocusMode",
      navigate: "Focus",
    };
  }
)(Mode);

export const BreakMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      source: breaks,
      title: "breaks",
      ComponentId: "BreaksMode",
      navigate: "Breaks",
    };
  }
)(Mode);

export const RelaxMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      source: relax,
      title: "relax",
      ComponentId: "RelaxMode",
      navigate: "Relax",
    };
  }
)(Mode);
