import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { IPost } from "../../data";
import { useUser } from "../User/UserProvider";
import { usePost } from "./PostProvider";

interface Props {
  post: IPost;
}

export default function PostLikedButton({ post }: Props) {
  const [likes, setLikes] = useState<number>(post.likes);
  const { currentUser } = useUser();
  const { setLikedPostByUser } = usePost();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLike = () => {
    if (!currentUser) {
      showModal("You need to sign in to like a post.");
      return;
    }
    if (currentUser && !post.likersId.includes(currentUser.id)) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      post.likes = newLikes;
      post.likersId.push(currentUser.id);

      setLikedPostByUser(currentUser.id);
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

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Okey" onPress={closeModal} />
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 15,
  },
});
