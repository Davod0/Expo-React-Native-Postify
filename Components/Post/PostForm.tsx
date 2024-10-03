import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { PostPostObjectToSever } from "../../Actions/actions";
import { IPost, postList } from "../../data";
import { useUser } from "../User/UserProvider";
import { Post, PostSchema } from "./PostSchema";

export default function PostForm() {
  const { currentUser } = useUser();
  const [post, setPost] = useState<IPost[]>(postList);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Post>({
    resolver: zodResolver(PostSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: Post) => {
    console.log("Post Formulärdata:", data);

    const response = await PostPostObjectToSever(data);
    reset();
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Create New Post</Text>

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Title"
        onChangeText={(text) => setValue("title", text)}
        {...register("title")}
      />
      {errors.title ? (
        <Text style={{ color: "red" }}>{errors.title.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Content"
        onChangeText={(text) => setValue("content", text)}
        {...register("content")}
      />
      {errors.content ? (
        <Text style={{ color: "red" }}>{errors.content.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Image Url"
        onChangeText={(text) => setValue("imageUrl", text)}
        {...register("imageUrl")}
      />
      {errors.imageUrl ? (
        <Text style={{ color: "red" }}>{errors.imageUrl.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Author"
        secureTextEntry
        onChangeText={(text) => setValue("author", text)}
        {...register("author")}
      />
      {errors.author ? (
        <Text style={{ color: "red" }}>{errors.author.message}</Text>
      ) : null}

      <Button title="Create" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
