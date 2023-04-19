import React from "react";
import Navbar from "./Navbar";
import bcloc from "../Images/Untitled_Artwork 10.png";
import "./Home.css";
import Heart from "../Images/Untitled_Artwork 8.png";
import Twitter from "../Images/twitter-line.png";
import Facebook from "../Images/facebook-box-line.png";
import Instagram from "../Images/instagram-line.png";
import Flogo from "../Images/Untitled_Artwork 7.png";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="landing-section">
        <img className="landing-img" src={bcloc} />
        <div>
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
      </div>
      <div className="about-section">
        <h2 className="our-history">Our History</h2>
        <div className="about-content">
          <img className="heart" src={Heart} />
          <p className="about-us-story">
            Burritos La Chiquita has a rich history and a passion for authentic
            Mexican cuisine.Our warm and welcoming atmosphere is the perfect
            place to gather with friends and family and enjoy a delicious
            meal.Thank you for choosing to dine with us. We can't wait to serve
            you!
          </p>
        </div>
      </div>
      <div className="location-section">
        <h3 className="location-title">Come Visit Us</h3>
        <div className="location-content">
          <p className="location-time">
            Monday - Saturday : 7am - 8pm
            <br />
            Sunday : Closed
          </p>
          <p className="location-address">
            1328 Minnesota Ave, Kansas City, KS 66102
          </p>
          <p className="location-contact">
            Tel : (913) 291-0118
            <br />
            Email : info@burritoschiquita.com
          </p>
        </div>
        <div className="icons-section">
          <img className="icons" is="t-icon" src={Twitter} />
          <img className="icons" id="i-icon" src={Instagram} />
          <img className="icons" id="f-icon" src={Facebook} />
        </div>
      </div>
      <div className="newsletter-section">
        <h1 className="newsletter-title">Sign Up</h1>
        <h2 className="newsletter-desc">
          Sign up to our Newsletter for Cuiquita Updates
        </h2>
        <div className="form">
          <form>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
          </form>
        </div>
      </div>
      <footer>
        <img className="footer-logo" src={Flogo} />
      </footer>
    </>
  );
}

export default Home;
