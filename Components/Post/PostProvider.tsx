import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PostPostObjectToSever } from "../../Actions/actions";
import { IPost, postList } from "../../data";
import { CreateUniqueId, useUser } from "../User/UserProvider";
import { Post } from "./PostSchema";

interface PostContextValue {
  posts: IPost[];
  createPost: (data: Post) => void;
}

export const PostContext = createContext<PostContextValue>(
  {} as PostContextValue
);

export function PostProvider(props: PropsWithChildren) {
  const { currentUser } = useUser();
  const [posts, setPosts] = useState<IPost[]>(postList);

  const createPost = async (data: Post) => {
    const post: IPost = {
      id: CreateUniqueId(),
      userId: currentUser!.id,
      likes: 0,
      likersId: [],
      title: data.title,
      content: data.content,
      author: currentUser?.firstName + " " + currentUser?.lastName,
      creationDate: new Date(),
      image: data.imageUrl,
    };
    posts.unshift(post);
    setPosts([...posts]);
    const response = await PostPostObjectToSever(data);
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
