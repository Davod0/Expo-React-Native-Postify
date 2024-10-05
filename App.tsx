import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import DeviceProvider from "./Components/DeviceProvider";
import { PostProvider } from "./Components/Post/PostProvider";
import UserProivder from "./Components/User/UserProvider";
import RootStackNavigator from "./Navigators/RootStackNavigator";

export default function App() {
  return (
    <UserProivder>
      <PostProvider>
        <DeviceProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <RootStackNavigator />
          </NavigationContainer>
        </DeviceProvider>
      </PostProvider>
    </UserProivder>
  );
}

const styles = StyleSheet.create({
  container: {},
});
