import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import RoosterItem from "./RoosterItem";
import axios from "axios";


const Rooster = () => {
    try {
        const [schedule, setSchedule] = useState([]);
        const Data = async () => {
            let array = [];
            let url = `https://roosters.deltion.nl/api/roster?group=SD2A&start=20230619&end=20230626`;
            const response = await axios.request(url);
            let x = 0;

            response.data.data.map(el => {
                x = x++;
                array.push(
                    <View>
                        <Text>{el.date_f}</Text>
                        {
                            el.items.map(element => {
                                return (
                                    <View style={styles.Rooster}>
                                        <RoosterItem key={x} data={element}></RoosterItem>
                                    </View>)
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
            <SafeAreaView>
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
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });
  