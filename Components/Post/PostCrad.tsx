import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { updatePostOnServer } from "../../Actions/actions";
import { IPost } from "../../data";
import { useUser } from "../User/UserProvider";
import PostLikedButton from "./PostLikedButton";

interface Props {
  post: IPost;
}
export default function PostCard({ post }: Props) {
  const [likes, setLikes] = useState<number>(post.likes);
  const { currentUser } = useUser();
  const handleLike = async () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    post.likes = newLikes;
    if (currentUser) {
      post.likersId.push(currentUser.id);
      await updatePostOnServer(post);
    }
    await updatePostOnServer(post);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.author}>{post.author}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.image}
        />
        <Text style={styles.creationDate}>
          {new Date(post.creationDate).toLocaleString()}
        </Text>
        <PostLikedButton post={post} />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
    color: "#555",
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
    color: "#444",
  },
  creationDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  image: {
    marginVertical: 10,
    borderRadius: 10,
  },
});
