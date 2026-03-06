import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const postData = useLoaderData()
    console.log(postData);
    return (
        <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto m-20'>
           
            {
                postData.map(d => <SinglePost key={d.id} d={d}></SinglePost>)
            }
        </div>
    );
};

export default Post;