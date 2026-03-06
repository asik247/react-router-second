import React from 'react';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

            <h1 className="text-9xl font-extrabold text-red-500 mb-4">
                404
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                Page Not Found
            </h2>

            <p className="text-gray-600 mb-6 text-center max-w-md">
                Oops! The page you are looking for does not exist. It might have been removed or the URL is incorrect.
            </p>

            <a
                href="/"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
                Go Back Home
            </a>

        </div>
    );
};

export default PageNotFound;