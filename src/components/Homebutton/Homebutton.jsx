import React, { useEffect, useState, useRef } from "react";
import "./Homebutton.css";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import { useNavigate } from "react-router-dom";

const Homebutton = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/homepage");
  };

  return (
    <div>
      <button className="homepage-home-button" onClick={navigateHome}>
        <img src={homePageOneMindLogo} alt="search Logo" />
        <p>OneMind</p>
      </button>
    </div>
  );
};

export default Homebutton;
