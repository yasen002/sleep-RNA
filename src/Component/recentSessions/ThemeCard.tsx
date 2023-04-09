import { StyleSheet, View, Text, ViewStyle } from "react-native";
import React from "react";
import { RecentSessionThemeMD } from "../BoxImg";
import { InjectComp } from "../../../app/types";
import { connect } from "react-redux";
import {
  culinaryAdventure,
  egg_md,
  healingMelody,
  recentSession1,
  recentSession2,
  recentSession3,
  recentSession4,
  recentSession5,
  recentSession6,
  romance,
  subtleStrings,
  urbanRomance,
} from "../../../assets";
import TouchableCard from "../Touchable";
import { SleepTitleMdBlack, SleepTitleMdGray, Title, TitleMD } from "../Title";
import { TitleLG } from "../Title";
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
        <View style={{ flexDirection: "row" }}>
          <Img />
          <View style={{ marginLeft: 13, marginTop: 8 }}>
            <Title />
          </View>
        </View>
      </TouchableCard>
    </View>
  );
};

const styles = StyleSheet.create({});

export const Session1 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={recentSession1} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Meditation challenge" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="lower the levels of cortisol" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="reduce Stress and Anxiety" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            5 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession1",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session2 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={recentSession2} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Improve Focus" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="increase the grey matter" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve cognitive function " color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            7 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession2",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session3 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={recentSession3} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Emotional Well-being" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="guide human emotions" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve emotional intelligence" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            29 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession3",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session4 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={recentSession4} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Boost Immune System" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="produce more antibodies" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="reduce inflammation" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            10 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession4",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session5 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={recentSession5} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Lower Blood Pressure" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve heart health" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="release stress" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>41 min class</Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession5",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session6 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={recentSession6} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Increases Self-Awareness" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="become more mindful" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve self-esteem" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>41 min class</Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession6",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session21 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={culinaryAdventure} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Meditation challenge" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="lower the levels of cortisol" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="reduce Stress and Anxiety" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            5 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession1",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session22 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={healingMelody} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Improve Focus" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="increase the grey matter" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve cognitive function " color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            7 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession2",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session23 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={urbanRomance} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Emotional Well-being" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="guide human emotions" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve emotional intelligence" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            29 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession3",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session24 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={egg_md} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Boost Immune System" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="produce more antibodies" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="reduce inflammation" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>
            10 chapter series
          </Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession4",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session25 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={romance} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Lower Blood Pressure" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve heart health" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="release stress" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>41 min class</Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession5",
    imgs: Img,
    Title,
  };
})(ThemeCard);

export const Session26 = connect((): ComponentProps => {
  const Img = () => <RecentSessionThemeMD source={subtleStrings} />;
  const Title = () => (
    <View style={{}}>
      <TitleLG text="Increases Self-Awareness" color={"black"} />
      <View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="become more mindful" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <TitleMD text="improve self-esteem" color={"#AAAAAA"} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 10, color: "#8383FF" }}>41 min class</Text>
        </View>
      </View>
    </View>
  );
  return {
    componentId: "RecentSession6",
    imgs: Img,
    Title,
  };
})(ThemeCard);
