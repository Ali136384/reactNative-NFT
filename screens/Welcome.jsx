import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import img1 from "../assets/images/nft04.jpg";
import img2 from "../assets/images/nft06.jpg";
import img3 from "../assets/images/nft08.jpg";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
export default function Welcome() {
  const navigation = useNavigation();

  const pressHandler = () => navigation.navigate("Home");

  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 40 })
  ).current;
  const textFadingAnimationCurrent = useRef(new Animated.Value(0)).current;

  const cureentButtonAnimation = useRef(new Animated.Value(1)).current;

  const buttonAnimationHandler = () => {
    Animated.spring(cureentButtonAnimation, {
      toValue: 0,
      useNativeDriver: true,
      delay: 1500,
      friction: 4,
    }).start();
  };

  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const textFadingAnimation = () => {
    Animated.timing(textFadingAnimationCurrent, {
      toValue: 1,
      delay: 1400,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    imagesAnimationHandler();
    textFadingAnimation();
    buttonAnimationHandler();
  }, [imagesAnimationHandler, textFadingAnimation, buttonAnimationHandler]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Animated.View
          style={[
            style.imagesContainer,
            {
              opacity: fadeImagesAnimation,
              transform: moveImagesAnimation.getTranslateTransform(),
            },
          ]}
        >
          <View style={style.imgCard}>
            <Image style={style.img} source={img1} />
          </View>
          <View style={[style.imgCard, { top: 40 }]}>
            <Image style={style.img} source={img2} />
          </View>
          <View style={style.imgCard}>
            <Image style={style.img} source={img3} />
          </View>
        </Animated.View>
        <Animated.View
          style={[
            { bottom: 70 },
            {
              opacity: textFadingAnimationCurrent,
            },
          ]}
        >
          <Text style={style.text}>Find, collect and Sell Amazing NFTs</Text>
          <Text style={style.secondry}>
            Explore the top collection of NFTs and buy and sell your NFTs as
            well
          </Text>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          ,
          {
            transform: [
              {
                translateY: cureentButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <Button
          pressHandler={pressHandler}
          title="Get started"
          styleButton={style.buttonStyle}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    padding: SIZES.small,
  },
  imagesContainer: {
    flexDirection: "row",
    gap: 20,
    paddingBottom: 150,
  },
  imgCard: {
    padding: 10,
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
  },
  img: {
    height: 160,
    width: 160,
  },
  imgCardUp: {
    marginTop: 60,
  },
  text: {
    color: "white",
    fontSize: SIZES.xLarge + 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondry: {
    color: "white",
    textAlign: "center",
    marginTop: 17,
    opacity: 0.7,
  },
  buttonStyle: {
    color: "white",
    position: "absolute",
    bottom: SIZES.xLarge + 30,
    alignSelf: "center",
    backgroundColor: COLORS.second,
    paddingHorizontal: 60,
    paddingVertical: 10,
    fontSize: SIZES.large,
    fontWeight: "bold",
    borderRadius: 10,
  },
});
