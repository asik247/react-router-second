import React, { use } from 'react';

const PostDetails = ({ postPromise }) => {

    const postData = use(postPromise);

    const { userId, id, title, body } = postData;

    return (
        <div className="mt-4 bg-gray-100 p-4 rounded-xl shadow-inner border">

            <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>User ID: {userId}</span>
                <span>Post ID: {id}</span>
            </div>

            <h2 className="text-lg font-bold text-purple-600 mb-2">
                {title}
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {body}
            </p>

            <div className="mt-3">
                <button className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition">
                    Read Full
                </button>
            </div>

        </div>
    );
};

export default PostDetails;