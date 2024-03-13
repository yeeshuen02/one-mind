import React, { useEffect, useState, useRef } from "react";
import "./Homebutton.css";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import { useNavigate } from "react-router-dom";




const Homebutton = () => {
    const navigate = useNavigate();


    const navigateHome = () => {
        const isConfirmed = window.confirm(
          "Are you sure you want to proceed to the homepage? The changes madesss will not be saved."
        );
        if (isConfirmed) {
            navigate('/homepage')
        }
      };


  return (
   <div>
        <button className="homepage-home-button">
                <img src={homePageOneMindLogo} onClick={navigateHome} alt="search Logo" />
                <p>OneMind</p>
        </button>
   </div>
  );
};

export default Homebutton;
