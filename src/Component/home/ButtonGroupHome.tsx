import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../../features/device/slice";
import { IconMd } from "./comp/IconMd";
import { leaf } from "../../../assets/icon";
type Props = {};

const ButtonGroupHome = (props: Props) => {
  const width: number = useSelector(selectWidth) ?? 0;
  const height: number = useSelector(selectHeight) ?? 0;

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "white",
        width: width,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 30,
      }}
    >
      <IconMd source={leaf} />
      <IconMd source={leaf} />
      <IconMd source={leaf} />
      <IconMd source={leaf} />
    </View>
  );
};

export default ButtonGroupHome;

const styles = StyleSheet.create({});
