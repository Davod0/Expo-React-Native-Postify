import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FavoriteScreen from "../Screens/FavoriteScreen";
import StartPageScreen from "../Screens/StartPageScreen";

export type TabStackParamList = {
    Favorite: undefined;
    StartPage: undefined;
}

const TabStack = createBottomTabNavigator<TabStackParamList>();

export default function TabStackNavigator(){
    return (
        <TabStack.Navigator
           screenOptions= {({navigation}) => ({headerRight: (props) => (
            <MaterialIcons
                       style={{ marginRight: 16 }}
                        name="settings-suggest"
                        size={24}
                        color={props.pressColor}
                        onPress={() => navigation.navigate("Setting")}
                    />
           )})
        }
        >
            <TabStack.Screen name="StartPage" component={StartPageScreen} />
            <TabStack.Screen name="Favorite" component={FavoriteScreen} />
        </TabStack.Navigator>
    );
};