import { Post } from "../Components/Post/PostSchema";
import { User } from "../Components/User/UserSchema";
import { IPost, IUser } from "../data";

function CreateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
}

export async function PostUserToServer(data: User) {

    const id = CreateUniqueId();
    const user: IUser = {
        id: id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    }
    console.log("User:", user)
    // await = axios.post("http://localhost:3000/user", user);
}
export async function PostPostObjectToSever(data: Post) {

    const id = CreateUniqueId();
    const post: IPost = {
        id: id,
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl,
        author: data.author,
        creationDate: new Date(),
    }
    console.log("Post:", post)
    // await = axios.post("http://localhost:3000/post", user);
}
