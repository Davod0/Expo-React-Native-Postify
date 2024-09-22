import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import RootStackNavigator from './Navigators/RootStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <RootStackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});
