import React, { useState } from 'react'


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

    const styles = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5 content-center ";



    return (
        <div>LeaveForm</div>
    )
}

export default LeaveForm