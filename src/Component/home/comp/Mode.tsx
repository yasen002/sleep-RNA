import { StyleSheet, View } from "react-native";
import React from "react";
import { IconMd } from "./IconMd";
import { SubTitleMD } from "./SubTitleMD";
import { connect } from "react-redux";
import { sleep, focus, breaks, relax } from "../../../../assets/icon";
import { RootState } from "../../../../app/store";

interface ComponentProps {
  source: HTMLImageElement;
  title: string;
  ComponentId: string;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

/**
 * Modes are circle icons in home page first screen.
 * @param param0
 * @returns JSX.Element
 */
export const Mode = ({ source, title, ComponentId }: Props) => {
  return (
    <View
      id={ComponentId}
      style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
    >
      <IconMd source={source} />
      <SubTitleMD text={title} />
    </View>
  );
};

const styles = StyleSheet.create({});

export const SleepMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return { source: sleep, title: "sleep", ComponentId: "SleepMode" };
  }
)(Mode);

export const FocusMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return { source: focus, title: "focus", ComponentId: "FocusMode" };
  }
)(Mode);

export const BreakMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return { source: breaks, title: "breaks", ComponentId: "BreaksMode" };
  }
)(Mode);

export const RelaxMode = connect(
  (state: RootState, ownProps): ComponentProps => {
    return { source: relax, title: "relax", ComponentId: "RelaxMode" };
  }
)(Mode);
