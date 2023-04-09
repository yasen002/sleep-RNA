import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import {
  Session1,
  Session2,
  Session3,
  Session4,
  Session5,
} from "../../Component/recentSessions/ThemeCard";
import Gap from "../../Component/Gap";

type Props = {};

const RecentlyListened = (props: Props) => {
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
        <View style={{ marginLeft: 16 }}>
          <Gap height={20} />
          <Session1 />
          <Gap height={20} />
          <Session2 />
          <Gap height={20} />
          <Session3 />
          <Gap height={20} />
          <Session4 />
          <Gap height={20} />
          <Session5 />
          <Gap height={20} />
          <Session1 />
          <Gap height={20} />
          <Session2 />
          <Gap height={20} />
          <Session3 />
          <Gap height={20} />
          <Session4 />
          <Gap height={20} />
          <Session5 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentlyListened;

const styles = StyleSheet.create({});
