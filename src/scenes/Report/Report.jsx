import React from "react";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import personalCard from "../../assets/personalcard.png";
import patientId from "../../assets/patientid.png";
import "../Report/Report.css";
// import ReportAnswer from "./ReportAnswer";
// import { REPORT } from "./reportData.js";

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

      <div className="report-container">
        <div className="report-question-box">
          <p>Little interest or pleasure in doing things?</p>
          <div className="answer-container">
            <li className="ans-text">Several days</li>
            <li>Score: +1</li>
          </div>
        </div>
        <div className="report-question-box">
          <p>
            Moving or speaking so slowly that other people could have noticed?
            Or so fidgety or restless that you have been moving a lot more than
            usual?
          </p>
          <div className="answer-container">
            <li className="ans-text">Several days</li>
            <li>Score: +1</li>
          </div>
        </div>
        {/* <>
          {REPORT.map((report, index) => (
            <ReportAnswer key={report.ques} {...report} />
          ))}
        </> */}
      </div>
    </section>
  );
};

export default Report;
