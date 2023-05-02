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

  const [foods, setFoods] = useState([]);

  function addFoodHandler(enteredFoodText) {
    // setFoods([...foods, enteredFoodText])
    setFoods((foods) => [...foods, { text: enteredFoodText, key: Math.random().toString() }]); //best practice when state depends on previous state
  }

  return (
    <View style={styles.container}>

      <FoodInput AddFood={addFoodHandler} />
      <View style={styles.foodsContainer}>
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
          return <FoodItem data={itemData} />

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
