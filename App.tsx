import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PostProvider } from "./Components/Post/PostProvider";
import UserProivder from "./Components/User/UserProvider";
import RootStackNavigator from "./Navigators/RootStackNavigator";

export default function App() {
  return (
    <UserProivder>
      <PostProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <RootStackNavigator />
        </NavigationContainer>
      </PostProvider>
    </UserProivder>
  );
}
