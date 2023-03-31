import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import {
  sleep01,
  sleep02,
  sleep03,
  sleep04,
  sleep05,
  sleep06,
  sleep07,
  sleep08,
} from "../../../assets/sleepWindDown";
import { ThemeCard } from "./comp/ThemeCard";
import { ThemeTitle } from "./comp/Title";
import { connect } from "react-redux";
import { RootState } from "../../../app/store";

interface ComponentProps {
  ComponentId: string;
  title: string;
  themeCards: (props?: any) => JSX.Element;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;
export const ThemeContainer = ({ ComponentId, title, themeCards }: Props) => {
  const Cards = themeCards;

  return (
    <View id={ComponentId}>
      <ThemeTitle text={title} />
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          horizontal={true}
          decelerationRate={10}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          contentContainerStyle={{ marginLeft: 16 }}
        >
          <View>
            <Cards />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 16 },
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

export const SoothingSleep = connect(
  (state: RootState, ownProps): ComponentProps => {
    const themeCards = (): JSX.Element => {
      return (
        <View
          style={{
            flexDirection: "row",
            gap: 16,
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
      );
    };

    return {
      ComponentId: "SoothingSleep",
      title: "Soothing Sleep",
      themeCards,
    };
  }
)(ThemeContainer);

export const StressRelief = connect(
  (state: RootState, ownProps): ComponentProps => {
    const themeCards = (): JSX.Element => {
      return (
        <View
          style={{
            flexDirection: "row",
            gap: 16,
          }}
        >
          <ThemeCard
            source={sleep05}
            title={"sweet dreams"}
            subTitle={"7 minutes. music"}
          />
          <ThemeCard
            source={sleep06}
            title={"tenstion release"}
            subTitle={"14 minutes. music"}
          />
          <ThemeCard
            source={sleep07}
            title={"self care"}
            subTitle={"10 minutes. music"}
          />
          <ThemeCard
            source={sleep08}
            title={"relax"}
            subTitle={"9 minutes. music"}
          />
        </View>
      );
    };

    return {
      ComponentId: "StressRelief",
      title: "Stress Relief",
      themeCards,
    };
  }
)(ThemeContainer);

export const MetidationTheme = connect(
  (state: RootState, ownProps): ComponentProps => {
    const themeCards = (): JSX.Element => {
      return (
        <View
          style={{
            flexDirection: "row",
            gap: 16,
          }}
        >
          <ThemeCard
            source={sleep04}
            title={"sweet dreams"}
            subTitle={"7 minutes. music"}
          />
          <ThemeCard
            source={sleep03}
            title={"tenstion release"}
            subTitle={"14 minutes. music"}
          />
          <ThemeCard
            source={sleep02}
            title={"self care"}
            subTitle={"10 minutes. music"}
          />
          <ThemeCard
            source={sleep01}
            title={"relax"}
            subTitle={"9 minutes. music"}
          />
        </View>
      );
    };

    return {
      ComponentId: "MetidationTheme",
      title: "Metidation Theme",
      themeCards,
    };
  }
)(ThemeContainer);

export const CalmingDown = connect(
  (state: RootState, ownProps): ComponentProps => {
    const themeCards = (): JSX.Element => {
      return (
        <View
          style={{
            flexDirection: "row",
            gap: 16,
          }}
        >
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
      );
    };

    return {
      ComponentId: "CalmingDown",
      title: "Calming Down",
      themeCards,
    };
  }
)(ThemeContainer);
