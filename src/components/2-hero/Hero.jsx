import React from "react";
import { motion } from "framer-motion"
import "./Hero.css";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        
        <motion.div className="parent-avatar"
        initial={{transform:"scale(0)"}}
        animate={{transform:"scale(1)"}}
        transition={{duration:4,type:"spring",stiffness:10}}

        
        
        >
          <img
            src={require("../../photos/logopng.png")}
            className="avatar"
            alt=""
          />
        </motion.div>
              <h1 className="title">Software Development,
                  WebSite Development</h1>
        <p className="subtitle">
          MH Company is a leading provider of website development services,
          specializing in creating high-quality, custom websites for businesses
          of all sizes. With a team of experienced developers, designers, and
          digital strategists, MH Company is committed to delivering tailored
          solutions that meet the unique needs and goals of each client.
              </p>
              <div className="icons flex">
                  <div className="icon insta "><i class="fa-brands fa-instagram"></i></div>
                  <div className="icon face"><i class="fa-brands fa-facebook"></i></div>
                  <div className="icon linkedin"><i class="fa-brands fa-linkedin"></i></div>
                  <div className="icon"></div>
              </div>
      </div>

      
    </section>
  );
}

export default Hero;
