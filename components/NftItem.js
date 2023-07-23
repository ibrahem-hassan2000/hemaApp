import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function NftItem({ data }) {
const navigation = useNavigation();
 
  const [love, setLove] = useState(false);
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('itemDetails',{data})}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Image source={data.image} style={styles.mainimage} />
        </TouchableOpacity>
        <View style={styles.boxAvatar}>
          {data.avatars.map((item) => {
            return (
              <View key={item.id} style={styles.boxAvatarItem}>
                <Image source={item.image} style={styles.AvatarImage} />
              </View>
            );
          })}
        </View>
        <View style={styles.boxText}>
          <Text style={styles.textName}>{data.name}</Text>
          <View style={styles.boxCreate}>
            <View style={styles.check}>
              <Text style={styles.textCreate}>{data.creator}</Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={18}
                color="white"
              />
            </View>
            <Text style={styles.textCreate}>{data.date}</Text>
          </View>
          <View style={styles.boxInfo}>
            <View style={styles.info}>
              <AntDesign name="eyeo" size={16} color="white" />
              <Text style={styles.infoText}>{data.views}</Text>
            </View>
            <View style={styles.info}>
              <MaterialCommunityIcons
                name="comment-text-multiple-outline"
                size={16}
                color="white"
              />
              <Text style={styles.infoText}>{data.comments}</Text>
            </View>
            <View style={styles.info}>
              <MaterialCommunityIcons name="ethereum" size={16} color="white" />
              <Text style={styles.infoText}>{data.price}</Text>
            </View>
            {love ? <TouchableOpacity style={styles.love} onPress={()=>{setLove(false)}}><AntDesign name="heart" size={16} color={COLORS.white} /></TouchableOpacity> : <TouchableOpacity style={styles.love} onPress={()=>{setLove(true)}}><AntDesign name="hearto" size={16} color={COLORS.white} /></TouchableOpacity>}
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
    padding: 12,
  },
  boxImage: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mainimage: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
  boxText: {
    marginTop: SIZES.medium + 10,
    paddingHorizontal: SIZES.medium,
  },
  textName: {
    color: "white",
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
  boxCreate: {
    marginTop: SIZES.small - 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCreate: {
    color: "white",
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
  },
  boxAvatar: {
    flexDirection: "row",
    gap: SIZES.small,
    marginTop: SIZES.small - 30,
    paddingHorizontal: SIZES.medium + 10,
    gap: SIZES.small - 16,
  },
  boxAvatarItem: {
    width: 40,
    height: 40,
  },
  AvatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  check: {
    flexDirection: "row",
    gap: SIZES.small - 4,
    alignItems: "center",
  },
  boxInfo: {
    marginTop: SIZES.small + 2,
    flexDirection: "row",
    gap: SIZES.medium - 6,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
    gap: SIZES.small - 6,
    backgroundColor: COLORS.second,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: 74,
    borderRadius: SIZES.small,
    paddingVertical: 3,
  },
  infoText: {
    color: COLORS.white,
    fontSize: SIZES.medium - 1,
    fontFamily: FONTS.medium,
  },
  love:{
    width:30,
    height:30,
    borderRadius:15,
    
backgroundColor:COLORS.second,
alignItems:'center',
justifyContent:"center",

  }
});
export default NftItem;
