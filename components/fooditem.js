import { StyleSheet, View, Text, Pressable } from "react-native"

export default function FoodItem(props) {

    return (
        <View key={props.data.item.key} style={styles.foodItem}>
            <Pressable onPress={props.delete.bind(this, props.id)}
                android_ripple={{ color: "#dddddd" }}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.foodtext} >
                    {props.data.item.text}
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    foodItem: {
        margin: 7,
        borderRadius: 7,
        backgroundColor: "#5e0acc",

    },
    foodtext: {
        padding: 8,
        color: "white",
    },
    pressedItem: {
        opacity: 0.6
    }
})

