import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
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
import { EveningRadio, SleepSounds } from "../Component/home/ThemeContainer";
import { SafeAreaView } from "react-native-safe-area-context";
// import SleepSounds from "../Component/sleep/SleepSounds";

type Props = {};

const Sleep = (props: Props) => {
  const width = useSelector(selectWidth) ?? 0;
  const height = useSelector(selectHeight) ?? 0;
  const gap = width * 0.034;
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
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
      </View>

      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap,
        }}
      >
        <BackToSleep />
        <ImproveSleep />
        <SleepKnowlogy />
        <RelaxSleep />
      </View>
      <View>
        <SleepSounds />
        <EveningRadio />
      </View>
    </ScrollView>
  );
};

export default Sleep;

const styles = StyleSheet.create({});
