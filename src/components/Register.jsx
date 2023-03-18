import React from 'react';

export default function Register() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-300 uppercase">
                    Register
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='flex'>
                        <div className='mb-2 w-1/2 mr-2'>
                        <label
                            for="roll-no"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Roll Number
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </div>
                        <div className='mb-2 w-1/2  flex-grow'>
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='flex'>
                        <div className="mb-2 w-1/3 mr-2">
                            <label
                                for="course"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Course
                            </label>
                            <select
                                type="select"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >{
                                    ["B.Tech", "IDD", "M.Tech", "PHD"].map((sem) => (
                                        <option className='m-1 px-3' value={sem}>{sem}</option>
                                    ))
                                }</select>
                        </div>
                        <div className='mb-2 w-1/3 mr-2'>
                            <label
                                for="branch"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Branch
                            </label>
                            <select
                                type="select"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >{
                                    ["CSE", "IT", "ECE", "CE", "PE", "ME", "M&C", "ChE"].map((sem) => (
                                        <option className='m-1 px-3' value={sem}>{sem}</option>
                                    ))
                                }</select>
                        </div>
                        <div className="mb-2 w-1/3 flex-grow">
                            <label
                                for="sem"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Semester
                            </label>
                            <select
                                type="select"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >
                                {
                                    ["1", "2", "3", "4", "5", "6", "7", "8"].map((sem) => (
                                        <option className='m-1 px-3' value={sem}>{sem}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mb-2 w-1/2 mr-2'>
                        <label
                            for="room-no"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Room Number
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </div>
                        <div className='mb-2 w-1/2  flex-grow'>
                        <label
                            for="mob-no"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-600">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}