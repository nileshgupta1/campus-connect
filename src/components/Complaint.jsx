import React, { useState } from 'react'

function Complaint() {
    const [rollno, setRollno] = useState();
    const options = ['Electrical', 'Plumbing', 'Painting', 'Carpentry'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }
    const divStyle = "m-10";
    return (
        <div>
            <div className={divStyle}>
                <p className='inline mr-5'>Roll number</p>
                <input type="text" name="rollno" onChange={() => (setRollno(e.target.value))} value={rollno} />
            </div>
            <div className={divStyle}>
                <p>Complaint Department</p>
                <select onChange={onOptionChangeHandler}>
                    <option>Please choose one option</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
            </div>
            <div className={divStyle}>
                <p>Complaint Description</p>
                <textarea></textarea>
            </div>
            <div className={divStyle}>
                <p>Complaint Location</p>
                <textarea></textarea>
            </div>
            <div className={divStyle}>
                <p>Preferred Timing</p>
                <input type="date" />
                <input type="time" />
            </div>
        </div>
    )
}

export default Complaint