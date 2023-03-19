import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [rollno, setRollno] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData] = useState(null)
    const navigate = useNavigate();
    const signin = (e) => {
        e.preventDefault();
        data.map((info) =>{
            if(info.roll === rollno){
                if(info.password === password){
                    navigate("/dashboard");
                }
            }

        })
    }
    const baseUrl = "https://script.google.com/macros/s/AKfycbyd1Hy4PH8zPpiTqI9KB24HZrEcjYuxjRb8bl6OGlmbCSZ5f4LmhAi5wlwXoqwKIP6vfQ/exec"

    useEffect(()=>{
        axios.get(`${baseUrl}`).then((response) => {
            setData(response.data.data)
        })
    },[])

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#acf6f3] uppercase">
                    Sign in
                </h1>
                <form className="mt-6" method='post' onSubmit={signin}>
                    <div className="mb-2">
                        <label
                            htmlFor="roll-no"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Roll Number
                        </label>
                        <input
                            type="text"
                            value={rollno}
                            onChange={(e) => setRollno(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#78e2e8] rounded-md hover:bg-[#acf6f3] focus:outline-none focus:bg-[#78e2e8]"
                            type='submit'>
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/register"
                        className="font-medium text-[#acf6f3] hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}