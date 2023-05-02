import { StyleSheet, View, Button, TextInput } from "react-native";

import { useState } from "react";

export default function FoodInput(props) {
    const [enteredFoodText, setEnteredFoodText] = useState("");
    const foodInputHandler = (enteredText) => {
        setEnteredFoodText(enteredText);
    };
    function addFoodHandler() {
        props.AddFood(enteredFoodText);
        setEnteredFoodText("")
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.TextInput}
                placeholder="Name of food"
                onChangeText={foodInputHandler}
                value={enteredFoodText}
            />

            <Button color="#4e0acc" title="ADD FOOD" onPress={addFoodHandler} />
        </View>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    TextInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 4,
        padding: 10,
    }
})