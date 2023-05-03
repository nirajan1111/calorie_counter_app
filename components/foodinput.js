import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

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
        <Modal visible={props.visible} animationType="slide">


            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/food.png')} style={styles.image} />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name of food"
                    onChangeText={foodInputHandler}
                    value={enteredFoodText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>

                        <Button color="white" title="ADD FOOD" onPress={addFoodHandler} />
                    </View>
                    <View style={styles.button}>

                        <Button color="white" title="Cancel" onPress={props.EndModal} />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#e2d877",
        backgroundColor: "#6b7b9c"
    },
    TextInput: {
        borderWidth: 1,
        borderColor: "#6b7b8a",
        width: "90%",
        marginRight: 8,
        color: '#322e2f',
        padding: 10,
    }
    ,
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    }
    ,
    button: {
        width: "35%",
        marginHorizontal: 8,
        backgroundColor: "#322e2f",
        color: 'white'
    }
    ,
    image: {
        width: 120,
        height: 100,
        margin: 10
    }
})