import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { SleepThemeLG, SleepThemeMD, SleepThemeSM, ThemeImg } from "../BoxImg";
import { InjectComp } from "../../../app/types";
import { connect } from "react-redux";
import {
  backToSleep,
  culinaryAdventure,
  healingMelody,
  improveSleep,
  relaxSleep,
  romance,
  sleepKnowlogy,
  subtleStrings,
  urbanRomance,
  wildJourney,
} from "../../../assets";
import TouchableCard from "../Touchable";
import { SleepTitleMdBlack, SleepTitleMdGray, Title } from "../Title";

type ComponentProps = {
  Title?: InjectComp;
  containerStyle?: ViewStyle;
  componentId: string;
  imgs: InjectComp;
};

type ComponentDispatch = {};

type Props = ComponentProps & ComponentDispatch;

export const ThemeCard = ({
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
        <View style={{ marginTop: 8 }}>
          <Title />
        </View>
      </TouchableCard>
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
  const Img = () => <SleepThemeMD source={healingMelody} />;
  const Title = () => (
    <SleepTitleMdGray text={"healing melody"} align={"center"} />
  );
  return {
    componentId: "HealingMelody",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const SubtleStrings = connect((): ComponentProps => {
  const Img = () => <SleepThemeMD source={subtleStrings} />;
  const Title = () => (
    <SleepTitleMdGray text={"subtle strings"} align={"center"} />
  );
  return {
    componentId: "SubtleStrings",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const UrbanRomance = connect((): ComponentProps => {
  const Img = () => <SleepThemeMD source={urbanRomance} />;
  const Title = () => (
    <SleepTitleMdGray text={"urban romance"} align={"center"} />
  );
  return {
    componentId: "UrbanRomance",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const WildJourney = connect((): ComponentProps => {
  const Img = () => <SleepThemeLG source={wildJourney} />;
  const Title = () => (
    <SleepTitleMdGray text={"wild journey"} align={"center"} />
  );
  return {
    componentId: "WildJourney",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const CulinaryAdventure = connect((): ComponentProps => {
  const Img = () => <SleepThemeLG source={culinaryAdventure} />;
  const Title = () => (
    <SleepTitleMdGray text={"culinary adventure"} align={"center"} />
  );
  return {
    componentId: "CulinaryAdventure",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Romance = connect((): ComponentProps => {
  const Img = () => <SleepThemeLG source={romance} />;
  const Title = () => <SleepTitleMdGray text={"romance"} align={"center"} />;
  return {
    componentId: "Romance",
    imgs: Img,
    Title,
  };
})(ThemeCard);
