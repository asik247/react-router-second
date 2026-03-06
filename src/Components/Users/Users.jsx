import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData);
    return (
        <div>
            <h1>users code here</h1>
        </div>
    );
};

export default Users;