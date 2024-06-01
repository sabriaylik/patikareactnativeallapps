import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './Card';
import products_data from "./data.json";





export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE </Text>
      <TextInput style={styles.search} placeholder="Search" />
      {/* <Card props={{ name: "Kulaklık", price: 1000 }} />
      <Card props={{ name: "Telefon", price: 1234 }} /> */}

      <FlatList
        numColumns="2"
        data={products_data}
        renderItem={({ item }) => <Card props={item} />}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    marginLeft: 25,
    marginTop: 25,
    fontSize: 40,
    fontWeight: "bold",
    color: "#f0f",
  },
  search: {
    marginHorizontal: 15,
    backgroundColor: "rgb(236, 239, 241)",
    color: "yellow",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});



