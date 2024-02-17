import React, { useState } from 'react';
import homePageOneMindLogo from "../../assets/logo-blue.png";
import "./Results.css";
import modelIcon from "../../assets/cpu-charge.png";
import clipboardIcon from "../../assets/clipboard-text.png";
import infoCircleIcon from "../../assets/info-circle.png";


import infoCircleBlueIcon from "../../assets/info-circle-blue.png";





const Results = () => {


    
    const [showText, setShowText] = useState(true);

    const handleButtonClick = () => {
      setShowText(false);
    };
    

  return (
    <section className="results-page">
    <div className="hero">
      <div className="top-nav">
        <button className="homepage-home-button">
          <img src={homePageOneMindLogo} alt="Homepage" />
          <p>OneMind</p>
        </button>
      </div>
      <div className="hero-content">
        <h1>Results</h1>
        <p>
        Depression Severity Analysis: Unveiling the Impact 
        </p>
      </div>
    </div>
    <div className="results-bottom-section" >
      <div className="resuts-content">
        <div className="results-content-first">
            <div className="results-profile">
                <p id="patient-id">#P03629</p>
                <p id="patient-name">Allen Matt</p>
                <p id="patient-date">19.07.2023</p>
            </div>
            <div className="results-details">
                <div className="results-details-top-row">
                    <div>
                        <p>Gender</p>
                        <p class="patient-details-content">Male</p>
                    </div>
                    <div>
                        <p>Age</p>
                        <p  class="patient-details-content">12</p>
                    </div>
                    <div>
                        <p>Clinician</p>
                        <p  class="patient-details-content"> Dr Morge</p>
                    </div>
                </div>
                <div className="results-details-bottom-row">
                    <div>
                        <p>Phone Number</p>
                        <p class="patient-details-content">0123829018</p>
                    </div>
                    <div>
                        <p>Occupation</p>
                        <p  class="patient-details-content">Data Analyst</p>
                    </div>
                    <div className="just-special-for-date">
                        <p>Date</p>
                        <p  class="patient-details-content"> 15.09.1929</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="results-content-second">
            <div className="second-row-left-right">
                <img src={modelIcon} alt="search Logo" />
                <p>Model Analysis:</p>
                <div className="text-background"> <p>Healthy</p></div>
            </div>
            <div className="second-row-left-right">
                <img src={clipboardIcon} alt="search Logo" />
                <p>PHQ-9 Severity:</p>
                <div className="text-background"> <p>Dummy</p></div>
            </div>
        </div>
        <div className="results-content-third">

                {showText ? (
                        <div className='before-confirming'>
                            <img src={infoCircleIcon} alt="search Logo" />

                        <p>Please confirm the validity of the results by clicking</p>
                        <button className="results-confirm-button" onClick={handleButtonClick}>
                    here
                </button>
                    </div>
                ) : (
                    <div className='after-confirming'>

                    <img src={infoCircleBlueIcon
} alt="search Logo" />
                    <p>Results has been confirmed</p>
                    {/* Add additional content as needed */}
                    </div>
                )}



            
        </div>
        <div className='results-content-forth'>
            <button className='questionnaire-report-button'>View Questionnaire Report</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Results;
