import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import "../../scenes/AddPatients/AddPatients.css";

const AddPatient = () => {
  const navigate = useNavigate();

  const [patientID, setPatientID] = useState("");
  const [patientCounter, setPatientCounter] = useState(100);

  useEffect(() => {
    const generatedId = generatePatientId();
    setPatientID(generatedId);
  }, [patientCounter]);

  //the format for ID
  const generatePatientId = () => {
    return `P${(patientCounter + 1).toString().padStart(5, "0")}`;
  };

  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [score, setScore] = useState("");
  const [status, setStatus] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const newPatientRef = await addDoc(collection(db, "PatientList"), {
        PatientID: patientID,
        Name: name,
        DateofBirth: dob,
        Age: age,
        Gender: gender,
        Occupation: occupation,
        PhoneNumber: phoneNo,
        Date: serverTimestamp(),
        Score: score,
        Status: status,
      });

      console.log("Document written with ID: ", newPatientRef.id);
      navigate("/consent");
    } catch (err) {
      console.log(err);
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
          <h1>Patient</h1>
          <h1>Information</h1>
          <p>
            Input patient information prior to advancing to following section.
          </p>
        </div>
      </div>

      <div className="information-container">
        <div className="progress-indicator">
          {/* <hr className="step-line1" />
          <div className="step-line2" />
          <div className="step-line3" /> */}

          <div className="progress-element-active">
            <div className="circle-out-active">
              <span>1</span>
            </div>
            <p>Patient Information</p>
          </div>

          <div className="progress-element-inactive">
            <div className="circle-out-inactive">
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

        <form className="patient-form" onSubmit={handleAdd}>
          <div className="form-container">
            <div className="input-container">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <label className="placeholder">Name</label>
            </div>

            <div className="input-container">
              <input
                type="date"
                onChange={(e) => setDOB(e.target.value)}
                value={dob}
                required
              />
              <label className="placeholder">Date of Birth</label>
            </div>

            <div className="input-container">
              <label className="placeholder">Age</label>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                required
              />
            </div>

            <div className="input-container">
              <label className="placeholder">Gender</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="input-container">
              <label className="placeholder">Occupation</label>
              <input
                type="text"
                onChange={(e) => setOccupation(e.target.value)}
                value={occupation}
                required
              />
            </div>

            <div className="input-container">
              <label className="placeholder">Phone Number</label>
              <input
                type="text"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
                required
              />
            </div>
          </div>

          {/* <div>
            <input
              type="text"
              placeholder="Patient ID"
              onChange={(e) => setPatientID(e.target.value)}
              value={patientID}
              required
            />
          </div> 

          <div>
            <input
              type="number"
              placeholder="Score"
              onChange={(e) => setScore(e.target.value)}
              value={score}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              required
            />
          </div> */}

          <div className="nav-buttons">
            <button
              className="back"
              type="submit"
              onClick={() => navigate("/homepage")}
            >
              Back
            </button>
            <button className="proceed" type="submit" onSubmit={handleAdd}>
              Proceed
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPatient;
