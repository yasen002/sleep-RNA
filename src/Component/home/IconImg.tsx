import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../app/store";
import {
  clock,
  community,
  community_focus,
  home,
  home_focus,
  mine,
  mine_focus,
  report,
  report_focus,
} from "../../../assets/icon";
import { RootStackParamList, ScreenNames } from "../../Main";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  archWay_md,
  egg_md,
  ink_md,
  peaceful_md,
  roof_md,
  sky_md,
  water_md,
} from "../../../assets";

interface ComponentProps {
  componentId: string;
  source: HTMLImageElement;
  height?: number;
  width?: number;
  natigate?: ScreenNames;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

export const IconImg = ({
  source,
  componentId,
  height = 45,
  width = 45,
  natigate = undefined,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const pressHandler = () => {
    if (!!natigate) {
      const screen: ScreenNames = natigate;
      navigation.navigate(natigate);
    }
  };

  return (
    <View id={componentId} style={{ ...styles.IconImgBg, height, width }}>
      <TouchableOpacity onPress={pressHandler}>
        <Image style={{ ...styles.IconImg, height, width }} source={source} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  IconImg: {
    borderRadius: 50,
  },
  IconImgBg: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const IconMD = connect(
  (
    state: RootState,
    ownProps: { source: Props["source"]; navigate?: ScreenNames }
  ): ComponentProps => {
    return {
      componentId: "IconMD",
      source: ownProps.source,
      natigate: ownProps.navigate,
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
      natigate: "Home",
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
      natigate: "Report",
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
      natigate: "Community",
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
      natigate: "Mine",
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

export const ClockIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "ClockIcon",
      source: clock,
      width: 20,
      height: 20,
      natigate: "RecentSessions",
    };
  }
)(IconImg);

export const PeaceFulIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "PeaceFul",
      source: peaceful_md,
      width: 100,
      height: 100,
    };
  }
)(IconImg);

export const WaterIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "PeaceFul",
      source: water_md,
      width: 100,
      height: 100,
    };
  }
)(IconImg);

export const EggIcon = connect((state: RootState, ownProps): ComponentProps => {
  return {
    componentId: "PeaceFul",
    source: egg_md,
    width: 100,
    height: 100,
  };
})(IconImg);

export const RoofIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "PeaceFul",
      source: roof_md,
      width: 100,
      height: 100,
    };
  }
)(IconImg);

export const ArchWayIcon = connect(
  (state: RootState, ownProps): ComponentProps => {
    return {
      componentId: "PeaceFul",
      source: archWay_md,
      width: 100,
      height: 100,
    };
  }
)(IconImg);

export const SkyIcon = connect((state: RootState, ownProps): ComponentProps => {
  return {
    componentId: "PeaceFul",
    source: sky_md,
    width: 100,
    height: 100,
  };
})(IconImg);
