import React from "react";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import personalCard from "../../assets/personalcard.png";
import patientId from "../../assets/patientid.png";
import "../Report/Report.css";

const Report = () => {
  return (
    <section>
      <div className="hero-result">
        <div className="top-nav">
          <button className="homepage-home-button">
            <img src={homePageOneMindLogo} alt="Homepage" />
            <p>OneMind</p>
          </button>
        </div>
        <div className="hero-content-result">
          <h1>Result</h1>
          <div className="patient-info-result">
            <div className="info-result-item">
              <img src={personalCard} alt="Name" />
              <p>Allen Matt</p>
            </div>
            <div className="info-result-item">
              <img src={patientId} alt="Patient ID" />
              <p>P123456</p>
            </div>
          </div>
        </div>
      </div>

      <div className="phq-title">
        <h1>PHQ-9</h1>
        <p>Total Score: 2 [Non-Minimal]</p>
      </div>
    </section>
  );
};

export default Report;
