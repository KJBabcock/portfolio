import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"
import Work from "../components/Work"
import Experience from "../components/Experience"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Experience />
      <Work />
      <Footer />
    </div>
  )
}

export default Home