import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  community,
  community_focus,
  home,
  home_focus,
  mine,
  mine_focus,
  report,
  report_focus,
} from "../../../../assets/icon";

interface ComponentProps {
  componentId: string;
  source: HTMLImageElement;
  height?: number;
  width?: number;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

export const IconImg = ({
  source,
  componentId,
  height = 45,
  width = 45,
}: Props) => {
  return (
    <View id={componentId} style={{ ...styles.IconImgBg, height, width }}>
      <Image style={{ ...styles.IconImg, height, width }} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  IconImg: {},
  IconImgBg: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const IconMD = connect(
  (state: RootState, ownProps: { source: Props["source"] }): ComponentProps => {
    return {
      componentId: "IconMD",
      source: ownProps.source,
    };
  }
)(IconImg);

export const IconSM = connect(
  (state: RootState, ownProps: { source: Props["source"] }): ComponentProps => {
    return {
      componentId: "IconSM",
      source: ownProps.source,
      width: 30,
      height: 30,
    };
  }
)(IconImg);

export const HomeIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "HomeIcon",
      source: home,
      width: 24,
      height: 24,
    };
  }
)(IconImg);

export const ReportIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "ReportIcon",
      source: report,
      width: 24,
      height: 24,
    };
  }
)(IconImg);

export const CommunityIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "CommunityIcon",
      source: community,
      width: 24,
      height: 24,
    };
  }
)(IconImg);

export const MineIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "MineIcon",
      source: mine,
      width: 24,
      height: 24,
    };
  }
)(IconImg);

//--icon focus
export const HomeIconFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "HomeIcon",
      source: home_focus,
      width: 30,
      height: 30,
    };
  }
)(IconImg);

export const ReportIconFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "ReportIcon",
      source: report_focus,
      width: 30,
      height: 30,
    };
  }
)(IconImg);

export const CommunityIconFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "CommunityIcon",
      source: community_focus,
      width: 30,
      height: 30,
    };
  }
)(IconImg);

export const MineIconFocus = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "MineIcon",
      source: mine_focus,
      width: 30,
      height: 30,
    };
  }
)(IconImg);
