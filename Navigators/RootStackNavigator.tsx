import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUser } from "../Components/User/UserProvider";
import UserAccountScreen from "../Screens/UserAccountScreen";
import TabStackNavigator, { TabStackParamList } from "./TabStackNavigator";

export type RootStackParamList = {
  TabStackNavigator: NavigatorScreenParams<TabStackParamList>;
  UserAccount: { userId: string; userName: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const { currentUser } = useUser();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabStackNavigator"
        component={TabStackNavigator}
        options={{ headerShown: false }}
      />
      {currentUser ? (
        <RootStack.Screen
          name="UserAccount"
          component={UserAccountScreen}
          options={({ route }) => ({ title: route.params.userName })}
        />
      ) : (
        <RootStack.Screen
          name="UserAccount"
          component={UserAccountScreen}
          options={{ title: "User Account" }}
        />
      )}
    </RootStack.Navigator>
  );
}
