import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import PostCard from "../Components/Post/PostCrad";
import { usePost } from "../Components/Post/PostProvider";
import { useUser } from "../Components/User/UserProvider";
import { RootStackParamList } from "../Navigators/RootStackNavigator";
import { TabStackParamList } from "../Navigators/TabStackNavigator";

type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "UserAccount">,
  BottomTabScreenProps<TabStackParamList>
>;

export default function UserAccountScreen(props: Props) {
  const userId = props.route.params.userId;
  const userName = props.route.params.userName;
  const value: "StartPage" | "FavoritePosts" | "CreatePost" | "StartPage" | "" =
    "";

  const { posts } = usePost();
  const { currentUser } = useUser();
  const currentUserCreatedPost = posts.filter((post) => post.userId === userId);

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
              label: "Home",
            },
            {
              value: "FavoritePosts",
              label: "Favorite Posts",
            },
            {
              value: "CreatePost",
              label: "Create Post",
            },
          ]}
        />
      </SafeAreaView>

      {currentUser ? (
        <Text style={styles.userText}>All Posts Created By {userName}</Text>
      ) : (
        <Text style={styles.userText}>Sign In To See All Your Posts Here</Text>
      )}

      {currentUserCreatedPost.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  userText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#333",
  },
});
