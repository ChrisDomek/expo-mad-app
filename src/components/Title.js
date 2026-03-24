import {View, StyleSheet, Text} from "react-native";   


export default function Title({title}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 60,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
    },

});