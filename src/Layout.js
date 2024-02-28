import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./Layout.css";
import Hero from './components/Hero/Hero';

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Layout
