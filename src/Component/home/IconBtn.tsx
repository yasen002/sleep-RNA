import { StyleSheet, View } from "react-native";
import React from "react";
import {
  CommunityIcon,
  CommunityIconFocus,
  HomeIcon,
  HomeIconFocus,
  IconMD,
  MineIcon,
  MineIconFocus,
  ReportIcon,
  ReportIconFocus,
} from "./IconImg";
import { connect } from "react-redux";
import { home, report, community, mine } from "../../../assets/icon";
import { RootState } from "../../../app/store";
import { TabTitle, TabTitleFocus, TitleMD } from "./Title";
import { InjectComp } from "../../../app/types";

interface ComponentProps {
  source: HTMLImageElement;
  ComponentId: string;
  icon: InjectComp;
  title: InjectComp;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

/**
 * IconBtns are circle icons buttons in home page first screen.
 * @param param0
 * @returns JSX.Element
 */
export const IconBtn = ({ source, title, icon, ComponentId }: Props) => {
  const Icon = icon;
  const Title = title;
  return (
    <View
      id={ComponentId}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Icon />
      <Title />
    </View>
  );
};
const styles = StyleSheet.create({});

//--connect comp

export const HomeTabBtn = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitle text="home" />;

    return {
      source: home,
      title: Title,
      icon: HomeIcon,
      ComponentId: "homeTabBtn",
    };
  }
)(IconBtn);

export const ReportTabBtn = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitle text="report" />;

    return {
      source: report,
      title: Title,
      icon: ReportIcon,
      ComponentId: "reportTabBtn",
    };
  }
)(IconBtn);

export const CommunityTabBtn = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitle text="community" />;

    return {
      source: community,
      title: Title,
      icon: CommunityIcon,
      ComponentId: "communityTabBtn",
    };
  }
)(IconBtn);

export const MineTabBtn = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitle text="mine" />;

    return {
      source: mine,
      title: Title,
      icon: MineIcon,
      ComponentId: "mineTabBtn",
    };
  }
)(IconBtn);

//-- tab button focus

export const HomeTabFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitleFocus text="home" />;

    return {
      source: home,
      title: Title,
      icon: HomeIconFocus,
      ComponentId: "homeTabFocus",
    };
  }
)(IconBtn);

export const ReportTabFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitleFocus text="report" />;

    return {
      source: report,
      title: Title,
      icon: ReportIconFocus,
      ComponentId: "reportTabFocus",
    };
  }
)(IconBtn);

export const CommunityTabFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitleFocus text="community" />;

    return {
      source: community,
      title: Title,
      icon: CommunityIconFocus,
      ComponentId: "communityTabFocus",
    };
  }
)(IconBtn);

export const MineTabFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    const Title = () => <TabTitleFocus text="mine" />;

    return {
      source: mine,
      title: Title,
      icon: MineIconFocus,
      ComponentId: "mineTabFocus",
    };
  }
)(IconBtn);
