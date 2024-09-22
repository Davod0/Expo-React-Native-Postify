import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../Screens/SettingScreen";
import TabStackNavigator, { TabStackParamList } from "./TabStackNavigator";

export type RootStackParamList = {
  TabStackNavigator: NavigatorScreenParams<TabStackParamList>;
  Setting: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="TabStackNavigator" component={TabStackNavigator} 
               options={{ headerShown: false }}
            />
            <RootStack.Screen name="Setting" component={SettingScreen} />
        </RootStack.Navigator>
    );
}