import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Animated, Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import nft04 from "../assets/images/nft04.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft08 from "../assets/images/nft08.jpg";
import ButtonHandel from "../components/ButtonHandel";
import { useRef } from "react";
import { useEffect } from "react";


function WelcomeScreen() {
    const animationFadeText = useRef(new Animated.Value(0)).current;
    const animationFadeImage = useRef(new Animated.Value(0)).current;
    const animationFadeImageXY = useRef(new Animated.ValueXY({x:100,y:100})).current;
  const animationFadeButton = useRef(new Animated.Value(1)).current;

const animationText =()=>{
    Animated.timing(animationFadeText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
         
        delay :1300
      }).start();
}
const animationImage =()=>{
    Animated.sequence([
        Animated.timing(animationFadeImage, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
       
      }),
      Animated.spring(animationFadeImageXY, {
        toValue: {x: 0, y: 0},
        duration: 1000,
        useNativeDriver: true,
       
      })
    ]).start()
    
}
const animationbuttonr = () => {
    Animated.spring(animationFadeButton, {
      toValue: 0,
      friction: 3,
      delay:1300,
      useNativeDriver: true,
    }).start();
  };
useEffect(()=>{
    animationText();
    animationImage();
    animationbuttonr();
},[animationText,animationImage,animationbuttonr])
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.boxImg,{opacity:animationFadeImage,transform:animationFadeImageXY.getTranslateTransform()}]}>
      <View style={styles.containerImg}>
        <Image source={nft04} style={styles.Img} />
      </View>
      <View style={[styles.containerImg , {top:SIZES.medium +10}]} >
        <Image source={nft08} style={styles.Img} on />
      </View>
      <View style={styles.containerImg}>
        <Image source={nft06} style={styles.Img} />
      </View>
      </Animated.View>
      
      <Animated.View style={[styles.textContainer,{opacity:animationFadeText}]}>
      <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <Animated.View style={[styles.buttonContainer,{transform:[{translateY:animationFadeButton.interpolate({
        inputRange:[0,1],
        outputRange:[0,200]
      })}]}]}>
      <ButtonHandel title='GET STARING' onPressHandel={()=>{navigation.navigate('home')}} styleBtn={styles.button} styleText={styles.buttonText}/>
      </Animated.View>
     
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.small + 10
  },
  boxImg: {
    top: -SIZES.medium,
    flexDirection: "row",
   justifyContent:'center',
   gap:SIZES.small
  },
  containerImg: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
  },
  Img: {
    width: 200,
    height: 200,
    borderRadius: SIZES.medium,
  },
  textContainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 10,
  },
  mainText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 5,
    textAlign: "center",
    color: COLORS.white,
  },
  subText: {
    fontFamily: FONTS.light,
    textAlign: "center",
    marginTop: SIZES.large+6,
    color: COLORS.gray,
  },
  buttonContainer: {
   
    bottom:-80,
  marginTop:10,
    marginVertical: SIZES.xLarge,
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width:200,
    justifyContent:'center',
    alignItems: "center",
    borderRadius: SIZES.medium,
    textAlign:'center',
  },
  buttonText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium+ 5,
    textAlign: "center",
    color: COLORS.white,
  },
  animation: {},
});
export default WelcomeScreen;
