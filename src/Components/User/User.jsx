import React from 'react';
import { Link } from 'react-router';

const User = ({ data }) => {
    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition">

            <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
                {data.name}
            </h1>

            <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Username:</span> {data.username}</p>
                <p><span className="font-semibold">Email:</span> {data.email}</p>
                <p><span className="font-semibold">Phone:</span> {data.phone}</p>
                <p><span className="font-semibold">Website:</span> {data.website}</p>
            </div>

            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <h2 className="font-semibold text-lg mb-1">Address</h2>
                <p>{data.address.street}, {data.address.suite}</p>
                <p>{data.address.city} - {data.address.zipcode}</p>
            </div>

            {/* <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <h2 className="font-semibold text-lg mb-1">Company</h2>
                <p>{data.company.name}</p>
                <p className="text-sm text-gray-600">{data.company.catchPhrase}</p>
            </div> */}
            <div>
                
                <Link to={`/users/${data.id}`}>
                    <button className='btn btn-primary '>View Details</button>
                </Link>
            </div>

        </div>
    );
};

export default User;