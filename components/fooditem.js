import { StyleSheet, View, Text } from "react-native"

export default function FoodItem(props) {
    return (
        <View key={props.data.item.key} style={styles.foodItem}>
            <Text style={styles.foodtext} >
                {props.data.item.text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    foodItem: {
        margin: 7,
        borderRadius: 7,
        backgroundColor: "#5e0acc",
        padding: 8,
    },
    foodtext: {
        color: "white",
    },
})