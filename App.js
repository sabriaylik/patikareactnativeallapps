import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
   const [taskList,setTaskList] = useState([])
   const [todo,setTodo] = useState("")



   const changeTodo = () => {
    console.log(todo);
   }

   const addJob = () => {
    console.log(todo)
    console.log(taskList)
    setTaskList([...taskList,todo])
    setTodo("")
   }

   const removeJob = (value) => {
    taskList = taskList.filter(item => item != value)
   }

  return (
    <View style={styles.container}>
      <View style={styles.upperbox}>
        <View>
          <Text style={styles.title}>YAPILACAKLAR</Text>
        </View>
        <View>
          <Text style={styles.count}>10</Text>
        </View>
      </View>

      <View>
        <View>
          <FlatList
            data={taskList}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={styles.tasklistitem}>{item}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.bottombox}>
          <View>
            <TextInput
              style={styles.insertbox}
              placeholder="Yapılacak ..."
              value={todo}
              onChangeText={(text) => setTodo(text)}
              onPress={removeJob(text)}
            />
          </View>
          <View style={styles.kaydetbuton}>
            <Button title="Kaydet" onPress={addJob} />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25,
  },
  upperbox: {
    flex: 1,
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  title: {
    fontSize: 20,
    color: "rgb(255, 165, 0)",
  },
  count: {
    fontSize: 20,
    color: "rgb(255, 165, 0)",
  },
  bottombox: {
    marginHorizontal: 30,
    backgroundColor: "rgb(55, 71, 79)",
    borderRadius: 30,
    justifyContent: "center",
  },
  insertbox: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 30,
    color: "yellow",
    backgroundColor: "rgb(55, 71, 79)",
  },
  kaydetbuton: {
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 25,
  },
  tasklistitem: {
    color: "red",
    backgroundColor: "rgb(125, 164, 83)",
    marginHorizontal:25,
    marginVertical:3,
    borderRadius:25,
    padding:25,

  },
});
