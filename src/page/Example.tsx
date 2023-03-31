import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { backgroundHome } from "../../assets/img";
import { useSelector } from "react-redux";
import { selectHeight } from "../features/device/slice";

type Props = {};

const Example = (props: Props) => {
  const height: number = useSelector(selectHeight) ?? 0;

  return (
    <ImageBackground source={backgroundHome} style={{ height: height }}>
      <SafeAreaView style={{}}>
        <View style={{}}>
          <Text style={{ fontSize: 28, color: "white" }}>
            Hello World Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus enim natus consequuntur in laborum a pariatur iste tenetur,
            dolorum ducimus assumenda ut omnis nesciunt porro ipsam. Laborum
            consequuntur
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
