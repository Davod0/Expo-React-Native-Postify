import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PostUserToServer } from "../../Actions/actions";
import { IPost, IUser, postsList, usersList } from "../../data";
import { User } from "./UserSchema";
import { string } from "zod";



/* 
   en screen ska skapas för att user ska kunna logga in där

   och när man kommer till CreatePostScreen ska en if-sats används där för att kontrollera om user är inlogad eller inte om user är 
   inte inloggad då ska inloggningsskärmen visas annars  CreatePostScreen 
   isSignedIn ? (
      <>
        <PostForm />
      </>
      ) : (
      <>
        <SignInForm />
      </>
    ); 

    samma för UserAccountScreen, favoritePostsScreen 

    och om man är inloggad kommer till CreateUserScreen ska en text bara visas att man inloggad

 */

interface ContextValue{
    users: IUser[];
    posts: IPost[];
    currentUser: IUser | null;
    createUser: (data: User) => Promise<string>;
    findUser: (userId: string) => IUser | undefined;
}

export const UserContext = createContext<ContextValue>({} as ContextValue);
  
function CreateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
}

export default function UserProivder(props: PropsWithChildren){
    const [users, setUsers] = useState<IUser[]>(usersList); 
    const [posts, setPosts] = useState<IPost[]>(postsList);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    const createUser = async (data: User): Promise<string> => {
        const id = CreateUniqueId();
        const user: IUser = {
          id: id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }
        users.push(user);
        setUsers([...users]);
        setCurrentUser(user);
        const response = await PostUserToServer(user);  
        return id;            
    };

   const findUser = (userId: string) => {
        const user = users.find((user) => user.id === userId);
        if (!user) {
          throw new Error(`User with ID ${userId} not found.`);
        }
        return user;
    };

    return (
    <UserContext.Provider value={{ users, posts, currentUser, createUser, findUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);






































{/*
  import React, { createContext, useContext, useState } from 'react';

interface ContextValue {
  users: IUser[];
  posts: IPost[];
  currentUser?: IUser;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

// Skapa UserContext
export const UserContext = createContext<ContextValue>({} as ContextValue);

// Skapa UserProvider som tar hand om logiken
export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ users, posts, currentUser, setUsers, setPosts, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook för att använda UserContext
export const useUser = () => useContext(UserContext);
    
    
*/}