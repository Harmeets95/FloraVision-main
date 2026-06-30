import React from 'react'
import Hero from '../components/Hero/Hero'
import TrendingPlants from '../components/TrendingPlants/TrendingPlants'
import TopSelling from '../components/TopSelling/TopSelling'
import CustomerReviews from '../components/CustomerReviews/CustomerReviews'
import OxygenPlants from '../components/OxygenPlants/OxygenPlants'
import Footer from '../components/Footer/Footer'

import heroBg from '../assests/bgFigma.svg'


const Home = () => {
  return (
    <main
    >

     
      <section className="relative min-h-screen overflow-hidden">

      
        <img
          src={heroBg}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            z-0
          "
        />
        <div
          className="
          absolute
          inset-0
          bg-[#071108]/40
          z-0
          "
        />
        <div className="relative z-10">

          <Hero />

          <TrendingPlants />

        </div>

      </section>

      <TopSelling />

      <CustomerReviews />

      <OxygenPlants />

      <Footer />
      

    </main>
  )
}

export default Home