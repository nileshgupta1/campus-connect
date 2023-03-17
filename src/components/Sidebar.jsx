import React from 'react'

function Sidebar() {
    const SideBarItem = ({ title }) => {
        return (
            <div className="mt-10 ml-10 text-lg py-2 h-10 hover:text-black text-sky-700 cursor-pointer flex items-center justify-start">
                {title}
            </div>
        )
    }
    return (
        <div className="md:w-[400px] h-screen flex-col md:flex hidden bg-green-100 mx-10 mt-10 rounded-2xl">
            {
                ["Dashboard", "Gate Pass", "Leave Form", "Mess Fee", "Gradesheet", "Library"].map((item, index) => (
                    <SideBarItem title={item} key={index + item} />
                ))
            }
        </div>
    )
}

export default Sidebar