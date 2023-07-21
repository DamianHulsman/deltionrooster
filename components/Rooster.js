import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import SwipeGesture from '../swipe-gesture.js';
import RoosterItem from "./RoosterItem";
import axios from "axios";

const Rooster = () => {
    try {

        const [schedule, setSchedule] = useState([]);
        var currentDate = new Date();
        var diff = currentDate.getDay() - 1;
        let diff2 = 15 - currentDate.getDay();

        const Dates = () => {
        //startdate
        if (diff < 0) {
            diff += 6;
        }

        var startDate = new Date(currentDate.setDate(currentDate.getDate() - diff));
        var formattedStartDate = startDate.getFullYear() + ('0' + (startDate.getMonth() + 1)).slice(-2) + ('0' + startDate.getDate()).slice(-2);

        //enddate
        if (diff2 < 0) {
            diff2 += 7;
        }

        var endDate = new Date(currentDate.setDate(currentDate.getDate() + diff2));
        var formattedEndDate = endDate.getFullYear() + ('0' + (endDate.getMonth() + 1)).slice(-2) + ('0' + endDate.getDate()).slice(-2);
        console.log(`Startdate: ${formattedStartDate} Enddate: ${formattedEndDate}`);
        Data(formattedStartDate, formattedEndDate);
    }
        onSwipePerformed = (action) => {
            switch(action){
              case 'left':{
                console.log('left Swipe performed');
                diff = diff + 7;
                diff2 = diff2 + 7;
                console.log(`diff = ${diff} diff2 = ${diff2}`);
                Dates();
                break;
              }
               case 'right':{
                console.log('right Swipe performed');
                diff = diff - 7;
                diff2 = diff2 - 7;
                console.log(`diff = ${diff} diff2 = ${diff2}`);
                Dates();
                break;
              }
               case 'up':{
                break;
              }
               case 'down':{
                break;
              }
               default : {
                console.log('Undeteceted action');
               }
            }}
      

        const Data = async (formattedStartDate, formattedEndDate) => {
            let array = [];
            let url = `https://roosters.deltion.nl/api/roster?group=SD2A&start=${formattedStartDate}&end=${formattedEndDate}`;
            let response = await axios.request(url);

            response.data.data.map(el => {
                array.push(
                    <View key={"view-" + new Date().getMilliseconds()} style={styles.dayItem}>
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
            <ScrollView>
            <SafeAreaView key="sav-1">
                <SwipeGesture gestureStyle={styles.swipesGestureContainer}
                onSwipePerformed={this.onSwipePerformed}>
                    {schedule}
                </SwipeGesture>
            </SafeAreaView>
            </ScrollView>
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
    },
    dayItem: {
        backgroundColor: '#ededed',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    }
});