import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "mobx-react"
import stores from "./src/store"

const RootStack: any = createNativeStackNavigator();

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
