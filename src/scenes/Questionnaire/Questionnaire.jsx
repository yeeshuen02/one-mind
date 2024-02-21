import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../scenes/Questionnaire/Questionnaire.css";
import Question from "./Question.jsx";
import { QUESTION } from "./questionData.js";
import homePageOneMindLogo from "../../assets/logo-blue.png";

function Questionnaire() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="hero">
        <div className="top-nav">
          <button className="homepage-home-button">
            <img src={homePageOneMindLogo} alt="Homepage" />
            <p>OneMind</p>
          </button>
        </div>
        <div className="hero-content">
          <h1>PHQ-9</h1>
          <p>Objectify degree of depression severity.</p>
        </div>
      </div>

      <div className="information-container">
        <div className="progress-indicator">
          <div className="progress-element-active">
            <div className="circle-out-active">
              <span>1</span>
            </div>
            <p>Patient Information</p>
          </div>

          <div className="progress-element-active">
            <div className="circle-out-active">
              <span>2</span>
            </div>
            <p>Consent Form</p>
          </div>

          <div className="progress-element-active">
            <div className="circle-out-active">
              <span>3</span>
            </div>
            <p>Questionnaire</p>
          </div>

          <div className="progress-element-inactive">
            <div className="circle-out-inactive">
              <span>4</span>
            </div>
            <p>Upload EEG Recording</p>
          </div>
        </div>
      </div>

      <div className="ques-button-container">
        <>
          {QUESTION.map((question) => (
            <Question key={question.ques} {...question} />
          ))}
        </>

        <div className="nav-buttons">
          <button className="back" onClick={() => navigate("/consent")}>
            Back
          </button>
          <button className="proceed">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Questionnaire;
