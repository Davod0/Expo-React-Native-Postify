import { Post } from "../Components/Post/PostSchema";
import { IPost, IUser } from "../data";


export async function PostUserToServer(data: IUser) {
    console.log("User From Action:", data);
    // await = axios.post("http://localhost:3000/user", user);
}
export async function PostPostObjectToSever(data: Post) {

    // const id = CreateUniqueId();
    // const user = usersList.find(user => user.id === "test");

    // if (!user) {
    //     throw new Error("User is not found.");
    // }
    // const userId = user.id;

    // const post: IPost = {
    //     id: id,
    //     title: data.title,
    //     content: data.content,
    //     imageUrl: data.imageUrl,
    //     author: data.author,
    //     creationDate: new Date(),
    //     userId: "userId"
    // }
    // console.log("Post:", post)
    // await = axios.post("http://localhost:3000/post", user);
}

export async function updatePostOnServer(data: IPost) {
    // const posts = await axios.get("http://localhost:3000/post");
}