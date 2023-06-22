import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Rooster from './components/Rooster.js';

export default function App() {
  try {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deltion Rooster SD2A</Text>
        <ScrollView>
          <Rooster key="r-1"/>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  } catch (err) {
    console.log(err);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  title: {
    fontWeight: 'bold',
    backgroundColor: 'orange',
    fontSize: 20,
    textAlign: 'center',
  }
});
