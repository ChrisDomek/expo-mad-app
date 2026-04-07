import { StyleSheet, View } from "react-native";
import Title from "./Title";

export default function Header( {title }) {
    return (
        <View style={styles.header}>
            <Title title={title} />
            <View style={styles.underline} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
    },
    underline: {
        width: "100%",
        height: 4,
        backgroundColor: "#000000",
    },
});