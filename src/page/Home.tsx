import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { AppMode } from "../Component/home/AppMode";
import SleepWindDown from "../Component/home/SleepWindDown";
import React from "react";
import { backgroundHome } from "../../assets/img";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../features/device/slice";
import MetidationTheme from "../Component/home/MetidationTheme";
import StressRelief from "../Component/home/StressRelief";
import CalmingDown from "../Component/home/CalmingDown";
import ButtonGroupHome from "../Component/home/ButtonGroupHome";
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
          {/*----- First Page----- */}
          <ImageBackground
            style={{
              height: height,
              width: width,
              zIndex: -1,
            }}
            resizeMode="cover"
            source={backgroundHome}
          >
            <View style={{ marginTop: height * 0.65 }}>
              <AppMode />
            </View>
          </ImageBackground>

          {/* -------- Second Page --------- */}
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
                gap: 14,
              }}
            >
              <SleepWindDown />
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
