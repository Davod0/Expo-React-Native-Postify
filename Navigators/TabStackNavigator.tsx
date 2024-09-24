import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CreateUserScreen from '../Screens/CreateUserScreen';
import FavoriteScreen from "../Screens/FavoritePostsScreen";
import StartPageScreen from "../Screens/StartPageScreen";
import {Text} from "react-native";

export type TabStackParamList = {
    FavoritePosts: undefined;
    StartPage: undefined;
    CreateUser : undefined;
    CreatePost: undefined;
}

const TabStack = createBottomTabNavigator<TabStackParamList>();

export default function TabStackNavigator(){

    const userId = 1;
    const userName = "Davod";

    return (
        <TabStack.Navigator
           screenOptions= {({navigation}) => ({headerRight: (props) => (
                <SimpleLineIcons name="user" size={24} color="black" 
                style={{ marginRight: 16, fontSize:30, color:"#90EE90" }}
                onPress={() => navigation.navigate("UserAccount", {userId: userId, userName: userName})}
                />
                )})
            }
            >
            <TabStack.Screen name="StartPage" component={StartPageScreen} 
               options={{
                    tabBarIcon: (props) => <MaterialIcons name="home" size={24} color={props.color} />,
                    title: "All Posts",
                }}
            />
            <TabStack.Screen name="FavoritePosts" component={FavoriteScreen}
               options={{
                    tabBarIcon: (props) => <MaterialIcons name="favorite" size={24} color={props.color} />,
                    title: "Favorite Posts",
                }} 
                />

            <TabStack.Screen name="CreateUser" component={CreateUserScreen} 
                options={{
                    title: "Create New User",
                    tabBarIcon: (props) => <FontAwesome name="user-plus" size={24} color={props.focused? "#87CEFA" : "#B0BEC5"}/>,
                    tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "#ADD8E6" : "#B0BEC5", fontSize: 12 }}>
                        Create New User
                    </Text>),
                    }}/>   
        </TabStack.Navigator>
    );
};


// tabBarIcon: () => <Ionicons name="create" size={24} color="black" />