import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PostPostObjectToSever } from "../../Actions/actions";
import { IPost, postList } from "../../data";
import { CreateUniqueId, useUser } from "../User/UserProvider";
import { Post } from "./PostSchema";

interface PostContextValue {
  posts: IPost[];
  createPost: (data: Post) => void;
  favoritePosts: IPost[];
  setLikedPostByUser(userId: string): void;
}

export const PostContext = createContext<PostContextValue>(
  {} as PostContextValue
);

export function PostProvider(props: PropsWithChildren) {
  const { currentUser } = useUser();
  const [posts, setPosts] = useState<IPost[]>(postList);
  const [favoritePosts, setFavoritePosts] = useState<IPost[]>([]);

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

  const setLikedPostByUser = (userId: string) => {
    const filteredPosts = posts.filter((post) =>
      post.likersId.includes(userId)
    );
    setFavoritePosts(filteredPosts);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
        favoritePosts,
        setLikedPostByUser,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
