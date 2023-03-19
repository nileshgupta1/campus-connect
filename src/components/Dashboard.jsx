import React from 'react'

function Dashboard() {
    const astyle = "text-[20px] text-[#78e2e8] hover:text-white hover:bg-[#78e2e8]"
    return (
<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
  <div className="fixed flex flex-col top-0 left-0 w-1/3 bg-white h-full border-r">
    <div className="flex items-center justify-center h-48 border-b">
      <div className='block text-3xl'>Campus Connet</div>
    </div>
    <div className='flex items-center justify-center h-14 border-b'>
        <a className={astyle} href='/dashboard'>Home</a></div>
        <div className='flex items-center justify-center h-14 border-b'>
        <a className={astyle} href='/complaint'>Complaint</a></div>
        <div className='flex items-center justify-center h-14 border-b'>
        <a className={astyle} href='/leaveform'>Leave Form</a></div>
        <div className='flex items-center justify-center h-14 border-b'>
        <a className={astyle} href='/'>Logout</a>
      </div>
  </div>
  <div className='fixed flex flex-col top-0 right-0 w-2/3 gradient1 h-full border-r'>
    <div className='mt-4 px-4 py-4 text-center'><p className='text-4xl text-white'>Welcome</p></div>
  </div>
</div>
    )
}

export default Dashboard