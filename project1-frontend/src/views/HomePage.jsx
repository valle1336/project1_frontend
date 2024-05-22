import React from "react";
import "./HomePage.css";
import TMC from "../assets/images/TMC.jpg";

function HomePage() {
  return (
    <>
      <div className="main-div">
        <img src={TMC} alt="Homepage" className="homepage-image" />
        <h1 className="overlay-text">Thor Martinus Constructions</h1>
      </div>
    </>
  );
}

export default HomePage;
