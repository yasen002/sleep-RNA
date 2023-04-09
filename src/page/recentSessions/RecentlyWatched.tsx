import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import {
  Session21,
  Session22,
  Session23,
  Session24,
  Session25,
  Session3,
  Session4,
  Session5,
} from "../../Component/recentSessions/ThemeCard";
import Gap from "../../Component/Gap";

type Props = {};

export const RecentlyWatched = (props: Props) => {
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
          <Session21 />
          <Gap height={20} />
          <Session22 />
          <Gap height={20} />
          <Session23 />
          <Gap height={20} />
          <Session24 />
          <Gap height={20} />
          <Session25 />
          <Gap height={20} />
          <Session21 />
          <Gap height={20} />
          <Session22 />
          <Gap height={20} />
          <Session23 />
          <Gap height={20} />
          <Session21 />
          <Gap height={20} />
          <Session25 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
