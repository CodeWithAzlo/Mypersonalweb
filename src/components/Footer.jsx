import React from 'react'
import my from "../assets/Azloimage.jpg"
import {  AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={my} alt="mylogo" />
      <h2>AZLAN SHAH</h2>
      <p>Motivation is Temporary, But Discipline Last Forever. </p>
      </div>
      <aside>
      <h2>Social Media</h2>

      <article>
      <a href="https://www.instagram.com/azlo980/" target={'blank'}><AiFillInstagram/></a>
      <a href="https://twitter.com/Azlanma91239562?t=WDJiIvC6VMFv693SQjzSzg&s=03" target={'blank'}><AiFillTwitterCircle/></a>
      <a href="https://github.com/CodeWithAzlo" target={'blank'}><AiFillGithub/></a>
      </article>
      </aside>
         <a href="#home"><AiOutlineArrowUp/></a>  
      </footer>
  )
}

export default Footer
