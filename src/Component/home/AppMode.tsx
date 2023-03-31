import { StyleSheet, View } from "react-native";
import React from "react";
import { moon, focus, tea, leaf } from "../../../assets/icon";
import { Mode } from "./comp/Mode";

type Props = {};

export const AppMode = (props: Props) => {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 35,
          marginBottom: 30,
        }}
      >
        <Mode source={moon} title={"sleep"} />
        <Mode source={focus} title={"focus"} />
        <Mode source={tea} title={"break"} />
        <Mode source={leaf} title={"relax"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
