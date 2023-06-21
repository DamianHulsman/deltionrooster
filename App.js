import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Rooster from './components/Rooster.js';

export default function App() {
  try {
    return (
      <View style={styles.container}>
        <Text>Onofficiële Deltion rooster app</Text>
        <ScrollView>
          <Rooster />
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
