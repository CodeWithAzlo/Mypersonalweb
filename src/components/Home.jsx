import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import mylogo from "../assets/mylogo.png"
const Home = () => {

  const clientCount= useRef(null);
  const projectCount= useRef(null);
  const animationClientsCount=()=>{
    animate(0,100,{
      duration:1, 
      onUpdate:(v)=>  (clientCount.current.textContent = v.toFixed( )),
    })
  };
  const animationProjectsCount=()=>{
    animate(0,500,{
      duration:1, 
      onUpdate:(v)=>  (projectCount.current.textContent = v.toFixed( )),
    })
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Azlan Shah
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "A JavaScript Engineer...",
                "A Frontend Developer.",
                "A Passionate Prog...",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:codewithazlo@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              <motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span>+
            </p>
            <span>Clients WorldWide</span>
          </article>

          <aside>
            <article>
              <p>
                <motion.span  whileInView={animationProjectsCount}   ref={projectCount}></motion.span>+
              </p>
              <span>Projects Done</span>
            </article>
            <article>
              <p>Contact</p>
              <span>codewithazlo@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
      <img src={mylogo} alt="AZLO" />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
