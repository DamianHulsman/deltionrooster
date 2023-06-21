import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import RoosterItem from "./RoosterItem";
import axios from "axios";


const Rooster = () => {
    try {
        const [schedule, setSchedule] = useState([]);
        var currentDate = new Date();
        var diff = currentDate.getDay() - 1;
        if (diff < 0) {
            diff = 6;
        }
        var startDate = new Date(currentDate.setDate(currentDate.getDate() - diff));
        var formattedStartDate = startDate.getFullYear() + ('0' + (startDate.getMonth() + 1)).slice(-2) + ('0' + startDate.getDate()).slice(-2);
        var diff = 8 - currentDate.getDay();
        if (diff < 0) {
            diff += 7;
        }
        var endDate = new Date(currentDate.setDate(currentDate.getDate() + diff));
        var formattedEndDate = endDate.getFullYear() + ('0' + (endDate.getMonth() + 1)).slice(-2) + ('0' + endDate.getDate()).slice(-2);

        const Data = async () => {
            let array = [];
            let url = `https://roosters.deltion.nl/api/roster?group=SD2A&start=${formattedStartDate}&end=${formattedEndDate}`;
            const response = await axios.request(url);
            let x = 0;

            response.data.data.map(el => {
                x++;
                array.push(
                    <View key= {"view-" + new Date().getMilliseconds()}>
                        <Text style={styles.title}>{el.date_f}</Text>
                        {
                            el.items.map(element => {
                                return (
                                    <View key={"vi-" + Math.random() * 999} style={styles.Rooster}>
                                        <RoosterItem key={"ri-" + new Date().getMilliseconds()} data={element}></RoosterItem>
                                   </View>
                                   )
                            })
                        }

                    </View>
                )
            });
            setSchedule(array);
        }
        useEffect(() => {
            Data();
        }, []);

        return (
            <SafeAreaView key="sav-1">
                {schedule}
            </SafeAreaView>
        );

    } catch (err) {
        console.log(err);
    }

}

export default Rooster;

const styles = StyleSheet.create({
    Rooster: {
        flex: 1,
        backgroundColor: 'lightgray',
        margin: 10
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});