import React from 'react'
import Navbar from '../Components/Navbar'
import BannerHome from '../Components/Banner/BannerHome'
import Section1 from '../Components/HomeComponents/Section1home/Section1'
import Section2 from '../Components/HomeComponents/Section2'

function HomePage() {
  return (
    <>
      <Navbar />
      <BannerHome />
      <Section1 />
      <Section2 />
      </>
  )
}

export default HomePage
