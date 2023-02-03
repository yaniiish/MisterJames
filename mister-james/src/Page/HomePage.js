import React from 'react'
import Navbar from '../Components/Navbar'
import BannerHome from '../Components/Banner/BannerHome'
import Section1 from '../Components/HomeComponents/Section1home/Section1'
import Section2 from '../Components/HomeComponents/Section2home/Section2'
import Section3 from '../Components/HomeComponents/Section3home/Section3'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <BannerHome />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      </>
  )
}

export default HomePage
