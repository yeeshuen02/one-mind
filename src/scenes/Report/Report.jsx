import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Homebutton from "../../components/Homebutton/Homebutton";
import personalCard from "../../assets/personalcard.png";
import patientId from "../../assets/patientid.png";
import "../Report/Report.css";

const Report = () => {
  const navigate = useNavigate();
  let { patientID } = useParams();
  console.log("Patient ID:", patientID);
  const [patientDetails, setPatientDetails] = useState({});
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false); // Set loading to false when data fetching completes
      }
    };

    fetchPatientDetails();
  }, [patientID]);

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

  const getSelection = (answer) => {
    if (answer == 0) {
      return "Not at all";
    } else if (answer == 1) {
      return "Several days";
    } else if (answer == 2) {
      return "More than half the days";
    } else if (answer == 3) {
      return "Nearly every day";
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Return a loading indicator
  }

  return (
    <section>
      <div className="hero-result">
        <div className="top-nav">
          <Homebutton/>

        </div>
        <div className="hero-content-result">
          <h1>Result</h1>
          <div className="patient-info-result">
            <div className="info-result-item">
              <img src={personalCard} alt="Name" />
              <p>{patientDetails.Name}</p>
            </div>
            <div className="info-result-item">
              <img src={patientId} alt="Patient ID" />
              <p>{patientDetails.PatientID}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="phq-title">
        <h1>PHQ-9</h1>
        <p>
          Total Score: {patientDetails.Score} [
          {calculateSeverity(patientDetails?.Score || 0)}]
        </p>
      </div>

      <div className="report-container">
        <div className="report-question-box">
          <p>Little interest or pleasure in doing things?</p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[0])}
            </li>
            <li>Score: {patientDetails.Answers[0]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>Feeling down, depressed, or hopeless?</p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[1])}
            </li>
            <li>Score: {patientDetails.Answers[1]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>Trouble falling or staying asleep, or sleeping too much?</p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[2])}
            </li>
            <li>Score: {patientDetails.Answers[2]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>Feeling tired or having little energy?</p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[3])}
            </li>
            <li>Score: {patientDetails.Answers[3]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>Poor appetite or overeating?</p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[4])}
            </li>
            <li>Score: {patientDetails.Answers[4]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>
            Feeling bad about yourself — or that you are a failure or have let
            yourself or your family down?
          </p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[5])}
            </li>
            <li>Score: {patientDetails.Answers[5]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>
            Trouble concentrating on things, such as reading the newspaper or
            watching television?
          </p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[6])}
            </li>
            <li>Score: {patientDetails.Answers[6]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>
            Moving or speaking so slowly that other people could have noticed?
            Or so fidgety or restless that you have been moving a lot more than
            usual?
          </p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[7])}
            </li>
            <li>Score: {patientDetails.Answers[7]}</li>
          </div>
        </div>

        <div className="report-question-box">
          <p>
            Thoughts that you would be better off dead, or thoughts of hurting
            yourself in some way?
          </p>
          <div className="answer-container">
            <li className="ans-text">
              {getSelection(patientDetails?.Answers[8])}
            </li>
            <li>Score: {patientDetails.Answers[8]}</li>
          </div>
        </div>

        <button
          className="back-result"
          onClick={() => navigate(`/results/${patientID}`)}
        >
          Back to Result
        </button>
      </div>
    </section>
  );
};

export default Report;
