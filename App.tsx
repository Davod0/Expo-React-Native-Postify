import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import RootStackNavigator from './Navigators/RootStackNavigator';


export default function App() {
  return (
    // <Context.Provider value={}>
    <NavigationContainer>
        <StatusBar style="auto" />
        <RootStackNavigator/>
    </NavigationContainer>
    // </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {}
});
