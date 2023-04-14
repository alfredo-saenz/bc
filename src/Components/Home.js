import React from "react";
import Navbar from "./Navbar";
import bcloc from "../Images/Untitled_Artwork 6.png";
import "./Home.css";
import Heart from '../Images/Untitled_Artwork 8.png'

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="landing-section">
        <img className="landing-img" src={bcloc} />
        <h1 className="welcome">Welcome To Burritos Chiquita</h1>
        <div className="btn-group">
          <button className="landing-btn" id="landing-btn1">
            Delivery
          </button>
          <button className="landing-btn" id="landing-btn2">
            Pick Up
          </button>
        </div>
      </div>
      <div className="about-section">
        <h2 className="our-history">Our History</h2>
        <p className="about-us-story">
          Welcome to Burritos Chiquita, the best Mexican restaurant in Kansas
          City! Since our establishment in 2008, we have been dedicated to
          providing our customers with an authentic taste of Mexico that you
          won't find anywhere else. At Burritos Chiquita, we are committed to
          using only the freshest and highest-quality ingredients in all of our
          dishes. Our menu features a wide variety of classic Mexican favorites,
          including burritos, tacos, tortas, and more. So whether you're joining
          us for a special occasion or just a casual night out, we invite you to
          experience the best Mexican cuisine in Kansas City at Burritos
          Chiquita.
        </p>
        <img className="heart" src={Heart}/>
      </div>
    </>
  );
}

export default Home;
