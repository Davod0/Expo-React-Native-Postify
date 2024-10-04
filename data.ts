export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IPost {
    id: string;
    userId: string;
    likes: number;
    likersId: string[];
    title: string;
    content: string;
    author: string;
    creationDate: Date;
    image?: string;
}


export const usersList: IUser[] = [
    {
        id: '1',
        firstName: 'Emmy',
        lastName: 'Larsson',
        email: 'emmy.larsson@outlook.com',
        password: 'password123'
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@gmail.com',
        password: 'pass456'
    },
    {
        id: '3',
        firstName: 'Michael',
        lastName: 'Brown',
        email: 'michael.brown@gmail.com',
        password: 'pass789'
    },
    {
        id: '4',
        firstName: 'Sara',
        lastName: 'Johnson',
        email: 'sara.johnson@gamil.com',
        password: 'password1011'
    },
    {
        id: '5',
        firstName: 'David',
        lastName: 'Williams',
        email: 'david.williams@gmail.com',
        password: 'password2022'
    },
    {
        id: '6',
        firstName: 'Davod',
        lastName: 'Nikoyi',
        email: 'davod@gmail.com',
        password: '123456'
    }
];

export const postList: IPost[] = [
    {
        id: '1',
        title: 'The Jungle',
        content: 'This is the content of post 1, This is the content of post 1, This is the content of post 1, This is the content of post 1 ,This is the content of post 1, This is the content of post 1, This is the content of post 1',
        author: 'Davod Nikoyi',
        creationDate: new Date('2022-01-01T12:00:00.000Z'),
        userId: '1',
        likes: 3,
        likersId: ['1', '2', '3'],
        image: 'https://picsum.photos/701'
    },
    {
        id: '2',
        title: 'Car Wash',
        content: 'This is the content of post 2, This is the content of post 1, This is the content of post 1, This is the content of post 1, This is the content of post 1, This is the content of post 1',
        author: 'Davod Nikoyi',
        creationDate: new Date('2022-01-02T12:00:00.000Z'),
        userId: '2',
        likes: 2,
        likersId: ['2', '3'],
        image: 'https://picsum.photos/702'
    },
    {
        id: '3',
        title: 'War',
        content: 'This is the content of post 3, This is the content of post 1, This is the content of post 1, This is the content of post 1',
        author: 'John Doe',
        creationDate: new Date('2022-01-03T12:00:00.000Z'),
        userId: '1',
        likes: 1,
        likersId: ['1'],
        image: 'https://picsum.photos/700'
    },
    {
        id: '4',
        title: 'Fighter',
        content: 'This is the content of post 4, This is the content of post 1, This is the content of post 1',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-04T12:00:00.000Z'),
        userId: '2',
        likes: 0,
        likersId: [],
        image: 'https://picsum.photos/700'
    },
    {
        id: '5',
        title: 'Nature',
        content: 'This is the content of post 5, This is the content of post 1',
        author: 'John Doe',
        creationDate: new Date('2022-01-05T12:00:00.000Z'),
        userId: '1',
        likes: 2,
        likersId: ['1', '3'],
        image: 'https://picsum.photos/700'
    },
    {
        id: '6',
        title: 'Street',
        content: 'This is the content of post 6, This is the content of post 1',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-06T12:00:00.000Z'),
        userId: '2',
        likes: 1,
        likersId: ['2']
    },
    {
        id: '7',
        title: 'Soft',
        content: 'This is the content of post 7, This is the content of post 1, This is the content of post 1',
        author: 'John Doe',
        creationDate: new Date('2022-01-07T12:00:00.000Z'),
        userId: '1',
        likes: 0,
        likersId: []
    },
    {
        id: '8',
        title: 'Friends',
        content: 'This is the content of post 8, This is the content of post 1, This is the content of post 1',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-08T12:00:00.000Z'),
        userId: '2',
        likes: 1,
        likersId: ['2']
    },
    {
        id: 'Love',
        title: 'Post 9',
        content: 'This is the content of post 9, This is the content of post 1, This is the content of post 1',
        author: 'John Doe',
        creationDate: new Date('2022-01-09T12:00:00.000Z'),
        userId: '1',
        likes: 1,
        likersId: ['1']
    },
    {
        id: 'Sky',
        title: 'Post 10',
        content: 'This is the content of post 10, This is the content of post 1, This is the content of post 1',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-10T12:00:00.000Z'),
        userId: '2',
        likes: 2,
        likersId: ['2', '3']
    }
];