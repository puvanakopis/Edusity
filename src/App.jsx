import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title="Our Program" subTitle="What We Offer"/>
      <Program/>
      <About/>
      <Title title="Gallery" subTitle="Campus Photos"/>
      <Campus/>
      <Title title="TESTIMONIALS" subTitle="What Student Says"/>
      <Testimonials/>
      <Title title="Contact Us" subTitle="Get in Touch"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App