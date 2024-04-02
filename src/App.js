import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";
// Empty dependency array means this effect runs once after the initial render

function App() {
 
 useEffect(() => {
   window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
     
       setshowscroll(true);
     } else {
       setshowscroll(false);
     }
   });
 }, []);
  
   const [showscroll, setshowscroll] = useState(false);
  return (
    <div className="container">
      <Header />
      <div className="divider" />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showscroll? 1:0}}
        id="scroll-up"
        class="scroll-up"
        href="#"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            fill="rgba(255,255,255,1)"
            d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default App;
