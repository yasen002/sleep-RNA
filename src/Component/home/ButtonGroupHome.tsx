import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../../features/device/slice";
import { IconMD, IconSM } from "./IconImg";
import {
  community,
  home,
  home_focus,
  leaf,
  mine,
  report,
} from "../../../assets/icon";
import {
  CommunityTabBtn,
  HomeTabBtn,
  HomeTabFocus,
  MineTabBtn,
  ReportTabBtn,
} from "./IconBtn";
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
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 25,
      }}
    >
      <HomeTabFocus />
      <ReportTabBtn />
      <CommunityTabBtn />
      <MineTabBtn />
    </View>
  );
};

export default ButtonGroupHome;

const styles = StyleSheet.create({});
