import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import CreatePostScreen from '../Screens/CreatePostScreen';
import CreateUserScreen from '../Screens/CreateUserScreen';
import FavoriteScreen from "../Screens/FavoritePostsScreen";
import StartPageScreen from "../Screens/StartPageScreen";

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
                <SimpleLineIcons name="user" size={24}  
                style={{ marginRight: 16, fontSize:30, color:"#B0BEC5" }}
                onPress={() => navigation.navigate("UserAccount", {userId: userId, userName: userName})}/>
                )})
            }>
            <TabStack.Screen name="StartPage" component={StartPageScreen} 
               options={{
                   title: "All Posts",
                   tabBarIcon: (props) => <MaterialIcons name="home" size={24} color={props.focused? "#90EE90" : "#B0BEC5"} />,
                   tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "#90EE90" : "#B0BEC5", fontSize: 12 }}>
                        All Posts
                    </Text>)
                }}
            />
            <TabStack.Screen name="CreatePost" component={CreatePostScreen} 
                options={{
                    title: "Create New Post",
                    tabBarIcon: (props) => <Ionicons name="create" size={24} color={props.focused? "#90EE90" : "#B0BEC5"}/>,
                    tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "#90EE90" : "#B0BEC5", fontSize: 12 }}>
                        Create New Post
                    </Text>)
                }}
            />   
            <TabStack.Screen name="FavoritePosts" component={FavoriteScreen}
               options={{
                   title: "Favorite Posts",
                   tabBarIcon: (props) => <MaterialIcons name="favorite" size={24} color={props.focused? "#90EE90" : "#B0BEC5"} />,
                   tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "#90EE90" : "#B0BEC5", fontSize: 12 }}>
                        Favorite Posts
                    </Text>)
                }} 
            />
            <TabStack.Screen name="CreateUser" component={CreateUserScreen} 
                options={{
                    title: "Create New User",
                    tabBarIcon: (props) => <FontAwesome name="user-plus" size={24} color={props.focused? "#90EE90" : "#B0BEC5"}/>,
                    tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? "#90EE90" : "#B0BEC5", fontSize: 12 }}>
                        Create New User
                    </Text>)
                }}
            />   
        </TabStack.Navigator>
    );
};


