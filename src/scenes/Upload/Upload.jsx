import React from "react";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import "./Upload.css";
import uploadLogo from "../../assets/Upload.png";




const Upload = () => {
  return (

    
    <div className="upload-page">
        <div className="hero">
        <div className="top-nav">
          <button className="homepage-home-button">
            <img src={homePageOneMindLogo} alt="Homepage" />
            <p>OneMind</p>
          </button>
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
            <button className="browse-file"> Browse File</button>

        </div>
        <div className="upload-right-side">
            <h1>Upload EEG Recordings</h1>
            <p>Select files from device</p>
            <button>
                Upload &rarr;
            </button>
        </div>
    </div>

    </div>

  );
};

export default Upload;
