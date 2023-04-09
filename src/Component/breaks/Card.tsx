import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect, useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../../features/device/slice";
import {
  WaterIcon,
  PeaceFulIcon,
  EggIcon,
  RoofIcon,
  ArchWayIcon,
  SkyIcon,
} from "../home/IconImg";
import { LightCloudTitleMD, LightCloudTitleSM } from "../Title";
import { InjectComp } from "../../../app/types";
import { ColorValue } from "react-native";
import { RootState } from "../../../app/store";
import TouchableCard from "../Touchable";
import { leaf } from "../../../assets/icon";
import { BreakTopic } from "../../page/BreaksDetail";
import {
  archWay_md,
  egg_md,
  peaceful_md,
  roof_md,
  sky_md,
  water_md,
} from "../../../assets";
interface ComponentProps {
  componentId: string;
  title: InjectComp;
  subTitle: InjectComp;
  icon: InjectComp;
  color?: ColorValue;
  breakTopic: BreakTopic;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

export const Card = ({
  color = "#f0e7e2",
  componentId = "BreaksCard",
  title,
  subTitle,
  icon,
  breakTopic = {
    img: undefined,
    title: "",
    subTitle: "",
    tab: [],
    listeners: 0,
    desc: "",
  },
}: Props) => {
  const width = useSelector(selectWidth) ?? 0;
  const height = useSelector(selectHeight) ?? 0;
  const Title = title;
  const SubTitle = subTitle;
  const Icon = icon;

  return (
    <View id={componentId}>
      <TouchableCard navigate="BreaksDetail" param={{ topic: breakTopic }}>
        <View
          style={{
            width: width * 0.44,
            height: height * 0.3,
            backgroundColor: color,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            elevation: 2,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <Icon />
          <Title />
          <SubTitle />
        </View>
      </TouchableCard>
    </View>
  );
};

const styles = StyleSheet.create({});

export const LightCloudCard = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <LightCloudTitleMD text="Light Cloud" />;
    const SubTitle = () => <LightCloudTitleSM text={"5214 users liked"} />;
    return {
      componentId: "LightCloudCard",
      title: Title,
      subTitle: SubTitle,
      icon: EggIcon,
      breakTopic: {
        img: egg_md,
        title: "Light Cloud",
        subTitle:
          "Sleep is essential for brain function and cognitive performance. During sleep, the brain consolidates memories and processes information learned during the day. Sleep also helps to improve concentration, attention, and decision-making abilities, allowing individuals to perform better at work, school, and other activities.",
        tab: ["cognitive", "empower", "brain", "decision"],
        listeners: 9633,
        desc: "",
      },
    };
  }
)(Card);

export const SumidaCard = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <LightCloudTitleMD text="Relax" />;
    const SubTitle = () => <LightCloudTitleSM text={"2213 users liked"} />;
    return {
      componentId: "SumidaCard",
      title: Title,
      subTitle: SubTitle,
      icon: PeaceFulIcon,
      color: "#faebeb",
      breakTopic: {
        img: peaceful_md,
        title: "Relaxation",
        subTitle:
          "Relaxation techniques such as deep breathing and meditation have been shown to lower blood pressure and reduce the risk of heart disease and stroke",
        tab: ["Distress", "health", "happy"],
        listeners: 5412,
        desc: "",
      },
    };
  }
)(Card);

export const MindfulCard = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <LightCloudTitleMD text="Mindful" />;
    const SubTitle = () => <LightCloudTitleSM text={"2213 users liked"} />;
    return {
      componentId: "MindfulCard",
      title: Title,
      subTitle: SubTitle,
      icon: WaterIcon,
      color: "#e4eded",
      breakTopic: {
        img: water_md,
        title: "Mindful",
        subTitle:
          "improve focus and concentration, enhance self-awareness and empathy, and promote overall well-being. Reduce stress and anxiety by promoting relaxation and increasing our ability to regulate our emotions",
        tab: ["focus", "self-aware", "mindful", "emotions"],
        listeners: 7312,
        desc: "",
      },
    };
  }
)(Card);

export const PliantCard = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <LightCloudTitleMD text="Pliant" />;
    const SubTitle = () => <LightCloudTitleSM text={"2213 users liked"} />;
    return {
      componentId: "PliantCard",
      title: Title,
      subTitle: SubTitle,
      icon: RoofIcon,
      color: "#e8ece1",
      breakTopic: {
        img: roof_md,
        title: "Peace",
        subTitle:
          "Meditation helps to activate the body's relaxation response, reducing the production of stress hormones like cortisol and adrenaline. This leads to a decrease in feelings of anxiety and stress",
        tab: ["meditation", "relax", "peaceful", "anxiety"],
        listeners: 19620,
        desc: "",
      },
    };
  }
)(Card);

export const RestDayCard = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <LightCloudTitleMD text="Rest Day" />;
    const SubTitle = () => <LightCloudTitleSM text={"2213 users liked"} />;
    return {
      componentId: "RestDayCard",
      title: Title,
      subTitle: SubTitle,
      icon: ArchWayIcon,
      color: "#efe9e1",
      breakTopic: {
        img: archWay_md,
        title: "Rest Day",
        subTitle:
          "Regular meditation practice has been shown to enhance overall cognitive function and memory, leading to better performance on tasks that require attention, memory, and decision-making.",
        tab: ["rest", "control", "focus", "positivity"],
        listeners: 8037,
        desc: "",
      },
    };
  }
)(Card);

export const SkyCard = connect((state: RootState, ownProps): ComponentProps => {
  const Title = () => <LightCloudTitleMD text="Sky" />;
  const SubTitle = () => <LightCloudTitleSM text={"2213 users liked"} />;
  return {
    componentId: "SkyCard",
    title: Title,
    subTitle: SubTitle,
    icon: SkyIcon,
    color: "#f0e7e2",
    breakTopic: {
      img: sky_md,
      title: "Free Yourself",
      subTitle:
        "A lack of sleep can lead to irritability, moodiness, and anxiety. Adequate sleep helps to regulate the production of hormones like cortisol and serotonin, which play a role in regulating mood. Getting enough sleep can help to reduce the risk of depression and anxiety disorders, leading to an overall improvement in emotional well-being.",
      tab: ["recharge", "health", "sleep", "productive"],
      listeners: 0,
      desc: "",
    },
  };
})(Card);
