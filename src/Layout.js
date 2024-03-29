import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./Layout.css";
import Hero from './components/Hero/Hero';
import TopAlbum from './components/TopAlbum/TopAlbum';
import NewAlbum from './components/NewAlbum/NewAlbum';

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Hero />
      <TopAlbum />
      <NewAlbum />
      
    </div>
  )
}

export default Layout