import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Example from './Example'

const Home = () => {
  return (
    <div className='flex flex-col h-screen '>
      <div className='bg-[#71DFE7]'>
        <Navbar />
      </div>
      <div className='h-full gradient1'>
        <Hero />
        <div className='h-96 w-96 m-auto mt-20'><Example /></div>
      </div>
      <div className='bg-[#71DFE7]'><Footer /></div>
    </div >
  )
}

export default Home