import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "mobx-react"
import stores from "./src/store"

export default function App() {
  return (
    <Provider rootStore={stores}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app! hhh</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>

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
