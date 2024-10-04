import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import PostCard from "../Components/Post/PostCrad";
import { usePost } from "../Components/Post/PostProvider";
import { useUser } from "../Components/User/UserProvider";
import { TabStackParamList } from "../Navigators/TabStackNavigator";

type Props = NativeStackScreenProps<TabStackParamList, "FavoritePosts">;

export default function FavoritePostsScreen(props: Props) {
  const { currentUser } = useUser();
  const { favoritePosts } = usePost();

  return (
    <View>
      {currentUser ? (
        <ScrollView>
          <Text style={styles.title}>All Posts Liked By You</Text>
          {favoritePosts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.authContainer}>
          <Text style={styles.authText}>
            Sign in to like posts and view your liked posts here
          </Text>
          <Button
            mode="contained"
            onPress={() => props.navigation.navigate("SignInSignUp")}
            style={styles.authButton}
            labelStyle={styles.buttonLabel}
          >
            Sign in or Sing up
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
    color: "#000",
  },
  authContainer: {
    alignItems: "center",
    padding: 20,
  },
  authText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  authButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#6200ea",
    borderRadius: 25,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
});
