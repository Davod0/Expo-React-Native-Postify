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
    imageUrl?: string;
    author: string;
    creationDate: Date;
    userId: string;
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


export const postsList: IPost[] = [
    {
        id: '101',
        title: 'First Post',
        content: 'This is the content of the first post.',
        imageUrl: 'https://example.com/image1.jpg',
        author: 'John Doe',
        creationDate: new Date('2024-01-01'),
        userId: '1'
    },
    {
        id: '102',
        title: 'Second Post',
        content: 'This is the content of the second post.',
        author: 'Jane Smith',
        creationDate: new Date('2024-01-02'),
        userId: '2'
    },
    {
        id: '103',
        title: 'Third Post',
        content: 'This is the content of the third post.',
        imageUrl: 'https://example.com/image2.jpg',
        author: 'Michael Brown',
        creationDate: new Date('2024-01-03'),
        userId: '3'
    },
    {
        id: '104',
        title: 'Fourth Post',
        content: 'This is the content of the fourth post.',
        imageUrl: 'https://example.com/image3.jpg',
        author: 'Emily Johnson',
        creationDate: new Date('2024-01-04'),
        userId: '4'
    },
    {
        id: '105',
        title: 'Fifth Post',
        content: 'This is the content of the fifth post.',
        author: 'David Williams',
        creationDate: new Date('2024-01-05'),
        userId: '5'
    }
];
