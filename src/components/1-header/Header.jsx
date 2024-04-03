import { useEffect, useState } from "react";
import "./Header.css";
function Header() {
  const [showModel, setshowModel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  // use effect to theme
  useEffect(() => {
    
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");

    }else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  
  }, [theme]);
  return (
    <header className="flex">
      {/* hamburger */}
      <label
        onClick={function () {
          setshowModel(true);
        }}
        class="hamburger"
      >
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            class="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {/* endhamburger */}
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href=""></a>Home
          </li>
          <li>
            <a href=""></a>Artical
          </li>
          <li>
            <a href=""></a>Projects
          </li>
          <li>
            <a href=""></a>Speaking
          </li>
          <li>
            <a href=""></a>Contact
          </li>
        </ul>
      </nav>
      {/* lightmode */}
      <label className="ui-switch">
        <input type="checkbox"onClick={() => {
          // send value to ls
          localStorage.setItem("currentMode" , theme === "dark" ? "light":"dark")
          //get value from ls 
          settheme(localStorage.getItem("currentMode"))
        }
        } />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
      {/* endlightmode */}

      {/* burgerlist */}
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                class="button"
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <span class="X"></span>
                <span class="Y"></span>
              </button>
            </li>
            <li>
              <a href=""></a>Home
            </li>
            <li>
              <a href=""></a>Artical
            </li>
            <li>
              <a href=""></a>Projects
            </li>
            <li>
              <a href=""></a>Speaking
            </li>
            <li>
              <a href=""></a>Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
