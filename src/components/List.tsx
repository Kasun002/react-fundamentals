import React from "react";
import './css/_list.css';

const UserList: React.FC<IUserList> = ({users}) => {
    return (
        <>
            <h2>Users List</h2>
            <div className="user-list">
                {users.map((user, index) => // Repeat list items using the map function
                    <div key={`user-${index}`} className="user-list__item">
                        <div className="user-list__name">Name: {user.name}</div>
                        <div className="user-list__address">Address: {user.address}</div>
                        <div className="user-list__country">Country: {user.country}</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default UserList;

interface IUser {
    id: number;
    name: string;
    address: string;
    country: string;
}

interface IUserList {
    users: IUser[]
}