import { createContext, PropsWithChildren, useContext, useState } from "react";
import { IPost, IUser, postsList, usersList } from "../../data";

  // useState - alla posts
  // useState - inloggad user | null
  // createContext

/* en UserProivder ska skapas som innehåller data om users, posts och inloggade user
   denna provider ska ligga runt i allt innehåkk i app-tsx

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
    createUser: () => void;
    findUser: () => {user: IUser};
  }

  export const UserContext = createContext<ContextValue>({} as ContextValue);

  export default function UserProivder(props: PropsWithChildren){
    const [users, setUsers] = useState<IUser[]>(usersList); 
    const [posts, setPosts] = useState<IPost[]>(postsList);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    const createUser = (/*den ska ta emot en ny User*/) => {
      const newUser: IUser = {
        id: "1",
        firstName: 'Anonym',
        lastName: 'Anonym',
        email: '<EMAIL>',
        password: '<PASSWORD>',
      };
      setUsers([...users, newUser]);
      setCurrentUser(newUser);
    }

    const findUser = (userId: string) => {
      const user = users.find(user => user.id === userId);
    }

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