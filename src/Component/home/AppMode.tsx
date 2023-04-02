import { StyleSheet, View } from "react-native";
import React from "react";
import { BreakMode, FocusMode, RelaxMode, SleepMode } from "./Mode";

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
