import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../constants';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ItemDetails({route,navigation}) {
  const [love, setLove] = useState(false);

  const {data} = route.params
  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
      {love ? <TouchableOpacity style={styles.love} onPress={()=>{setLove(false)}}><AntDesign name="heart" size={16} color={COLORS.white} /></TouchableOpacity> : <TouchableOpacity style={styles.love} onPress={()=>{setLove(true)}}><AntDesign name="hearto" size={16} color={COLORS.white} /></TouchableOpacity>}

          <Image source={data.image} style={styles.mainimage}/>
          <View style={styles.boxAvatar}>
          {data.avatars.map((item) => {
            return (
              <View key={item.id} style={styles.boxAvatarItem}>
                <Image source={item.image} style={styles.AvatarImage} />
              </View>
            );
          })}
        </View>
        <View></View>
        <View></View>
    </View>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    flex: 1,
    paddingHorizontal: SIZES.small-2,
    paddingTop:SIZES.small 
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
  header:{
    width:"100%",
    height:400
  },
  mainimage: {
    width: "100%",
    height:"100%",
    borderRadius: 16,
  },
});
export default ItemDetails