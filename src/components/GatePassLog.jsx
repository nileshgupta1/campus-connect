import React, { useEffect, useState } from 'react'

function GatePassLog() {

    const rollno = '21cs2018';
    const [gatePassList, setGatePassList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://script.google.com/macros/s/AKfycbzu8eNiWbAMOYN2U_PNxBPtawL4vyCiYCY4Uk8co7qCx_s3OfJUAh1t0qyY6QYwEhJa/exec?roll=${rollno}`);
                const json = await response.json();
                console.log(json.data);
                setGatePassList(json.data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [])


    const TableItem = ({ obj }) => {
        let dateout = new Date(obj.dout);
        let datein = new Date(obj.dout);
        return (
            <tr>
                <td className='p-5'>{obj.roll}</td>
                <td className='p-5'>{obj.purpose}</td>
                <td className='p-5'>{obj.tout}</td>
                <td className='p-5'>{new Date(obj.dout).getDate()}-{new Date(obj.dout).getMonth() + 1}-{new Date(obj.dout).getFullYear()}</td>
                <td className='p-5'>{obj.tin}</td>
                <td className='p-5'>{new Date(obj.din).getDate()}-{new Date(obj.din).getMonth() + 1}-{new Date(obj.din).getFullYear()}</td>
            </tr>
        )
    }

    return (

        <div className=' relative text-gray-700 font-medium'>
            <table className=' absolute m-20 border border-[#6fdfe7] text-black'>
                <thead>
                    <td className='p-5'>Roll no</td>
                    <td className='p-5'>Purpose</td>
                    <td className='p-5'>Time Out</td>
                    <td className='p-5'>Date In</td>
                    <td className='p-5'>Time In</td>
                    <td className='p-5'>Date In</td>
                </thead>
                <tbody>
                    {
                        gatePassList && gatePassList.map((item, index) => {
                            if (index != 0) {
                                return <TableItem obj={item} key={index} />
                            }
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default GatePassLog