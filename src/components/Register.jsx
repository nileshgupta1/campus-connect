import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState("");
    const [parentName, setParentName] = useState("");
    const [num, setNum] = useState("");
    const [parentNum, setParentNum] = useState("");
    const [rollno, setRollNo] = useState("");
    const [password,setPassword] = useState("");
    const [roomno, setRoomno] = useState("");
    const [block, setBlock] = useState("A");
    const [course, setCourse] = useState("B.Tech")
    const [branch, setBranch] = useState("CSE")
    const [dept,setDept] = useState("Computer Science")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        var baseUrl = `https://script.google.com/macros/s/AKfycbzw2trirj4yiPXmENQxrz5hUvjzqGAb6SESYsDhutAEfT8OPR3uIbfK3hRGaELREF6m/exec?name=${encodeURIComponent(name)}&fname=${encodeURIComponent(parentName)}&roll=${encodeURIComponent(rollno)}&dept=${encodeURIComponent(dept)}&ctype=${encodeURIComponent(course)}&mob=${encodeURIComponent(num)}&pmob=${encodeURIComponent(parentNum)}&room=${encodeURIComponent(roomno)}&hobl=${encodeURIComponent(block)}&cour=${encodeURIComponent(branch)}&pwd=${encodeURIComponent(password)}`
        fetch(baseUrl).then((response)=>{
                if(response.status === 200){
                    navigate("/dashboard")
                }
        })
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#acf6f3] uppercase">
                    Register
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className='flex'>
                        <div className="mb-2 w-1/2 mr-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2 w-1/2 flex-grow">
                            <label
                                htmlFor="parent-name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Parent's/ Gaurandian's Name
                            </label>
                            <input
                                type="text"
                                value={parentName}
                                onChange={(e)=> setParentName(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
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
                                value={rollno}
                                onChange={(e)=> setRollNo(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className='mb-2 w-1/4 mr-2'>
                            <label
                                for="block"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Block
                            </label>
                            <select
                                type="text"
                                value={block}
                                onChange={(e)=>setBlock(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >
                                {
                                    ["A", "B", "C", "D", "E"].map((block) => (
                                        <option className='m-1 px-3' value={block}>{block}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-2 w-1/4 mr-2'>
                            <label
                                for="room-no"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Room Number
                            </label>
                            <input
                                type="text"
                                value={roomno}
                                onChange={(e)=>setRoomno(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='flex'>
                        <div className="mb-2 w-1/3 mr-2">
                            <label
                                htmlFor="course"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Course
                            </label>
                            <select
                                type="select"
                                value={course}
                                onChange={(e)=>setCourse(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                                value={branch}
                                onChange={(e)=>setBranch(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >{
                                    ["CSE", "CSE+AI" , "IT", "ECE", "ChE", "PE", "EV", "M&C", "RE"].map((course) => (
                                        <option className='m-1 px-3' value={course}>{course}</option>
                                    ))
                                }</select>
                        </div>
                        <div className="mb-2 w-1/3 flex-grow">
                            <label
                                htmlFor="dept"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Department
                            </label>
                            <select
                                type="select"
                                value={dept}
                                onChange={(e)=>setDept(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >
                                {
                                    ["Computer Science", "Chemical", "Petroleum", "Electronics"].map((dep) => (
                                        <option className='m-1 px-3' value={dep}>{dep}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mb-2 w-1/2 mr-2'>
                            <label
                                htmlFor="mob-no"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                value={num}
                                onChange={(e) => setNum(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className='mb-2 w-1/2 flex-grow'>
                            <label
                                htmlFor="parent-mob-no"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Parent's/Gaurdian Mobile
                            </label>
                            <input
                                type="text"
                                value={parentNum}
                                onChange={(e)=>setParentNum(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#78e2e8] rounded-md hover:bg-[#acf6f3] focus:outline-none focus:bg-[#78e2e8]"
                            type='submit'>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}