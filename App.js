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
  },
  title: {
    fontWeight: 'bold',
    backgroundColor: 'orange',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});