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
  // const [patientID, setPatientID] = useState('');
  // const [patientCounter,setPatientCounter] = useState (100);

  // useEffect(()=>{
  //     const generatedId = generatePatientId();
  //     setPatientId(generatedId);
  // }, [patientCounter]);

  // //the format for ID
  // const generatePatientId = () => {
  //     return `P${patientCounter.toString().padStart(5, '0')}`;
  //   };

  // const addNewPatient = () => {
  //     // Increment the patient counter
  // setPatientCounter((prevCounter) => prevCounter + 1);

  const [patientID, setPatientID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [score, setScore] = useState("");
  const [status, setStatus] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const newPatientRef = await addDoc(collection(db, "PatientList"), {
        PatientID: patientID,
        Name: name,
        Age: age,
        Gender: gender,
        Date: serverTimestamp(),
        Score: score,
        Status: status,
      });

      console.log("Document written with ID: ", newPatientRef.id);
      navigate(-1);
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

      <div>
        <form onSubmit={handleAdd}>
          <h1>Add Patient</h1>

          <div>
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
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
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
          </div>

          <button type="submit">Next</button>
        </form>
      </div>
    </section>
  );
};

export default AddPatient;
