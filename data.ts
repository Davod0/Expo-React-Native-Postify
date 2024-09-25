
export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    author: IUser;
    creationDate: Date;
    imageUrl?: string;
}