import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { data } from "../constants/data";
const { height, width } = Dimensions.get("window");
import ava1 from "../assets/avatars/avatar01.jpg";
import ava2 from "../assets/avatars/avatar02.jpg";
import ava3 from "../assets/avatars/avatar03.jpg";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function NFTdetails({ route }) {
  const avatars = [ava1, ava2, ava3];
  const navigation = useNavigation();
  const { id } = route.params;
  const [nft, setNft] = useState([]);
  useEffect(() => {
    setNft(data.filter((ele) => ele.id === id));
  }, []);

  const text =
    "asjsjdjkigjwoijgioewjgksdnfgvkjdajnhgdgjidhighjeifkghjjgkdngjkdhgdiogi";

  const cureentAnimation = useRef(new Animated.Value(0)).current;

  const handelShowAvatarsAnimation = () => {
    Animated.timing(cureentAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handelShowAvatarsAnimation();
  }, [cureentAnimation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, minHeight: 830 }}>
          {nft.map((ele) => {
            return (
              <React.Fragment key={ele.id}>
                <View>
                  <Animated.View
                    style={[
                      style.Avatars,
                      {
                        opacity: cureentAnimation,
                      },
                    ]}
                  >
                    {avatars.map((img) => {
                      return (
                        <React.Fragment key={img}>
                          <Image style={style.avatar} source={img} />
                        </React.Fragment>
                      );
                    })}
                  </Animated.View>
                  <View style={style.buttons}>
                    <Text
                      onPress={() => navigation.goBack()}
                      style={style.goBack}
                    >
                      <Ionicons name="arrow-back" size={24} color="#4137ba" />
                    </Text>
                    <Text style={style.heart}>
                      <AntDesign name="heart" size={24} color="#4137ba" />
                    </Text>
                  </View>
                  <Image style={style.img} source={ele.img} />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                  <Text style={style.title}>{ele.title}</Text>
                  <View style={style.comOFiDatContainer}>
                    <Text style={{ color: "white" }}>{ele.company}</Text>
                    <View style={style.isOfficialDateContainer}>
                      <Text style={{ left: 5 }}>
                        {ele.isOfficial && (
                          <MaterialCommunityIcons
                            name="check-decagram"
                            size={18}
                            color="white"
                          />
                        )}
                      </Text>
                      <Text style={{ color: "white", right: 0 }}>
                        {ele.date}
                      </Text>
                    </View>
                  </View>
                  <View style={style.statsContainer}>
                    <View style={style.singleStat}>
                      <Text>
                        <AntDesign name="eyeo" size={15} color="white" />
                      </Text>
                      <Text style={{ color: "white" }}>{ele.views}</Text>
                    </View>
                    <View style={style.singleStat}>
                      <Text>
                        <FontAwesome
                          name="commenting-o"
                          size={15}
                          color="white"
                        />
                      </Text>
                      <Text style={{ color: "white" }}>{ele.comments}</Text>
                    </View>
                    <View style={style.singleStat}>
                      <Text>
                        <Ionicons
                          name="diamond-outline"
                          size={15}
                          color="white"
                        />
                      </Text>
                      <Text style={{ color: "white" }}>{ele.lithum}</Text>
                    </View>
                  </View>
                  <View style={{ gap: 20 }}>
                    <View style={style.singleStat}>
                      <Text style={{ color: "white", bottom: 5 }}>
                        Contact Address
                      </Text>
                      <Text
                        style={style.StatsText}
                        numberOfLines={1}
                        ellipsizeMode="middle"
                      >
                        {text.length > 20
                          ? text.slice(0, 10) + "..." + text.slice(0, 10)
                          : text}
                      </Text>
                    </View>
                    <View style={style.statsInsideContainer}>
                      <Text style={{ color: "white", bottom: 5 }}>
                        Token ID
                      </Text>
                      <Text style={style.StatsText}>325123</Text>
                    </View>
                    <View style={style.statsInsideContainer}>
                      <Text style={{ color: "white", bottom: 5 }}>
                        Token Standerd
                      </Text>
                      <Text style={style.StatsText}>SGE-538</Text>
                    </View>
                    <View style={style.statsInsideContainer}>
                      <Text style={{ color: "white", bottom: 5 }}>
                        Blockchain
                      </Text>
                      <Text style={style.StatsText}>coronium</Text>
                    </View>
                  </View>
                  <View style={style.insideBox}>
                    <View style={style.bottomBox}>
                      <View>
                        <Text style={{ color: "white" }}>Total Paid</Text>
                        <Text style={style.moneyBottom}>$10,1932</Text>
                      </View>
                      <View style={style.bottomInsideRightBox}>
                        <Text style={{ color: "white" }}>Place a bid</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </React.Fragment>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Avatars: {
    position: "absolute",
    zIndex: 20,
    bottom: -10,
    flexDirection: "row",
    left: 20,
    right: 0,
    gap: 2,
  },
  avatar: { height: 40, width: 40, borderRadius: 40 },
  buttons: {
    position: "absolute",
    top: 10,
    zIndex: 100,
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    width,
  },
  goBack: {
    color: "white",
    marginLeft: 14,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  heart: {
    color: "white",
    marginRight: 14,
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width,
    height: height / 2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: "white",
    top: 20,
    fontSize: SIZES.large + 5,
    fontWeight: "bold",
  },
  comOFiDatContainer: {
    top: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  isOfficialDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  statsContainer: {
    top: 49,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  singleStat: {
    alignItems: "center",
    backgroundColor: "white",
    width: 80,
    borderRadius: 20,
    backgroundColor: "#4137ba",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  StatsText: {
    color: "white",
    bottom: 5,
    left: 10,
    opacity: 0.7,
  },
  statsInsideContainer: {
    borderBottomWidth: 1,
    borderColor: "#026",
    top: 85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomBox: {
    height: 90,
    width: 300,
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  insideBox: {
    top: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  moneyBottom: { color: "white", left: 10, top: 10 },
  bottomInsideRightBox: {
    backgroundColor: "#4137ba",
    width: 160,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
