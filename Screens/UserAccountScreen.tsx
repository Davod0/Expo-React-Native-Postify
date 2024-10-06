import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(
    null
  );
  const { posts } = usePost();
  const { currentUser } = useUser();
  const userId = props.route.params.userId;
  const userName = props.route.params.userName;
  const value: "StartPage" | "FavoritePosts" | "CreatePost" | "StartPage" | "" =
    "";

  const currentUserCreatedPost = posts.filter((post) => post.userId === userId);

  const openPexelsWebsite = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://www.pexels.com/search/love/"
    );
    setResult(result);
  };

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
          style={styles.segmentedButtons}
        />
      </SafeAreaView>

      {currentUser ? (
        <View>
          <TouchableOpacity
            style={styles.pexelsButton}
            onPress={openPexelsWebsite}
          >
            <Text style={styles.pexelsButtonText}>
              Use Pexels To Download Any Kind Of Pictures To Create New Posts
              Here
            </Text>
          </TouchableOpacity>
          <Text style={styles.userText}>All Posts Created By {userName}</Text>
        </View>
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
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#f8f9fa",
  },
  userText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#333",
  },
  segmentedButtons: {
    marginTop: 20,
    marginBottom: 20,
  },
  pexelsButton: {
    backgroundColor: "#B0BEC5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  pexelsButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
