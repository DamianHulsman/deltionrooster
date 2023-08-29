import { ScrollView, StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import Rooster from './components/Rooster.js';

export default function App() {
  try {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Deltion Rooster SD3A</Text>
        <ScrollView>
          <Rooster key="r-1"/>
        </ScrollView>
        <Button title="info" color="orange" onPress={() => {alert(`Dit is de onofficiële rooster app voor Deltion \n\nVoor vragen stuur me een dm op Discord (dhulsman889)`)}}/>
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