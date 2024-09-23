import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FavoriteScreen from "../Screens/FavoritePostsScreen";
import StartPageScreen from "../Screens/StartPageScreen";

export type TabStackParamList = {
    FavoritePosts: undefined;
    StartPage: undefined;
}

const TabStack = createBottomTabNavigator<TabStackParamList>();

export default function TabStackNavigator(){

    const userId = 1;
    const userName = "Davod";

    return (
        <TabStack.Navigator
           screenOptions= {({navigation}) => ({headerRight: (props) => (
                <FontAwesome5 name="user"
                style={{ marginRight: 16, fontSize:30, color:"#90EE90" }}
                 onPress={() => navigation.navigate("UserAccount", {userId: userId, userName: userName})}
                />
                )})
            }
            >
            <TabStack.Screen name="StartPage" component={StartPageScreen} 
               options={{
                    tabBarIcon: (props) => <MaterialIcons name="home" size={24} color={props.color} />,
                }}
            />
            <TabStack.Screen name="FavoritePosts" component={FavoriteScreen}
             options={{
                 tabBarIcon: (props) => <MaterialIcons name="favorite" size={24} color={props.color} />,
                }} 
                />
        </TabStack.Navigator>
    );
};
