import React, { useEffect, useState } from "react";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import "./Results.css";
import modelIcon from "../../assets/cpu-charge.png";
import clipboardIcon from "../../assets/clipboard-text.png";
import infoCircleIcon from "../../assets/info-circle.png";
import { db } from "../../config/firebase";
import infoCircleBlueIcon from "../../assets/info-circle-blue.png";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Results = () => {
  const navigate = useNavigate();
  let { patientID } = useParams();
  const [showText, setShowText] = useState(true);
  const [patientDetails, setPatientDetails] = useState({});

  const handleButtonClick = async () => {
    const userConfirmed = window.confirm(
      "Please confirm the validity of the diagnosis by entering the patient ID and diagnosis confirmation."
    );

    if (userConfirmed) {
      const patientIdInput = prompt("Enter the patient ID:");
      const resultConfirmation = prompt(
        "Enter 'positive' or 'negative' to confirm the diagnosis:"
      );

      // Check if the entered patient ID matches the actual patient ID
      if (patientIdInput === patientDetails.PatientID) {
        try {
          const response = await fetch(
            `/api/confirmDiagnosis?patient_id=${patientIdInput}&diagnosis=${resultConfirmation}`,
            {
              method: "POST",
            }
          );

          if (response.ok) {
            console.log("Diagnosis confirmed successfully");
            setShowText(false);
            await updateDoc(doc(db, "PatientList", patientID), {
              Status: "Diagnosed",
            });
          } else {
            const errorMessage = await response.text();
            console.error("Error confirming diagnosis:", errorMessage);
          }
        } catch (error) {
          console.error("Error confirming diagnosis:", error);
        }
      } else {
        alert("Patient ID does not match. Please try again.");
      }
    }
  };

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const patientRef = doc(db, "PatientList", patientID);

      try {
        const patientDetailsSnapshot = await getDoc(patientRef);

        if (patientDetailsSnapshot.exists) {
          const patientDetailsData = patientDetailsSnapshot.data();
          setPatientDetails(patientDetailsData);
        } else {
          console.error("Patient details not found");
        }
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };

    //to make all status in sync
    const fetchConfirmationStatus = async () => {
      const patientRef = doc(db, "PatientList", patientID);

      try {
        const patientSnapshot = await getDoc(patientRef);

        if (patientSnapshot.exists) {
          const confirmationStatus = patientSnapshot.data()?.Status;

          if (confirmationStatus === "Diagnosed") {
            setShowText(false);
          }
        }
      } catch (error) {
        console.error("Error fetching confirmation status:", error);
      }
    };

    fetchConfirmationStatus();
    fetchPatientDetails();
  }, [patientID]);

  //severity based on score
  const calculateSeverity = (score) => {
    if (score >= 0 && score <= 4) {
      return "None-minimal";
    } else if (score >= 5 && score <= 9) {
      return "Mild";
    } else if (score >= 10 && score <= 14) {
      return "Moderate";
    } else if (score >= 15 && score <= 19) {
      return "Moderately Severe";
    } else if (score >= 20 && score <= 27) {
      return "Severe";
    } else {
      return "Unknown";
    }
  };

  return (
    <section className="results-page">
      <div className="hero-result">
        <div className="top-nav">
          <button
            className="homepage-home-button"
            onClick={() => navigate("/homepage")}
          >
            <img src={homePageOneMindLogo} alt="Homepage" />
            <p>OneMind</p>
          </button>
        </div>

        <div className="hero-content">
          <h1>Results</h1>
          <p>Depression Severity Analysis: Unveiling the Impact</p>
        </div>
      </div>

      <div className="results-bottom-section">
        <div className="resuts-content">
          <div className="results-content-first">
            <div className="results-profile">
              <p id="patient-id">{patientDetails.PatientID}</p>
              <p id="patient-name">{patientDetails.Name}</p>
              <p id="patient-date">{patientDetails.DateofBirth}</p>
            </div>

            <div className="results-details">
              <div className="results-details-top-row">
                <div className="results-gender">
                  <p>Gender</p>
                  <p className="patient-details-content">
                    {patientDetails.Gender}
                  </p>
                </div>
                <div className="results-age">
                  <p>Age</p>
                  <p className="patient-details-content">
                    {patientDetails.Age}
                  </p>
                </div>
                <div className="results-clinician">
                  <p>Clinician</p>
                  <p className="patient-details-content"> Dr Morge</p>
                </div>
              </div>
              <div className="results-details-bottom-row">
                <div className="results-phone">
                  <p>Phone Number</p>
                  <p className="patient-details-content">
                    {patientDetails.PhoneNumber}
                  </p>
                </div>
                <div className="results-occupation">
                  <p>Occupation</p>
                  <p className="patient-details-content">
                    {patientDetails.Occupation}
                  </p>
                </div>
                <div className="just-special-for-date">
                  <p>Date</p>
                  <p className="patient-details-content">
                    {patientDetails.Date
                      ? new Date(
                          patientDetails.Date.toMillis()
                        ).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="results-content-second">
            <div className="second-row-left-right">
              <img className="results-icon" src={modelIcon} alt="search Logo" />
              <p>Model Analysis:</p>
              <div className="text-background">
                {" "}
                <p>{patientDetails.ModelAnalysis}</p>
              </div>
            </div>
            <div className="second-row-left-right">
              <img
                className="results-icon"
                src={clipboardIcon}
                alt="search Logo"
              />
              <p>PHQ-9 Severity:</p>
              <div className="text-background">
                {" "}
                <p>{calculateSeverity(patientDetails?.Score || 0)}</p>
              </div>
            </div>
          </div>

          <div className="results-content-third">
            {showText ? (
              <div className="before-confirming">
                <img src={infoCircleIcon} alt="search Logo" />

                <p>Please confirm the validity of the diagnosis by clicking</p>
                <button
                  className="results-confirm-button"
                  onClick={handleButtonClick}
                >
                  here
                </button>
              </div>
            ) : (
              <div className="after-confirming">
                <img src={infoCircleBlueIcon} alt="search Logo" />
                <p>Diagnosis has been confirmed</p>
              </div>
            )}
          </div>
          <div className="results-content-forth">
            <button
              className="questionnaire-report-button"
              onClick={() => navigate(`/report/${patientID}`)}
            >
              View Questionnaire Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
