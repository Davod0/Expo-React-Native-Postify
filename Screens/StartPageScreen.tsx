import { ScrollView, Text, View } from "react-native";
import PostCard from "../Components/Post/PostCrad";
import { postList } from "../data";

export default function StartPageScreen() {
  return (
    <ScrollView>
      {postList.map((post) => (
        <PostCard post={post} />
      ))}
    </ScrollView>
  );
}
