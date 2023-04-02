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

interface ComponentProps {
  componentId: string;
  title: InjectComp;
  subTitle: InjectComp;
  icon: InjectComp;
  color?: ColorValue;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

export const Card = ({
  color = "#f0e7e2",
  componentId = "BreaksCard",
  title,
  subTitle,
  icon,
}: Props) => {
  const width = useSelector(selectWidth) ?? 0;
  const height = useSelector(selectHeight) ?? 0;
  const Title = title;
  const SubTitle = subTitle;
  const Icon = icon;

  return (
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
    };
  }
)(Card);

export const SumidaCard = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <LightCloudTitleMD text="Sumida" />;
    const SubTitle = () => <LightCloudTitleSM text={"2213 users liked"} />;
    return {
      componentId: "SumidaCard",
      title: Title,
      subTitle: SubTitle,
      icon: PeaceFulIcon,
      color: "#faebeb",
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
  };
})(Card);
