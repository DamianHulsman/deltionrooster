import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RoosterItem = props => {

    return (
        <View style={styles.Roosterdata}>
            <Text>{props.data.t}</Text>
            <Text>{props.data.v}</Text>
            <Text>{props.data.r}</Text>
        </View>);

};

export default RoosterItem;

const styles = StyleSheet.create({
    Roosterdata: {
        padding: 5
    }
});