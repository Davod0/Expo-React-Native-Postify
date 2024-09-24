import { User } from "../Components/User/UserSchema";

export async function AddUserToServer(data: User) {
    // return await axios.post('/api/users',data)
    console.log("From data:", data)
} 