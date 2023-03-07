import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "./style.scss"



export default function About() {



  gsap.registerPlugin(ScrollTrigger);

/* 
  useEffect(() =>{
    gsap.to( <Header /> ,{
      yPercent:100,
      ease:'none',
      scrollTrigger: {
        trigger: '.about',
        start:'top bottom',
        end:'top top',
        scrub:true,
      }
    })
  })
 */

  useEffect(() =>{
    gsap.to(".title", {opacity:1 ,delay:0.6, y:-30, duration:1.1 ,scrollTrigger: {
      trigger: ".title",
    }})


    gsap.to(".p1", {opacity:1 ,delay:0.8, y:-30, duration:1.1 ,scrollTrigger: {
      trigger: ".p1",
    }})

    
    gsap.to(".p2", {opacity:1 ,delay:0.9, y:-30, duration:1 ,scrollTrigger: {
      trigger: ".p2",
    }})

    
    gsap.to(".p3", {opacity:1 ,delay:1, y:-30, duration:0.8 ,scrollTrigger: {
      trigger: ".p3",
    }})




  }, [])


  
  return (
    <div className='about'>
      <h1 className="title">
      We are here to make the user experience more fun and more interesting by implementing new design ideas creative work and enjoyably visuals.</h1>
      <div className='contain'>
      <p className="paragraphs p1">need to be inspire by new ideas Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce <span><a  className="link1" href="#">zobaczyć</a>  </span> sam jej wiż użytkownika może iż użytkownika może Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis eveniet odio voluptatum eum. Modi cupiditate dolores repellendus, magnam libero reiciendis tempore architecto, dolor harum quod consequuntur illum, minima id!.</p>
      <p className="paragraphs p2">teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron <span><a href="/">używania</a></span> Lorem Ipsum jest to, że ma wiele różnych Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam impedit ipsa molestiae neque porro voluptates. Provident, dolore accusantium nihil eius, consequatur molestiae, ut quia sit omnis alias sint ducimus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quos laborum harum cupiditate asperiores laudantium quia vero, nesciunt modi ullam quibusdam qui architecto dolorum id rem quam eum quisquam delectus..</p>
      <p className="paragraphs p3"> Jedną z mocnych stron używania <span><a href="#">Lorem Ipsum</a></span> jest to, że ma wiele różnych, Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych,  Ogólnie znana </p>
      </div>



    </div>
  )
}


     
    


