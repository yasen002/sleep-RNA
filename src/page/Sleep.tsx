import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { sleepGod_md } from "../../assets";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../features/device/slice";
import {
  BackToSleep,
  ImproveSleep,
  RelaxSleep,
  SleepKnowlogy,
} from "../Component/sleep/ThemeCard";

type Props = {};

const Sleep = (props: Props) => {
  const width = useSelector(selectWidth) ?? 0;
  const height = useSelector(selectHeight) ?? 0;

  return (
    <View
      style={{
        borderStartColor: "red",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={sleepGod_md}
        resizeMode="cover"
        style={{
          width: width * 0.95,
          height: height * 0.2,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          gap: width * 0.034,
        }}
      >
        <BackToSleep />
        <ImproveSleep />
        <SleepKnowlogy />
        <RelaxSleep />
      </View>
    </View>
  );
};

export default Sleep;

const styles = StyleSheet.create({});
