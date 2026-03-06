import React from 'react';

const SinglePost = ({ d }) => {

    const { userId, id, title, body } = d;
    // useStae code start here;

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition">

            <div className="mb-3">
                <span className="text-sm text-gray-500">Post ID: {id}</span>
            </div>

            <h2 className="text-xl font-bold text-blue-600 mb-3">
                {title}
            </h2>

            <p className="text-gray-700 mb-4 whitespace-pre-line">
                {body}
            </p>

            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
                <span>User ID: {userId}</span>
                <button className='btn btn-secondary'>Show More</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                    Read More
                </button>
            </div>

        </div>
    );
};

export default SinglePost;