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
  sleep05,
  sleep06,
  sleep07,
  sleep08,
} from "../../../assets/sleepWindDown";
import { ThemeCard } from "./comp/ThemeCard";
const MetidationTheme = (props: Props) => {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Meditation Space
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
              source={sleep08}
              title={"sweet dreams"}
              subTitle={"7 minutes. music"}
            />
            <ThemeCard
              source={sleep07}
              title={"tenstion release"}
              subTitle={"14 minutes. music"}
            />
            <ThemeCard
              source={sleep06}
              title={"self care"}
              subTitle={"10 minutes. music"}
            />
            <ThemeCard
              source={sleep05}
              title={"relax"}
              subTitle={"9 minutes. music"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MetidationTheme;

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
