import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <div className='m-1'>
                <p className='text-green-300 font-poppins text-4xl'>Campus Connect</p>
            </div>
            <div className='m-1 flex'>
            <Link to="/register">
            <button className="justify-self-end px-4 py-2 mr-3 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-300 focus:outline-none focus:bg-green-600">
                Register
            </button>
            </Link>
            <Link to="/login">
            <button className="justify-self-end px-4 py-2 mr-3 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-300 focus:outline-none focus:bg-green-600">
                Login
            </button>
            </Link>
            
            </div>
        </nav>
    )
}

export default Navbar