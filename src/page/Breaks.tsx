import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  LightCloudCard,
  MindfulCard,
  PliantCard,
  RestDayCard,
  SkyCard,
  SumidaCard,
} from "../Component/breaks/Card";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};
const Separator = () => {
  return <View style={{ height: 10 }} />;
};

const Breaks = (props: Props) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentInset={{
          top: 20,
          bottom: 20,
        }}
      >
        <View style={{ gap: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              // alignContent: "space-around",
            }}
          >
            <SumidaCard />
            <MindfulCard />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              // alignContent: "space-around",
            }}
          >
            <LightCloudCard />
            <PliantCard />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              // alignContent: "space-around",
            }}
          >
            <RestDayCard />
            <SkyCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Breaks;

const styles = StyleSheet.create({});
