import React, { use } from 'react';

const PostDetails = ({ postPromise }) => {

    const postData = use(postPromise);

    const {
        name,
        username,
        email,
        phone,
        website,
        address: { street, suite, city, zipcode },
        company: { name: companyName, catchPhrase }
    } = postData;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-96 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">

                {/* profile header */}
                <div className="text-center border-b pb-4 mb-4">
                    <div className="w-20 h-20 mx-auto bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                        {name.charAt(0)}
                    </div>

                    <h1 className="text-2xl font-bold mt-3">{name}</h1>
                    <p className="text-gray-500">@{username}</p>
                </div>

                {/* contact info */}
                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Email:</span> {email}</p>
                    <p><span className="font-semibold">Phone:</span> {phone}</p>
                    <p><span className="font-semibold">Website:</span> {website}</p>
                </div>

                {/* address */}
                <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                    <h2 className="font-semibold text-lg mb-1">Address</h2>
                    <p>{street}, {suite}</p>
                    <p>{city} - {zipcode}</p>
                </div>

                {/* company */}
                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                    <h2 className="font-semibold text-lg mb-1">Company</h2>
                    <p className="font-medium">{companyName}</p>
                    <p className="text-sm text-gray-600">{catchPhrase}</p>
                </div>

            </div>

        </div>
    );
};

export default PostDetails;