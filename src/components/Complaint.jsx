import React, { useState } from 'react'

function Complaint() {
    const [data, setData] = useState({
        rollno: "",
        dept: "",
        description: "",
        location: "",
        date: "",
        time: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const options = ['Electrical', 'Plumbing', 'Painting', 'Carpentry'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }
    const divStyle = "m-10";
    return (
        <div>
            <h1 className='text-3xl'>Complaint Form</h1>
            <div className={divStyle}>
                <p className='inline mr-5'>Roll number</p>
                <input type="text" name="rollno" onChange={handleChange} value={data.rollno} className="border-2 border-gray-400 rounded-md" />
            </div>
            <div className={divStyle}>
                <select name='dept' onChange={handleChange}>
                    <option>Choose Complaint Department</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
            </div>
            <div className={divStyle}>
                <p className='m-3'>Complaint Description</p>
                <textarea name='description' onChange={handleChange} rows="10" cols="100" className='border border-gray-400'></textarea>
            </div>
            <div className={divStyle}>
                <p className='m-3'>Complaint Location</p>
                <textarea name='location' onChange={handleChange} rows="2" cols="100" className='border border-gray-400'></textarea>
            </div>
            <div className={divStyle}>
                <p className='m-3'>Preferred Timing</p>
                <input name='date' type="date" onChange={handleChange} value={data.date} />
                <input name='time' type="time" onChange={handleChange} value={data.time} />
            </div>
            <div>
                <button className=' border border-gray-400'>Submit</button>
            </div>
        </div>
    )
}

export default Complaint