import { User } from "../Components/User/UserSchema";
import { IUser } from "../data";

function CreateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
}

export async function AddUserToServer(data: User) {

    const id = CreateUniqueId();
    const user: IUser = {
        id: id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    }
    console.log("User:", user)
    // await = axios.post("http://localhost:3000/users", user);
}
