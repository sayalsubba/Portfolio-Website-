import './App.css'
import Navbar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNav from './Components/MainNav/MainNav';
import Home from './Components/Home/Home';
import About from "./Components/About/About"
import Course from "./Components/Course/Course"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Lenis from "lenis";
import { useEffect } from 'react';

function App() {
useEffect(()=>{
const lenis = new Lenis({
  autoRaf:true,
  smoothWheel:true,
});
return()=>{
   lenis.destroy()
}
},[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainNav />
        <Home/>
       <About/>
       <Course/>
       <Contact/>
     <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
