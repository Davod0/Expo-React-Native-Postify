import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { RootStackParamList } from "../Navigators/RootStackNavigator";
import { TabStackParamList } from "../Navigators/TabStackNavigator";

type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "UserAccount">,
  BottomTabScreenProps<TabStackParamList>
>;

export default function UserAccountScreen(props: Props) {
  const userId = props.route.params.userId;
  const userName = props.route.params.userName;

  // const filteredPosts = posts.filter((post) => post.userId === userId);

  const value: "StartPage" | "FavoritePosts" | "CreatePost" | "StartPage" | "" =
    "";

  return (
    <View>
      <Text>User Acount Screen</Text>
      <Text>User Name: {userName}</Text>
      <Text>User ID: {userId}</Text>

      <SafeAreaView>
        <SegmentedButtons
          value={value}
          onValueChange={(value) =>
            props.navigation.navigate(
              value as "StartPage" | "FavoritePosts" | "CreatePost"
            )
          }
          buttons={[
            {
              value: "StartPage",
              label: "Start Page",
            },
            {
              value: "FavoritePosts",
              label: "favorite Posts",
            },
            {
              value: "CreatePost",
              label: "Create Post",
            },
          ]}
        />
      </SafeAreaView>
    </View>
  );
}
