import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconMd } from "./IconMd";
import { SubTitleMD } from "./SubTitleMD";

type Props = { source: HTMLImageElement; title: string };

export const Mode = ({ source, title }: Props) => {
  return (
    <View style={{}}>
      <IconMd source={source} />
      <SubTitleMD text={title} />
    </View>
  );
};

const styles = StyleSheet.create({});
