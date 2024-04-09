import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import ava1 from "../assets/avatars/avatar01.jpg";
import ava2 from "../assets/avatars/avatar02.jpg";
import ava3 from "../assets/avatars/avatar03.jpg";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { data } from "../constants/data";
export default function HomeScreen() {
  const avatars = [ava1, ava2, ava3];
  const [searchValue, setSearchValue] = useState("");
  const naviagtion = useNavigation();

  const cureentShowAnimation = useRef(new Animated.Value(0)).current;

  const showAnimation = () => {
    Animated.timing(cureentShowAnimation, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    showAnimation();
  }, [cureentShowAnimation]);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <>
      <SafeAreaView style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 15, width: width - 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 60, width: 60, borderRadius: 60 }}
                source={ava2}
              />
              <View style={{ marginLeft: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "white", fontSize: SIZES.xLarge }}>
                    Ali haseni
                  </Text>
                  <Text style={{ color: "white", marginLeft: 7 }}>
                    <MaterialCommunityIcons
                      name="check-decagram"
                      size={22}
                      color="white"
                    />
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "white", opacity: 0.8 }}>
                    Developer
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  backgroundColor: COLORS.cardBg,
                  borderRadius: 10,
                  paddingLeft: 5,
                }}
              >
                <Text style={{ position: "absolute", top: 3.4, left: 7 }}>
                  <AntDesign name="search1" size={20} color="white" />
                </Text>
                <TextInput
                  onChangeText={(text) => setSearchValue(text)}
                  keyboardType="ascii-capable"
                  caretHidden={true}
                  placeholderTextColor={"#eee"}
                  placeholder="Search by NFT name"
                  style={{ paddingLeft: 30, color: "white" }}
                />
              </View>
            </View>
          </View>
          {data
            .filter((ele) =>
              ele.title
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((ele) => {
              return (
                <React.Fragment key={ele.id}>
                  <TouchableOpacity
                    onPress={() =>
                      naviagtion.navigate("NFT-detalis", { id: ele.id })
                    }
                  >
                    <Animated.View
                      style={[
                        style.infoHolder,
                        {
                          opacity: cureentShowAnimation,
                        },
                      ]}
                    >
                      <View style={style.imgHolder}>
                        <Image style={style.img} source={ele.img} />
                        <View style={style.avatarsContainer}>
                          {avatars.map((img) => {
                            return (
                              <React.Fragment key={img}>
                                <Image style={style.avatarImag} source={img} />
                              </React.Fragment>
                            );
                          })}
                        </View>
                        <Text style={style.title}>{ele.title}</Text>
                        <View style={style.companyOfficialContainer}>
                          <View
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row",
                            }}
                          >
                            <Text style={style.companyAndDate}>
                              {ele.company}
                            </Text>
                            {ele.isOfficial && (
                              <MaterialCommunityIcons
                                name="check-decagram"
                                size={18}
                                color="white"
                              />
                            )}
                          </View>
                          <Text style={style.companyAndDate}>{ele.date}</Text>
                        </View>
                      </View>
                      <View style={style.statsContainer}>
                        <View style={style.cardStatsHolder}>
                          <Entypo name="eye" size={19} color="white" />
                          <Text
                            style={{
                              textAlign: "center",
                              paddingHorizontal: 3,
                              color: "white",
                            }}
                          >
                            {ele.views}
                          </Text>
                        </View>
                        <View style={style.cardStatsHolder}>
                          <FontAwesome
                            name="commenting-o"
                            size={15}
                            color="white"
                          />
                          <Text
                            style={{
                              textAlign: "center",
                              paddingHorizontal: 3,
                              color: "white",
                            }}
                          >
                            {ele.comments}
                          </Text>
                        </View>
                        <View style={style.cardStatsHolder}>
                          <Ionicons
                            name="diamond-outline"
                            size={19}
                            color="white"
                          />
                          <Text
                            style={{
                              textAlign: "center",
                              paddingHorizontal: 3,
                              color: "white",
                            }}
                          >
                            {ele.lithum}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            backgroundColor: COLORS.black,
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            borderColor: "#4e46e5",
                            borderWidth: 1,
                            right: -30,
                            // marginLeft: 68,
                            // marginRight: 19,
                          }}
                        >
                          <AntDesign name="heart" size={20} color="#4e46e5" />
                        </View>
                      </View>
                    </Animated.View>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export function NodataHandeling() {
  return (
    <View>
      <Text style={{ color: "white" }}>No data found</Text>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoHolder: {
    height: height / 2 + 40,
    width: width - 20,
    backgroundColor: COLORS.cardBg,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  imgHolder: {
    width: width - 60,
    height: "auto",
  },
  img: {
    height: 300,
    width: 353,
    borderRadius: 20,
  },
  avatarImag: {
    height: 30,
    width: 30,
    zIndex: 100,
    bottom: 20,
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    bottom: 16,
  },
  companyAndDate: {
    color: "white",
    fontSize: SIZES.medium - 2,
  },
  avatarsContainer: { flexDirection: "row", marginLeft: 10 },

  companyOfficialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsContainer: {
    top: 20,
    marginHorizontal: 4,
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  cardStatsHolder: {
    backgroundColor: COLORS.second,
    width: 75,
    alignContent: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 28,
  },
});
