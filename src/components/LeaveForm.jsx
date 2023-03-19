import React, { useState } from 'react'




function FormElement(props) {
    return (
        <div className="mb-2">
            <label
                htmlFor={props.label}
                className="block text-sm font-semibold text-gray-800"
            >
                {props.title}
            </label>
            <input
                type="text"
                name={props.label}
                className="block w-full px-4 py-2 mt-2 text-[#6fdfe7] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
    )
}

function LeaveForm() {

    const [form, setForm] = useState({
        studentname: "",
        rollno: "",
        course: "",
        branch: "",
        semester: "",
        roomno: "",
        timeout: "",
        dateout: "",
        timein: "",
        datein: "",
        purpose: "",
        place: "",
        information: "",
        contact: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const styles = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5 content-center ";



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#acf6f3] uppercase">
                    Leave Form
                </h1>
                <form className="mt-6" method='post' onSubmit={handleSubmit}>
                    <FormElement label="purpose" title="Purpose" change={handleChange}/>
                    <FormElement label="place" title="Place" change={handleChange}/>
                    <FormElement label="information" title="Information" change={handleChange}/>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#78e2e8] rounded-md hover:bg-[#acf6f3] focus:outline-none focus:bg-[#78e2e8]"
                            type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LeaveForm