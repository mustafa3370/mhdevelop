import React, { useState } from "react";
import "./Main.css";
import { myProjects } from './myprojects';
function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [Arr, setArr] = useState(myProjects);
  return (
    <main className="flex">
      <section className=" left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects)
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All project
        </button>
        <button
          onClick={() => {
            setcurrentActive("ecommerce");
            const newArr = myProjects.filter((item) => {
              return item.category === "ecommerce";
            });
            setArr(newArr);
          }}
          className={currentActive === "ecommerce" ? "active" : null}
        >
          E-commerce
        </button>
        <button
          onClick={() => {
            setcurrentActive("portfolio");
            const newArr = myProjects.filter((item) => {
              return item.category === "portfolio"
            });
             setArr(newArr);
          }}
          className={currentActive === "portfolio" ? "active" : null}
        >
          portfolio
        </button>
        <button
          onClick={() => {
            setcurrentActive("show");
              const newArr = myProjects.filter((item) => {
              return item.category === "show"
              });
              setArr(newArr);
          }}
          className={currentActive === "show" ? "active" : null}
        >
          show
        </button>
      </section>

      <section className="flex right-section">
        {Arr.map((item) => {
          return (
            <article key={item.imgPath} className=" card">
             <img src={item.imgPath} alt="" width={266} />
              <div className="box" style={{ width: "266px" }}>
                <h1 className="title">{item.protitle}</h1>
                <p className="sub-title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate unde optio accusamus, quasi assumenda eius
                  exercitationem repellendus quisquam consectetur ut.
                </p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <div className="icon-link">
                      <i class="fa-solid fa-link "></i>
                    </div>
                    <div className="icon-gitHub">
                      <i class="fa-brands fa-github "></i>
                    </div>
                  </div>
                  <div class="heart-container" title="Like">
                    <input
                      type="checkbox"
                      class="checkbox"
                      id="Give-It-An-Id"
                    />
                    <div class="svg-container">
                      <svg
                        viewBox="0 0 24 24"
                        class="svg-outline"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        class="svg-filled"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        class="svg-celebrate"
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
