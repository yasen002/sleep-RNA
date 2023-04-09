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

type Props = {};

const Sleep = (props: Props) => {
  const width = useSelector(selectWidth) ?? 0;
  const height = useSelector(selectHeight) ?? 0;
  const imgWidth = useMemo(() => {
    return width * 0.91;
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
        contentInset={{
          top: 20,
          bottom: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={sleepGod_md}
            resizeMode="cover"
            style={{
              marginLeft: 16,
              marginRight: 16,
              borderRadius: 15,
              width: imgWidth,
              height: imgHeight,
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginRight: 16,
            marginLeft: 16,
          }}
        >
          <BackToSleep />
          <ImproveSleep />
          <SleepKnowlogy />
          <RelaxSleep />
        </View>
        <View>
          <View style={{ marginTop: 16 }}>
            <SleepSounds />
          </View>
          <View style={{ marginTop: 16 }}>
            <EveningRadio />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sleep;

const styles = StyleSheet.create({});
