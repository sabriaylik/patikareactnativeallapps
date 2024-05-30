import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image } from "react-native";




export default function Card({props}) {
  return (
    <View style = {styles.container}> 
      <Image source={require("./assets/resim1.png")} style= {styles.image}  />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex:1,
    marginHorizontal:3,
    marginVertical:3
  },
  image: {
      alignSelf:'center',
      marginTop:5,
      width:100,
      height:100
  },
  name: {
    justifyContent:'center'
  }
})