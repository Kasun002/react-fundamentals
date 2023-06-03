import React from "react";
import UserList from "../components/List";

// Container component
const userList = [
    {
        id: 1,
        name: 'Kasun',
        address: 'No:278, VI Drive, Temple Place',
        country: 'Sri Lanka'
    },
    {
        id: 2,
        name: 'John',
        address: '123 Main Street',
        country: 'United States'
    },
    {
        id: 3,
        name: 'Emma',
        address: '45 Park Avenue',
        country: 'United Kingdom'
    },
    {
        id: 4,
        name: 'Carlos',
        address: 'Av. Libertador 123',
        country: 'Argentina'
    },
    {
        id: 5,
        name: 'Lina',
        address: 'Rue de la Paix 56',
        country: 'France'
    }
];

const ListPage = (): JSX.Element => {
    return (
        <>
            <h2>User List</h2>
            <UserList users={userList} />
        </>
    )
}

export default ListPage;