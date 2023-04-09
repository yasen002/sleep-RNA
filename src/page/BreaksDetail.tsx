import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BreaksDetailScreenProps } from "../Main";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../features/device/slice";
import { TitleLG } from "../Component/Title";
import SubTitleSM from "../Component/home/SubTitleSM";
import Tag from "../Component/breaks/Tag";
import Gap from "../Component/Gap";

export type BreakTopic = {
  img: HTMLImageElement | undefined;
  title: string;
  subTitle: string;
  tab: string[];
  listeners: number;
  desc: string;
};

type Props = BreakTopic;

const BreaksDetail = ({ route }: BreaksDetailScreenProps) => {
  const topic = route.params.topic;
  const width = useSelector(selectWidth) ?? 0;
  const height = useSelector(selectHeight) ?? 0;

  const handleOnPress = () => {};

  return (
    <View style={{ width: width, height: height * 0.4 }}>
      {topic?.img && (
        <Image
          style={{ width: width, height: height * 0.4 }}
          source={topic?.img}
        />
      )}

      <View
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 10,
          position: "relative",
          top: -5,
          backgroundColor: "white",
          height: height * 0.6,
        }}
      >
        <Gap height={26} />

        <TitleLG text={topic.title} color={"black"} />
        <Gap height={10} />
        <SubTitleSM text={topic.subTitle} />
        <Gap height={16} />

        <View style={{ display: "flex", flexDirection: "row" }}>
          {topic.tab.map((item, index) => {
            return (
              <View
                key={index + "BreaksDetail_Tab"}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Tag text={item} />
                <Gap width={16} />
              </View>
            );
          })}
        </View>
        <Gap height={16} />
        <SubTitleSM text={`${topic.listeners} people listening`} />
        <Gap height={16} />

        <View style={{ display: "flex", alignItems: "center" }}>
          <Gap height={48} />

          <TouchableOpacity
            onPress={handleOnPress}
            style={{
              backgroundColor: "#8383FF",
              padding: 10,
              borderRadius: 20,
              width: width * 0.9,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              {"Play"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BreaksDetail;

const styles = StyleSheet.create({});
