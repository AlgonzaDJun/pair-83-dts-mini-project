import React from 'react'
import Banner from '../components/Banner';
import RowCard from '../components/RowCard';
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <RowCard/>
    </div>
  )
}

export default Home