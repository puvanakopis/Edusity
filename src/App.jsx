import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title="Our Program" subTitle="What We Offer"/>
      <Program/>
    </div>
  )
}

export default App