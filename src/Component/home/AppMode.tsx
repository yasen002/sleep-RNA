import { StyleSheet, View } from "react-native";
import React from "react";
import { moon, focus, tea, leaf } from "../../../assets/icon";
import { BreakMode, FocusMode, Mode, RelaxMode, SleepMode } from "./comp/Mode";

type Props = {};

export const AppMode = (props: Props) => {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 39,
          marginBottom: 30,
        }}
      >
        <SleepMode />
        <FocusMode />
        <BreakMode />
        <RelaxMode />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
