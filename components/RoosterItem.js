import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

const RoosterItem = props => {

    return (
        <View>
            <Text>{props.data.t}</Text>
            <Text>{props.data.v}</Text>
            <Text>{props.data.r}</Text>
        </View>);

};

export default RoosterItem;