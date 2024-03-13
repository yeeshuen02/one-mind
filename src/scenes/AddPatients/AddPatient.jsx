import { useState, useEffect } from "react";
import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "../../scenes/AddPatients/AddPatients.css";
import Homebutton from "../../components/Homebutton/Homebutton";

const AddPatient = () => {
  const navigate = useNavigate();

  const [patientID, setPatientID] = useState("");
  const [patientCounter, setPatientCounter] = useState(100);

  useEffect(() => {
    const fetchPatientCounter = async () => {
      try {
        const counterDocRef = doc(db, "PatientList", "PatientID");
        const counterDocSnapshot = await getDoc(counterDocRef);

        if (counterDocSnapshot.exists()) {
          const counterValue = counterDocSnapshot.data().value;
          setPatientCounter(counterValue);
        } else {
          await setDoc(counterDocRef, { value: 100 });
        }
      } catch (error) {
        console.error("Error fetching patient counter:", error);
      }
    };

    fetchPatientCounter();
  }, []);

  useEffect(() => {
    const generatedId = generatePatientId();
    setPatientID(generatedId);
  }, [patientCounter]);

  // Updated ID generation logic
  const generatePatientId = () => {
    const incrementedCounter = patientCounter + 1;
    return `P${incrementedCounter.toString().padStart(5, "0")}`;
  };

  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [score, setScore] = useState("");
  const [modelAnalysis, setModelAnalysis] = useState("");
  const [status, setStatus] = useState("In Review");
  
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const newPatientRef = doc(db, "PatientList", patientID);
      await setDoc(newPatientRef, {
        PatientID: patientID,
        Name: name,
        DateofBirth: dob,
        Age: age,
        Gender: gender,
        Occupation: occupation,
        PhoneNumber: phoneNo,
        Date: serverTimestamp(),
        Score: score,
        ModelAnalysis: modelAnalysis,
        Status: status,
      });
      console.log("Patient ID:", patientID);
      const counterDocRef = doc(db, "PatientList", "PatientID");
      await setDoc(counterDocRef, { value: patientCounter + 1 });

      setPatientCounter((prevCounter) => prevCounter + 1);
      navigate("/consent", { state: { patientID: newPatientRef.id, name } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className="hero">
        <div className="top-nav">
          <Homebutton/>
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
                min={10}
                max={100}
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
                type="tel"
                pattern="01\d-\d{7}|01\d-\d{8}"
                placeholder="012-3456789"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
                required
              />
            </div>
          </div>

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
