import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/1234.jpg";
import '../styles/Home.css'


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> FoodCorner </h1>
        <p>ORDER AT A CLICK</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
