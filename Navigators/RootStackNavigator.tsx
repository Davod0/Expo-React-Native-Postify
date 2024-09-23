import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserAccountScreen from "../Screens/UserAccountScreen";
import TabStackNavigator, { TabStackParamList } from "./TabStackNavigator";

export type RootStackParamList = {
  TabStackNavigator: NavigatorScreenParams<TabStackParamList>;
  UserAccount : {userId: number, userName: string};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="TabStackNavigator" component={TabStackNavigator} 
               options={{ headerShown: false }}
            />
            <RootStack.Screen name="UserAccount" component={UserAccountScreen}
               options={({route}) => ({title: route.params.userName})}
             />
        </RootStack.Navigator>
    );
}