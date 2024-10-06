import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PostUserToServer } from "../../Actions/actions";
import { IUser, usersList } from "../../data";
import { User } from "./UserSchema";

interface ContextValue {
  users: IUser[];
  currentUser: IUser | null;
  createUser: (data: User) => Promise<string>;
  findUserWithId: (userId: string) => IUser | undefined;
  findUserWithEmail: (email: string) => IUser | undefined;
  setCurrentUserAndStoreItToStorage: (user: IUser) => void;
  getCurrentUserFromStorageRemoveIt: () => void;
  checkIfUserIsLoggedIn: () => Promise<boolean>;
  setCurrentUser: (user: IUser | null) => void;
}

export const UserContext = createContext<ContextValue>({} as ContextValue);

export function CreateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36);
}

export default function UserProivder(props: PropsWithChildren) {
  const [users, setUsers] = useState<IUser[]>(usersList);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const setCurrentUserAndStoreItToStorage = async (user: IUser) => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem("activeUser", jsonValue);
      setCurrentUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentUserFromStorageRemoveIt = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("activeUser");
      if (jsonValue != null) {
        await AsyncStorage.removeItem("activeUser");
        setCurrentUser(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const checkIfUserIsLoggedIn = async (): Promise<boolean> => {
    const jsonValue = await AsyncStorage.getItem("activeUser");
    if (jsonValue != null) {
      setCurrentUser(JSON.parse(jsonValue));
      return true;
    }
    return false;
  };

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
    setCurrentUserAndStoreItToStorage(user);
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
        setCurrentUserAndStoreItToStorage,
        getCurrentUserFromStorageRemoveIt,
        checkIfUserIsLoggedIn,
        setCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
