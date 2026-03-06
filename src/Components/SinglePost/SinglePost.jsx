import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import PostDetails from '../PostDetails/PostDetails';

const SinglePost = ({ d }) => {

    const { userId, id, title, body } = d;
    // old way fetch code start here;
    const postPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    // useStae code start here;
    const [toggle, setToggle] = useState(false)

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
                <button onClick={() => setToggle(!toggle)} className='btn btn-secondary'> {toggle ? "Hide" : "Show"} Info</button>




                <Link>
                    <button className='btn btn-primary'>Home</button>

                </Link>
            </div>
            {
                toggle && <Suspense fallback={<h1>Loadding..</h1>}>
                    <PostDetails postPromise={postPromise}></PostDetails>
                </Suspense>
            }

        </div>
    );
};

export default SinglePost;