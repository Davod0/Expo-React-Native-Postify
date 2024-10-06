import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import { useUser } from "../Components/User/UserProvider";
import CreatePostScreen from "../Screens/CreatePostScreen";
import FavoriteScreen from "../Screens/FavoritePostsScreen";
import SignInSignUpScreen from "../Screens/SignInSignUpScreen";
import SignOutScreen from "../Screens/SignOutScreen";
import StartPageScreen from "../Screens/StartPageScreen";

export type TabStackParamList = {
  StartPage: undefined;
  FavoritePosts: undefined;
  SignInSignUp: undefined;
  CreatePost: undefined;
  SignOut: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

export default function TabStackNavigator() {
  const { currentUser } = useUser();

  const userId = currentUser?.id;
  const userName = currentUser?.firstName;

  return (
    <TabStack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: (props) => (
          <SimpleLineIcons
            name="user"
            size={24}
            style={{ marginRight: 16, fontSize: 30, color: "#B0BEC5" }}
            onPress={() =>
              navigation.navigate("UserAccount", {
                userId: userId,
                userName: userName,
              })
            }
          />
        ),
      })}
    >
      <TabStack.Screen
        name="StartPage"
        component={StartPageScreen}
        options={{
          title: "All Posts",
          tabBarIcon: (props) => (
            <MaterialIcons
              name="home"
              size={24}
              color={props.focused ? "#6200ea" : "#B0BEC5"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#6200ea" : "#B0BEC5", fontSize: 12 }}
            >
              All Posts
            </Text>
          ),
        }}
      />
      <TabStack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: "Create New Post",
          tabBarIcon: (props) => (
            <Ionicons
              name="create"
              size={24}
              color={props.focused ? "#6200ea" : "#B0BEC5"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#6200ea" : "#B0BEC5", fontSize: 12 }}
            >
              Create New Post
            </Text>
          ),
        }}
      />
      <TabStack.Screen
        name="FavoritePosts"
        component={FavoriteScreen}
        options={{
          title: "Favorite Posts",
          tabBarIcon: (props) => (
            <MaterialIcons
              name="favorite"
              size={24}
              color={props.focused ? "#6200ea" : "#B0BEC5"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#6200ea" : "#B0BEC5", fontSize: 12 }}
            >
              Favorite Posts
            </Text>
          ),
        }}
      />
      {currentUser ? (
        <TabStack.Screen
          name="SignOut"
          component={SignOutScreen}
          options={{
            title: "Sign-out",
            tabBarIcon: (props) => (
              <FontAwesome
                name="sign-out"
                size={24}
                color={props.focused ? "#6200ea" : "#B0BEC5"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ color: focused ? "#6200ea" : "#B0BEC5", fontSize: 12 }}
              >
                Sign-out
              </Text>
            ),
          }}
        />
      ) : (
        <TabStack.Screen
          name="SignInSignUp"
          component={SignInSignUpScreen}
          options={{
            title: "Join Us",
            tabBarIcon: (props) => (
              <FontAwesome
                name="user-plus"
                size={24}
                color={props.focused ? "#6200ea" : "#B0BEC5"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ color: focused ? "#6200ea" : "#B0BEC5", fontSize: 12 }}
              >
                Sign in/Sign up
              </Text>
            ),
          }}
        />
      )}
    </TabStack.Navigator>
  );
}
