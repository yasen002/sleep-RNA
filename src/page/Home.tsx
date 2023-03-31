import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { AppMode } from "../Component/home/AppMode";
import React from "react";
import { backgroundHome } from "../../assets/img";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../features/device/slice";
import ButtonGroupHome from "../Component/home/ButtonGroupHome";
import {
  CalmingDown,
  MetidationTheme,
  SoothingSleep,
  StressRelief,
} from "../Component/home/ThemeContainer";
// import { useTailwind } from "tailwind-rn";
type Props = {};

const Home = (props: Props) => {
  const height: number = useSelector(selectHeight) ?? 0;
  const width: number = useSelector(selectWidth) ?? 0;
  // const tailwind = useTailwind();
  return (
    <View>
      <ScrollView
        bounces={true}
        alwaysBounceVertical={false}
        decelerationRate={10}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        style={{ backgroundColor: "#a27e83" }}
        contentInset={{
          bottom: 200,
        }}
      >
        <View>
          {/*----- Background hero image----- */}
          <ImageBackground
            style={{
              height: height * 0.8,
              width: width,
              zIndex: -1,
            }}
            resizeMode="cover"
            source={backgroundHome}
          ></ImageBackground>

          <View
            style={{
              height: height,
              backgroundColor: "#a27e83",
              zIndex: -1,
            }}
          >
            <View
              style={{
                position: "relative",
                top: -(height * 0.2),
                gap: 20,
              }}
            >
              <AppMode />
              <SoothingSleep />
              <MetidationTheme />
              <StressRelief />
              <CalmingDown />
            </View>
          </View>
        </View>
      </ScrollView>
      <ButtonGroupHome />
    </View>
  );
};

export default Home;
