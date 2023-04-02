import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { SleepThemeSM, ThemeImg } from "../BoxImg";
// import { ThemeSubTitleMD, ThemeSubTitleSM } from "./Title";
import { InjectComp } from "../../../app/types";
import { connect } from "react-redux";
import {
  backToSleep,
  improveSleep,
  relaxSleep,
  sleepKnowlogy,
} from "../../../assets";
import TouchableCard from "./Touchable";
import { SleepTitleMdBlack, Title } from "../Title";

type ComponentProps = {
  //   source: HTMLImageElement;
  Title?: InjectComp;
  //   subTitle?: string | null;
  containerStyle?: ViewStyle;
  componentId: string;
  imgs: InjectComp;
};

type ComponentDispatch = {};

type Props = ComponentProps & ComponentDispatch;

export const ThemeCard = ({
  //   source,
  //   title = null,
  //   subTitle = null,
  Title = () => <View></View>,
  containerStyle,
  componentId,
  imgs,
}: Props) => {
  const Img = imgs;

  return (
    <View
      id={componentId}
      style={{
        ...containerStyle,
        alignItems: "flex-start",
      }}
    >
      <TouchableCard>
        <Img />
        <Title />
      </TouchableCard>
      {/* <ThemeImg source={source} />
      <ThemeSubTitleMD text={title} />
      <ThemeSubTitleSM text={subTitle} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export const BackToSleep = connect((): ComponentProps => {
  const Img = () => <SleepThemeSM source={backToSleep} />;
  const Title = () => (
    <SleepTitleMdBlack text={"sleep"} width={80} align={"center"} />
  );
  return {
    componentId: "BackToSleep",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const ImproveSleep = connect((): ComponentProps => {
  const Img = () => <SleepThemeSM source={improveSleep} />;
  const Title = () => (
    <SleepTitleMdBlack text={"practice"} width={80} align={"center"} />
  );
  return {
    componentId: "ImproveSleep",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const RelaxSleep = connect((): ComponentProps => {
  const Img = () => <SleepThemeSM source={relaxSleep} />;
  const Title = () => (
    <SleepTitleMdBlack text={"nap"} width={80} align={"center"} />
  );
  return {
    componentId: "RelaxSleep",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const SleepKnowlogy = connect((): ComponentProps => {
  const Img = () => <SleepThemeSM source={sleepKnowlogy} />;
  const Title = () => (
    <SleepTitleMdBlack text={"learn"} width={80} align={"center"} />
  );
  return {
    componentId: "SleepKnowlogy",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const HealingMelody = connect((): ComponentProps => {
  const Img = () => <SleepThemeSM source={sleepKnowlogy} />;
  const Title = () => (
    <SleepTitleMdBlack text={"learn"} width={80} align={"center"} />
  );
  return {
    componentId: "SleepKnowlogy",
    imgs: Img,
    Title,
  };
})(ThemeCard);
