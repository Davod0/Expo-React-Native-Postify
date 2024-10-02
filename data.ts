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
    author: string;
    creationDate: Date;
    userId: string;
    likes: number;
    likersId: string[];
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
        email: 'davod.nikoyii@gmail.com',
        password: 'password3033'
    }
];

export const postList: IPost[] = [
    {
        id: '1',
        title: 'Post 1',
        content: 'This is the content of post 1',
        author: 'John Doe',
        creationDate: new Date('2022-01-01T12:00:00.000Z'),
        userId: '1',
        likes: 3,
        likersId: ['1', '2', '3'],
        image: 'https://picsum.photos/700'
    },
    {
        id: '2',
        title: 'Post 2',
        content: 'This is the content of post 2',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-02T12:00:00.000Z'),
        userId: '2',
        likes: 2,
        likersId: ['2', '3'],
        image: 'https://picsum.photos/700'
    },
    {
        id: '3',
        title: 'Post 3',
        content: 'This is the content of post 3',
        author: 'John Doe',
        creationDate: new Date('2022-01-03T12:00:00.000Z'),
        userId: '1',
        likes: 1,
        likersId: ['1'],
        image: 'https://picsum.photos/700'
    },
    {
        id: '4',
        title: 'Post 4',
        content: 'This is the content of post 4',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-04T12:00:00.000Z'),
        userId: '2',
        likes: 0,
        likersId: [],
        image: 'https://picsum.photos/700'
    },
    {
        id: '5',
        title: 'Post 5',
        content: 'This is the content of post 5',
        author: 'John Doe',
        creationDate: new Date('2022-01-05T12:00:00.000Z'),
        userId: '1',
        likes: 2,
        likersId: ['1', '3'],
        image: 'https://picsum.photos/700'
    },
    {
        id: '6',
        title: 'Post 6',
        content: 'This is the content of post 6',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-06T12:00:00.000Z'),
        userId: '2',
        likes: 1,
        likersId: ['2']
    },
    {
        id: '7',
        title: 'Post 7',
        content: 'This is the content of post 7',
        author: 'John Doe',
        creationDate: new Date('2022-01-07T12:00:00.000Z'),
        userId: '1',
        likes: 0,
        likersId: []
    },
    {
        id: '8',
        title: 'Post 8',
        content: 'This is the content of post 8',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-08T12:00:00.000Z'),
        userId: '2',
        likes: 1,
        likersId: ['2']
    },
    {
        id: '9',
        title: 'Post 9',
        content: 'This is the content of post 9',
        author: 'John Doe',
        creationDate: new Date('2022-01-09T12:00:00.000Z'),
        userId: '1',
        likes: 1,
        likersId: ['1']
    },
    {
        id: '10',
        title: 'Post 10',
        content: 'This is the content of post 10',
        author: 'Jane Doe',
        creationDate: new Date('2022-01-10T12:00:00.000Z'),
        userId: '2',
        likes: 2,
        likersId: ['2', '3']
    }
];