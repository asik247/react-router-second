import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 md:p-12">

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                About Me
            </h1>

            {/* Info Card */}
            <div className="bg-white w-full md:w-4/5 lg:w-3/5 p-8 rounded-2xl shadow-lg">

                <div className="flex flex-col gap-4 text-gray-700 text-lg">
                    <p><span className="font-semibold">Name:</span> Asik</p>
                    <p><span className="font-semibold">Age:</span> 20</p>
                    <p><span className="font-semibold">Education:</span> Hobe</p>
                    <p><span className="font-semibold">Dream:</span> Build amazing web apps</p>
                    <p><span className="font-semibold">Hobbies:</span> Coding, Learning new tech, Gaming</p>
                    <p><span className="font-semibold">Location:</span> Bangladesh</p>
                </div>

            </div>

        </div>
    );
};

export default About;