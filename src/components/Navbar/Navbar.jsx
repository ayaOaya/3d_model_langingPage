import React, { useEffect } from 'react'
import "./style.scss";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';





export default function Navbar() {

  gsap.registerPlugin(ScrollTrigger);


useEffect(() =>{
  gsap.to(".st", {delay:1.3, opacity:1 ,y:10, duration:1.4 })
  }, [])
  return (
    <div className='navbar'>
      <div className='container'>
        <h2 className='st'><a href="/">STUDIO</a></h2>
        
            <ul className='st'>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">MORE</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
       
        </div>

    </div>
  )
}
