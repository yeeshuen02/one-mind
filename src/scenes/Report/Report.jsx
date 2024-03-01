import React from "react";
import homePageOneMindLogo from "../../assets/logo-blue.png";
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
        <div className="hero-content">
          <h1>Result</h1>
          <p>Name</p>
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
