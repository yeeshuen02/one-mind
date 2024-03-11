import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import "../../scenes/ConsentForm/ConsentForm.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";

function ConsentForm() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const { patientID, name } = location.state;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNextPage = async () => {
    if (isChecked) {
      try {
        // Store consent information in Firebase
        const consentRef = await addDoc(collection(db, "ConsentList"), {
          PatientID: patientID,
          Name: name,
          ConsentDate: serverTimestamp(),
          ConsentGiven: true,
        });

        navigate("/questionnaire", { state: { patientID} });
      } catch (error) {
        console.error("Error adding consent document:", error);
        alert("An error occurred. Please try again later.");
      }
    } else {
      alert("Please agree to consent before proceeding.");
    }
  };

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
          <h1>Consent</h1>
          <h1>Form</h1>
          <p>Permission and Information: Your Consent Matters.</p>
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

          <div className="progress-element-inactive">
            <div className="circle-out-inactive">
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

        <div className="consent-form">
          <h3>Consent for Data Usage</h3>
          <p>
            We are dedicated to improving mental health diagnosis through the
            use of the PHQ-9 (Patient Health Questionnaire-9) and EEG
            recordings. Your participation in allowing the utilisation of your
            data will significantly contribute to the advancement of our
            diagnostic tools for better mental health care.
          </p>

          <p>
            By continuing with this form, you agree to participate in the
            utilisation of your PHQ-9 results and EEG recordings for the
            improvement of our diagnostic tools.
          </p>

          <h4>Understanding and Agreement:</h4>
          <li>
            <strong>Purpose of Data Use: </strong>Your data results will be used
            exclusively to enhance our diagnostic tools for mental health care.
          </li>
          <li>
            <strong>Confidentiality: </strong>All data collected will be treated
            with strict confidentiality. Personal details will be removed and
            replaced with a unique identifier to protect your identity.
          </li>
          <li>
            <strong>Data Protection: </strong>Stringent security measures will
            protect the data stored on our website. Access will be restricted to
            authorised personnel only.
          </li>
          <li>
            <strong>Duration of Data Retention: </strong>Your information will
            be stored securely for an indefinite period unless you decide to
            withdraw your consent, after which all your data will be anonymised
            and kept for improving diagnostic tools.
          </li>

          <h4>By clicking the box below, I acknowledge that:</h4>
          <li>I have read and understood the information provided.</li>
          <li>
            I agree to the use of my PHQ-9 results and EEG recordings to improve
            diagnostic tools for mental health care.
          </li>
          <li>
            I understand that my participation is voluntary, and I retain the
            right to withdraw my consent at any tim
          </li>

          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I consent to the use of my data to improve diagnostic tools for
            OneMind.
          </label>

          <div className="nav-buttons">
            <button className="back" onClick={() => navigate("/addpatient")}>
              Back
            </button>
            <button className="proceed" type="submit" onClick={handleNextPage}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsentForm;
