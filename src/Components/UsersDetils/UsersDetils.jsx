import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const UsersDetils = () => {
    // use navgation code start here;
    const navagite = useNavigate()
    // const isNavgite = navagite(-1)

    const userDetailsData = useLoaderData();

    const {
        name,
        username,
        email,
        phone,
        website,
        address,
        company
    } = userDetailsData;

    const { street, suite, city, zipcode } = address;
    const { name: companyName, catchPhrase } = company;

    // use Location here now;

    return (
        <div className="flex justify-center items-center min-h-screen  bg-gray-100">

            <div className="bg-white shadow-xl rounded-2xl p-6 w-96 m-20 hover:shadow-2xl transition">

                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
                    {name}
                </h1>

                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Username:</span> {username}</p>
                    <p><span className="font-semibold">Email:</span> {email}</p>
                    <p><span className="font-semibold">Phone:</span> {phone}</p>
                    <p><span className="font-semibold">Website:</span> {website}</p>
                </div>

                <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                    <h2 className="font-semibold text-lg mb-1">Address</h2>
                    <p>{street}, {suite}</p>
                    <p>{city} - {zipcode}</p>
                </div>

                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                    <h2 className="font-semibold text-lg mb-1">Company</h2>
                    <p>{companyName}</p>
                    <p className="text-sm text-gray-600">{catchPhrase}</p>
                </div>
                <div>
                  
                        <button onClick={()=>navagite(-1)} className='btn btn-ghost'>Back Users</button>

                    
                </div>

            </div>

        </div>
    );
};

export default UsersDetils;