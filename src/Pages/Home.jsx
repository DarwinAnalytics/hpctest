import React from 'react'
import Navbar from '../components/Navbar'
import TopHead from '../components/TopHead'
import BannerSlider from '../components/BannerSlider'
import Banner from '../components/Banner'
import SeedCategories from '../components/SeedCategory'
import FeaturesSection from '../components/FeaturesSection'
import StatisticsSection from '../components/StatisticsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      
       
        <BannerSlider/>
        <Banner/>
        <SeedCategories/>
        <FeaturesSection/>
        <StatisticsSection/>  
        <TestimonialsSection/> 
       
    </div>
  )
}

export default Home