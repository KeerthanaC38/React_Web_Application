import React from 'react'
import './Hero.css'
import smarthome_img from '../Assets/site/smarthomelogo.jpg'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
       <img src={smarthome_img} alt=""/>
     <p> <h2>Offering an extensive range of smart home devices and accessories to cater to all your automation needs.</h2></p>
     <p><h2>We outperform our rivals on every front, and we guarantee to match any competitor's price</h2></p>
     </div>
       </div>
  )
}

export default Hero