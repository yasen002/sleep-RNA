import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
type Props = {};
const { width } = Dimensions.get("window");
import {
  sleep01,
  sleep02,
  sleep03,
  sleep04,
} from "../../../assets/sleepWindDown";
import { ThemeCard } from "./comp/ThemeCard";
const SleepWIndDown = (props: Props) => {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Sleep Windown
        </Text>
      </View>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          horizontal={true}
          decelerationRate={10}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          contentInset={{
            top: 0,
            left: 20,
            bottom: 0,
            right: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <ThemeCard
              source={sleep01}
              title={"sweet dreams"}
              subTitle={"7 minutes. music"}
            />
            <ThemeCard
              source={sleep02}
              title={"tenstion release"}
              subTitle={"14 minutes. music"}
            />
            <ThemeCard
              source={sleep03}
              title={"self care"}
              subTitle={"10 minutes. music"}
            />
            <ThemeCard
              source={sleep04}
              title={"relax"}
              subTitle={"9 minutes. music"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SleepWIndDown;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 50 },
  view: {
    width: 150,
    margin: 10,
    height: 150,
    borderRadius: 10,
  },
  view2: {
    width: 150,
    margin: 10,
    height: 150,
    borderRadius: 10,
  },
});
