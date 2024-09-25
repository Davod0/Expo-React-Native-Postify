import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import UserProivder from './Components/User/UserProvider';
import RootStackNavigator from './Navigators/RootStackNavigator';


export default function App() {
  return (
    <UserProivder>
      <NavigationContainer>
          <StatusBar style="auto" />
          <RootStackNavigator/>
      </NavigationContainer>
     </UserProivder>
  );
}

const styles = StyleSheet.create({
  container: {}
});
