import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <Hello bang={true} style={{ fontSize: 16 }}>
        World
      </Hello>
      <Hello bang={true}>World</Hello>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
