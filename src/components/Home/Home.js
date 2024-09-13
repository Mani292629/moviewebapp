import React from 'react'
import Hero from '../Hero/Hero'
import Card1 from "../Card1/Card1";
import Card2 from '../Card2/Card2';
import Card3 from '../Card3/Card3';
import './Home.css';
import Footer from '../Footer/Footer';
import Faq from '../Accordian/Faq';

function Home() {
  return (
    <div>
      <Hero/>
      <div className="line"></div>
      
      <Card1/>
      <div className="line"></div>
      <Card2/>
      <div className="line"></div>
      <Card3/>
      <div className="line"></div>
      <Faq/>
      <div className="line"></div>
      <Footer/>
     
    </div>
  )
}

export default Home
