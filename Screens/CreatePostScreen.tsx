import { useState } from "react";
import { Text, View } from "react-native";
import PostForm from "../Components/Post/PostForm";
import { useUser } from "../Components/User/UserProvider";

export default function CreatePostScreen(){
    
    const {currentUser} = useUser();

    return(
        <View>
            {currentUser ? (<PostForm />) : (<Text>You are not signed in</Text>) }
        </View>
    );
};