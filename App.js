import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './Card';





export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE </Text>
      <TextInput style={styles.search} placeholder="Search" />
      {/* <Card props={{ name: "Kulaklık", price: 1000 }} />
      <Card props={{ name: "Telefon", price: 1234 }} /> */}

      <FlatList numColumns='2' data={DATA}  renderItem={({item})  => <Card props={item} />   } />


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    marginLeft:25,
    marginTop:25,
    fontSize : 40,
    fontWeight:'bold'
  },
  search: {
    marginHorizontal:15,
    backgroundColor:'gray',
    color: 'yellow',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10
  }
});



const DATA = [
  {
    image: "./assets/resim1.png",
    name: "Telefon",
    price: 5000,
  },
  {
    image: "./assets/resim1.png",
    name: "Table",
    price: 3000,
  },
  {
    image: "./assets/resim1.png",
    name: "Kitap",
    price: 500,
  },
  {
    image: "./assets/resim1.png",
    name: "Araba",
    price: 20000,
  },
];