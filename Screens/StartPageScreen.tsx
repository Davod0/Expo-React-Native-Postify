import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import BatteryLevel from "../Components/BatteryLevel ";
import PostCard from "../Components/Post/PostCrad";
import { usePost } from "../Components/Post/PostProvider";
import { useUser } from "../Components/User/UserProvider";

export default function StartPageScreen() {
  const { posts } = usePost();
  const { checkIfUserIsLoggedIn } = useUser();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await checkIfUserIsLoggedIn();
        if (res == true) {
          console.log(`user is signed in`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUser();
  }, []);

  return (
    <ScrollView>
      <FlashList
        renderItem={({ item }) => {
          return <PostCard post={item} />;
        }}
        estimatedItemSize={50}
        data={posts}
      />
      <BatteryLevel />
    </ScrollView>
  );
}
