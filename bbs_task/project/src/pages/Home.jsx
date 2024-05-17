import { useRef } from 'react';
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer';
import Services from '../Components/Services';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home