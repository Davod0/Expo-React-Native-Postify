import { Post } from "../Components/Post/PostSchema";
import { IPost, IUser } from "../data";


export async function PostUserToServer(data: IUser) {
    console.log("User From Action:", data);
}
export async function PostPostObjectToSever(data: Post) {

}

export async function updatePostOnServer(data: IPost) {

}