import { ScrollView } from "react-native";
import PostCard from "../Components/Post/PostCrad";
import { postList } from "../data";
import { usePost } from "../Components/Post/PostProvider";

export default function StartPageScreen() {
  const { posts } = usePost();
  return (
    <ScrollView>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ScrollView>
  );
}
