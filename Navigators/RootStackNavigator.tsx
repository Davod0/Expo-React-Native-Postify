import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";


export type RootStackParamList = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
    );
}