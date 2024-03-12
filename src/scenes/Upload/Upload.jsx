import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Homebutton from "../../components/Homebutton/Homebutton";
import "./Upload.css";
import uploadLogo from "../../assets/Upload.png";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Upload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientID } = location.state;
  const [selectedFile, setSelectedFile] = useState(null);
  const [modelAnalysis, setModelAnalysis] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      //using the api to upload file
      const formData = new FormData();
      formData.append("file", selectedFile);

      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log("Server Response:", data);

          //save prediction result to firebase
          const { result_class } = data;
          saveResultToFirebase(patientID, result_class);
          
          setTimeout(() => {
            navigate(`/results/${patientID}`);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  //save result_class in firebase function
  const saveResultToFirebase = async (patientID, result_class) => {
    const patientRef = doc (db, "PatientList", patientID);

    try{
      await updateDoc(
        patientRef,
        {
          ModelAnalysis: result_class,
        },
        { merge: true }
        );
        console.log("Result class saved successfully for patientID:", patientID);
    } catch (error) {
        console.error("Error saving result class:", error);
    }
  };

  return (
    <div className="upload-page">
      <div className="hero">
        <div className="top-nav">
          <Homebutton/>

        </div>
        <div className="hero-content">
          <h1>Upload EEG</h1>
          <h1>Recordings</h1>
          <p>OneMind supports EEG recording</p>
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

          <div className="progress-element-active">
            <div className="circle-out-active">
              <span>4</span>
            </div>
            <p>Upload EEG Recording</p>
          </div>
        </div>
      </div>
      <div className="upload-section">
        <div className="drag-drop">
          <img src={uploadLogo} alt="Homepage" />
          <p>Drag & Drop</p>
          <p className="or-text">OR</p>
          <label className="browse-file">
            {" "}
            Browse File
            <input
              type="file"
              accept=".edf"
              id="edfFile"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="upload-right-side">
          <h1>Upload EEG Recordings</h1>
          <p>Select files from device</p>
          <button onClick={handleUpload}>Upload &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;