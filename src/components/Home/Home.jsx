import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


import "./style.scss"

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() =>{
    gsap.to(".h1", {opacity:1 ,delay:2.6, y:-30, duration:1.1 ,scrollTrigger: {
      trigger: ".h1" }})
    gsap.to(".parag1", {opacity:1 ,delay:1.2, y:-30, duration:1.1 ,scrollTrigger: {
      trigger: ".parag1" }})
    gsap.to(".parag2",  {opacity:1 ,delay:1.4, y:-30, duration:1.1 ,scrollTrigger: {
      trigger: ".parag2" }})
    gsap.to(".parag3", {opacity:1 ,delay:1.6, y:-30, duration:1.1 ,scrollTrigger: {
      trigger: ".parag3" }})
  })


  return (
    <div className='homepage'>

      <h1 className='h1' >BE INSPIRED BY NEW IDEAS</h1>
      <p className='parag1'>  Lorem Ipsum jes Jedną z mocnych stron używania Lorem Ipsum jest, iż użytkownika może rozpraszać zrozumiała zawartość strony żnych,  Ogólnie znana </p>
      
      <p className='parag2'> Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych, Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony żnych,  Ogólnie znana </p>

      
        <Spline className='sp' scene="https://prod.spline.design/euproZCL7lknVd6X/scene.splinecode" />

        <p className='parag3'> mocnych stron używaniat to, że ma wiele różnych, Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych,  Ogólnie znana </p>
      


    </div>
  )
}
