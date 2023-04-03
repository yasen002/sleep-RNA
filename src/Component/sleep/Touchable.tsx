import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { RootStackParamList, ScreenNames } from "../../Main";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  children: ReactNode;
  componentId?: string;
  navigate?: ScreenNames;
};

const TouchableCard = ({
  children,
  componentId = "TouchAbleCard_Sleep",
  navigate = undefined,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const pressHandler = () => {
    if (!!navigate) {
      const screen: ScreenNames = navigate;
      navigation.navigate(navigate);
    }
  };
  return (
    <TouchableOpacity id={componentId} onPress={pressHandler}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableCard;

const styles = StyleSheet.create({});
