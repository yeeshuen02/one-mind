import "./Profile.css";
import clinicianImg from "../../assets/profile.png";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile({ show, onClose }) {
  return (
    <div className={show ? "profile open" : "profile close"}>
      <div className="profile-container">
        <button className="close-button" onClick={onClose}>
          <CloseIcon style={{ fill: "#93939A" }} />
        </button>
        <div className="profile-header">
          <img src={clinicianImg} alt="" />
          <p>Emily Bauere</p>
        </div>
        <div className="profile-content-container">
          <div className="profile-content">
            <div className="profile-details">
              <p>Clinician ID:</p>
              <h3>C039283</h3>
            </div>
            <div className="profile-details">
              <p>Gender:</p>
              <h3>Female</h3>
            </div>
            <div className="profile-details">
              <p>Age:</p>
              <h3>45</h3>
            </div>
            <div className="profile-details">
              <p>Email:</p>
              <h3>emilybauere@onemind.com</h3>
            </div>
            <div className="profile-details">
              <p>Phone No:</p>
              <h3>012-8786655</h3>
            </div>
          </div>

          <div className="logout">
            <LogoutIcon style={{ fill: "#fff" }} />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
