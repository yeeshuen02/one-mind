import React, { useEffect, useState, useRef } from "react";
import "./Homebutton.css";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";



const Homebutton = () => {
    const navigate = useNavigate();


    const navigateHome = () => {
        const isConfirmed = window.confirm(
          "Are you sure you want to proceed to the homepage? The changes made will not be saved."
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
