
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, DATA, FONTS, SIZES } from '../constants';
import NftItem from '../components/NftItem';
import avatar from "../assets/images/avatars/avatar03.jpg";
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
function Home() {
    const navigation = useNavigation();
    const [data ,setData]=useState(DATA);
    const FillterData =(value)=>{
      if(value){
        const CurrentData = DATA.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))
        setData(CurrentData)
      }else{
        setData(DATA)
      }
      
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.user}>
<View style={styles.userInfo}>
    <Image source={avatar} style={styles.imageUser}/>
   <View>
   <Text style={styles.userName}>IBRAHEM HASSAN</Text>
   <Text style={styles.SipUserName}>CREATOR</Text>
   </View>
</View>
<View style={{marginTop:SIZES.small,paddingHorizontal:10}}>
<View style={styles.searchInput}>
<AntDesign name="search1" size={16} color={COLORS.white} />
  <TextInput  
  
  placeholder='Search by NFT Name'
  placeholderTextColor={COLORS.white}
  style={{flex:1,color:COLORS.white,paddingHorizontal:5}}
  onChangeText={FillterData}
  />
</View>
</View>

        </View>
       <View>
        <FlatList data={data} renderItem={({item})=> <NftItem data={item}/>} keyExtractor={(item)=> item.id} />
       </View>
       
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.bg,
      flex: 1,
      alignContent: "center",
      justifyContent: "center",
      paddingHorizontal: SIZES.small + 10,
      paddingTop:SIZES.small+50
    },
   text:{
    color:'white',
    paddingBottom:30,
    margin:20,
    textAlign:'center',
    
   },
   user:{
paddingVertical:20,
marginTop:50
   },
   userInfo:{
flexDirection:"row",
gap:SIZES.small+8,
alignItems:'center'
   },
   imageUser:{
    width:50,
    height:50,
    borderRadius:25,
   },
   userName:{
    color:'white',
    fontSize:SIZES.large,
    fontFamily:FONTS.semiBold
   },
   SipUserName:{
    color:'white',
    fontSize:SIZES.small +4,
    fontFamily:FONTS.light,
    marginTop:SIZES.small-6
   },
   searchInput:{
    backgroundColor:COLORS.cardBg,marginVertical:16,paddingHorizontal:10,
    paddingVertical:8,width:"100%",flexDirection:'row',alignItems:'center',borderRadius:SIZES.small
   }
  });
export default Home