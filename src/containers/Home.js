import React from 'react'
import Banner from '../components/Banner';
import RowCard from '../components/RowCard';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
// import theme from "../themes/theme";
// import { ThemeProvider } from "@mui/material";

const Home = () => {
  return (
    <div style={{backgroundColor: "#141414", color: "white"}}>
        <Navbar/>
        <Banner/>
        <RowCard/>
        <Footer/>
    </div>
  )
}

export default Home