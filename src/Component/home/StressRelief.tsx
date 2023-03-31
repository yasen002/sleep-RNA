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
const StressRelief = (props: Props) => {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Stress Relief
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
          snapToInterval={width - 60}
          contentInset={{
            top: 0,
            left: 30,
            bottom: 0,
            right: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <ThemeCard
              source={sleep01}
              title={"work relief"}
              subTitle={"7 minutes. music"}
            />
            <ThemeCard
              source={sleep02}
              title={"daily recharge"}
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

export default StressRelief;

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
