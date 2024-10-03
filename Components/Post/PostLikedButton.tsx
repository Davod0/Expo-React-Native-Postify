import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IPost } from "../../data";
import { useUser } from "../User/UserProvider";

interface Props {
  post: IPost;
}

export default function PostLikedButton({ post }: Props) {
  const [likes, setLikes] = useState<number>(post.likes);
  const { currentUser } = useUser();
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    post.likes = newLikes;
    if (currentUser) {
      post.likersId.push(currentUser.id);
    }
  };

  return (
    <View>
      {post.likes > 0 ? (
        <View style={styles.likeContainer}>
          <Text style={styles.likeText}>{post.likes}</Text>
          <Pressable onPress={handleLike}>
            <AntDesign
              name="heart"
              size={24}
              color="red"
              style={styles.heartIcon}
            />
          </Pressable>
        </View>
      ) : (
        <View style={styles.likeContainer}>
          <Text style={styles.likeText}>{post.likes}</Text>
          <Pressable onPress={handleLike}>
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              style={styles.heartIcon}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    fontSize: 16,
    color: "#333",
    marginRight: 5,
  },
  heartIcon: {
    marginLeft: 5,
  },
});
