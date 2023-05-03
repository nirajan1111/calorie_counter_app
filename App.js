// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,

  FlatList
} from "react-native";

import FoodItem from "./components/fooditem";
import { useState } from "react";
import FoodInput from "./components/foodinput";
export default function App() {
  const [modalvisibility, setmodalvisibility] = useState(false)
  const [foods, setFoods] = useState([]);
  const startModal = () => {
    setmodalvisibility(true)
  }
  const EndModal = () => {
    setmodalvisibility(false)
  }
  function addFoodHandler(enteredFoodText) {
    // setFoods([...foods, enteredFoodText])
    setFoods((foods) => [...foods, { text: enteredFoodText, key: Math.random().toString() }]); //best practice when state depends on previous state
    EndModal()
  }

  function deletefoodhandler(id) {
    setFoods(currentfoods => {
      return currentfoods.filter((foods) => {
        foods.id !== id
      });
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>

        <Button title='Add new food' color='#5e0acc' onPress={startModal} />
      </View>
      {modalvisibility && <FoodInput AddFood={addFoodHandler} visible={modalvisibility} EndModal={EndModal} />}
      <View style={styles.foodsContainer} >
        {/* <ScrollView >
          {foods.map((food) => (
            <View style={styles.foodItem}>
              <Text style={styles.foodtext} key={food}>
                {food}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList data={foods} renderItem={(itemData) => {
          return <FoodItem data={itemData} delete={deletefoodhandler} id={itemData.id} />

        }} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    flex: 1,
  },

  foodsContainer: {
    flex: 12,
    flexDirection: "column",
  },

});
