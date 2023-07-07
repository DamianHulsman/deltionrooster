import { StyleSheet, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import Rooster from './components/Rooster.js';

export default function App() {
  try {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Deltion Rooster SD2A</Text>
          <Rooster key="r-1" />
        <Button title="info" color="orange" onPress={() => { alert(`Dit is de onofficiële rooster app voor Deltion \n\nVoor vragen stuur me een dm op Discord (dhulsman889)`) }} />
      </SafeAreaView>
    );
  } catch (err) {
    console.log(err);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontWeight: 'bold',
    backgroundColor: 'orange',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
});