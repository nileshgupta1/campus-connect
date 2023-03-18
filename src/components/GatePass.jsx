import React, { useState } from 'react'

function GatePass() {
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


    const styles = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5 content-center ";

    return (
        <div>
            <h1 className='text-2xl m-10'>Gate Pass</h1>
            <div className='flex flex-row justify-between m-5 text-lg '>
                <label>Student Name</label>
                <input type="text" name="studentname" onChange={handleChange} value={form.studentname} className={styles} />
                <label>Roll No.</label>
                <input type="text" name="rollno" onChange={handleChange} value={form.rollno} className={styles} />
            </div>
            <div className='flex flex-row justify-between m-5 text-lg'>
                <label>Course</label>
                <input type="text" name="course" onChange={handleChange} value={form.course} className={styles} />
                <label>Branch</label>
                <input type="text" name="branch" onChange={handleChange} value={form.branch} className={styles} />
            </div>
            <div className='flex flex-row justify-between m-5 text-lg'>
                <label>Semester</label>
                <input type="text" name="semester" onChange={handleChange} value={form.semester} className={styles} />
                <label>Room No.</label>
                <input type="text" name="roomno" onChange={handleChange} value={form.roomno} className={styles} />
            </div>
            <div className='flex flex-row justify-between m-5 text-lg'>
                <label>Time Out</label>
                <input type="time" name="timeout" onChange={handleChange} value={form.timeout} className={styles} />
                <label>Date Out</label>
                <input type="date" name="dateout" onChange={handleChange} value={form.dateout} className={styles} />
            </div>
            <div className='flex flex-row justify-between m-5 text-lg'>
                <label>Time In</label>
                <input type="time" name="timein" onChange={handleChange} value={form.timein} className={styles} />
                <label>Date In</label>
                <input type="date" name="datein" onChange={handleChange} value={form.datein} className={styles} />
            </div>
            <div className='flex flex-row justify-between m-5 text-lg'>
                <label>Purpose</label>
                <input type="text" name="purpose" onChange={handleChange} value={form.purpose} className={styles} />
                <label>Place</label>
                <input type="text" name="place" onChange={handleChange} value={form.place} className={styles} />
            </div>
            <div className='flex flex-row justify-between m-5 text-lg'>
                <label>Overnight Stay Information</label>
                <input type="text" name="information" onChange={handleChange} value={form.information} className={styles} />
                <label>Contact No.</label>
                <input type="text" name="contact" onChange={handleChange} value={form.contact} className={styles} />
            </div>
            <div>
                <button className='text-xl text-white p-3 ml-5 bg-gray-500 hover:bg-gray-400 active:bg-gray-500 border rounded-md border-gray-300'>Submit</button>
            </div>
        </div>
    )
}

export default GatePass