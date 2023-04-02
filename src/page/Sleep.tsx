import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { sleepGod_md } from "../../assets";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../features/device/slice";
import { useMemo } from "react";
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
  const imgWidth = useMemo(() => {
    return width * 0.95;
  }, []);
  const imgHeight = useMemo(() => {
    return height * 0.2;
  }, []);

  const gap = width * 0.034;
  return (
    <SafeAreaView
      style={{
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1,
      }}
      edges={["left", "right", "bottom"]}
      mode={"padding"}
    >
      <ScrollView
        bounces={true}
        alwaysBounceVertical={false}
        decelerationRate={10}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        style={{ backgroundColor: "white" }}
        contentInset={{}}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={sleepGod_md}
            resizeMode="cover"
            style={{
              width: imgWidth,
              height: imgHeight,
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
    </SafeAreaView>
  );
};

export default Sleep;

const styles = StyleSheet.create({});
