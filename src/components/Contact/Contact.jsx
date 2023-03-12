import React from 'react'
import "./style.scss";

export default function Contact() {
  return (
    <div>
      <h1>Fell free to reach out </h1>


      <section>
        <h5>YOUR NAME</h5>
        <input type="text"  required placeholder='your name'/>
        <h5>YOUR LAST NAME</h5>
        <input type="text"  required placeholder='your las name'/>
        <h5>YOUR EMAIL</h5>
        <input type="text"  required placeholder='your email'/>
        <h5>YOUR MESSAGE</h5>
        <input type="text" placeholder='your message' />
      </section>
    </div>
  )
}
