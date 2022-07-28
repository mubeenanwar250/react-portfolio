import React from "react";
import "./intro.css";
import Me from "../../img/sun.png"

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Rayan khan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
          <div className="i-title-item">
            Web Developer
            </div>       
          <div className="i-title-item">
            UI/UX Designer
            </div>       
          <div className="i-title-item">
            Photograper
            </div>       
          <div className="i-title-item">
            Writer
            </div>       
            </div>
          </div>
          <div className="i-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quas beatae quos earum eveniet, incidunt aperiam recusandae rem necessitatibus quam labore quod voluptate nam debitis voluptatum maiores voluptas eos facilis!</div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
         </div>
    </div>
  );
}

export default Intro;
