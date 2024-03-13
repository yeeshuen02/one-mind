import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../scenes/Questionnaire/Questionnaire.css";
import Question from "./Question.jsx";
import { QUESTION } from "./questionData.js";
import Homebuttondelete from "../../components/Homebuttondelete/Homebuttondelete.jsx";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function Questionnaire() {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientID, name } = location.state;
  const [score, setScore] = useState(Array(QUESTION.length).fill(0));
  const [questionCompletion, setQuestionCompletion] = useState(
    Array(QUESTION.length).fill(false)
  );

  const handleOptionSelected = (index, value) => {
    const newScore = [...score];
    newScore[index] = value;
    setScore(newScore);

    const newQuestionCompletion = [...questionCompletion];
    newQuestionCompletion[index] = true;
    setQuestionCompletion(newQuestionCompletion);
  };

  const allQuestionsAnswered = () => {
    return questionCompletion.every((answered) => answered);
  };

  const calculateTotalScore = () => {
    return score.reduce((acc, score) => acc + score, 0);
  };

  const saveAnswersToFirebase = async () => {
    const patientRef = doc(db, "PatientList", patientID);

    try {
      // Update or set the document with answers
      await updateDoc(
        patientRef,
        {
          Answers: score, // Save the entire array of scores as answers
        },
        { merge: true }
      );

      console.log("Answers saved successfully for patientID:", patientID);
    } catch (error) {
      console.error("Error saving answers:", error);
    }
  };

  const handleScore = async () => {
    const totalScore = calculateTotalScore();
    const patientRef = doc(db, "PatientList", patientID);

    try {
      const patientDocSnapshot = await getDoc(patientRef);
      if (allQuestionsAnswered() && patientDocSnapshot.exists) {
        await saveAnswersToFirebase();
        await updateDoc(patientRef, {
          Score: totalScore,
        });
        console.log("Scores updated successfully for patientID:", patientID);
        navigate("/upload", { state: { patientID, name} })
      } else {
        alert("Please answer all questions before submitting.");
      }
    } catch (error) {
      console.error("Error updating scores:", error);
    }
  };

  return (
    <section>
      <div className="hero">
        <div className="top-nav">
          <Homebuttondelete patientID={patientID}/>
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
          {QUESTION.map((question, index) => (
            <Question
              key={question.ques}
              {...question}
              saveOptionselected={(value) => handleOptionSelected(index, value)}
            />
          ))}
        </>

        <div className="nav-buttons">
          <button className="back" onClick={() => navigate("/consent")}>
            Back
          </button>
          <button className="proceed" onClick={handleScore}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Questionnaire;
