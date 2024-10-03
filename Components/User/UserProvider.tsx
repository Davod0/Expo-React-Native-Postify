import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PostUserToServer } from "../../Actions/actions";
import { IPost, IUser, postList, usersList } from "../../data";
import { User } from "./UserSchema";

interface ContextValue {
  users: IUser[];
  currentUser: IUser | null;
  createUser: (data: User) => Promise<string>;
  findUserWithId: (userId: string) => IUser | undefined;
  findUserWithEmail: (email: string) => IUser | undefined;
  setCurrentUser: (user: IUser | null) => void;
}

export const UserContext = createContext<ContextValue>({} as ContextValue);

export function CreateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36);
}

export default function UserProivder(props: PropsWithChildren) {
  const [users, setUsers] = useState<IUser[]>(usersList);
  const [posts, setPosts] = useState<IPost[]>(postList);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const createUser = async (data: User): Promise<string> => {
    const id = CreateUniqueId();
    const user: IUser = {
      id: id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    users.push(user);
    setUsers([...users]);
    setCurrentUser(user);
    const response = await PostUserToServer(user);
    return id;
  };

  const findUserWithId = (userId: string) => {
    const user = users.find((user) => user.id === userId);
    return user;
  };

  const findUserWithEmail = (email: string) => {
    const user = users.find((user) => user.email === email);
    return user;
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        createUser,
        findUserWithId,
        findUserWithEmail,
        setCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
