import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData);
    return (
        <div>
           <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto m-20'>
            {
                usersData.map(data=><User data={data}></User>)
            }
           </div>
        </div>
    );
};

export default Users;