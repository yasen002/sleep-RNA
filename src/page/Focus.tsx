import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabPages from "./TabPage";
import BreaksDetail from "./BreaksDetail";
import Breaks from "./Breaks";

type Props = {};

const Focus = (props: Props) => {
  return (
    <View>
      <Breaks />
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({});
