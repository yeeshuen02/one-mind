import "./Profile.css";
import clinicianImg from "../../assets/profile.png";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile({ show, onClose }) {
  const navigate = useNavigate();
  const [clinicianDetails, setClinicianDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Get the UID of the logged-in user
        const uid = user.uid;

        // Fetch user details from Firestore
        const clinicianRef = doc(db, "ClinicianList", uid);

        try {
          const clinicianDetailsSnapshot = await getDoc(clinicianRef);

          if (clinicianDetailsSnapshot.exists) {
            const clinicianDetailsData = clinicianDetailsSnapshot.data();
            setClinicianDetails(clinicianDetailsData);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error getting document:", error);
        } finally {
          setLoading(false); // Set loading to false when data fetching completes
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = async () => {
    const confirmLogOut = window.confirm("Are you sure you want to Log Out?");

    if (confirmLogOut) {
      navigate("/login", { replace: true });
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Return a loading indicator
  }

  return (
    <div className={show ? "profile open" : "profile close"}>
      <div className="profile-container">
        <button className="close-button" onClick={onClose}>
          <CloseIcon style={{ fill: "#93939A" }} />
        </button>
        <div className="profile-header">
          <img src={clinicianImg} alt="" />
          <p>{clinicianDetails.Name}</p>
        </div>
        <div className="profile-content-container">
          <div className="profile-content">
            <div className="profile-details">
              <p>Clinician ID:</p>
              <h3>{clinicianDetails.ClinicianID}</h3>
            </div>
            <div className="profile-details">
              <p>Gender:</p>
              <h3>{clinicianDetails.Gender}</h3>
            </div>
            <div className="profile-details">
              <p>Age:</p>
              <h3>{clinicianDetails.Age}</h3>
            </div>
            <div className="profile-details">
              <p>Email:</p>
              <h3>{clinicianDetails.Email}</h3>
            </div>
            <div className="profile-details">
              <p>Phone No:</p>
              <h3>{clinicianDetails.PhoneNo}</h3>
            </div>
          </div>

          <button className="logout" onClick={handleLogOut}>
            <LogoutIcon style={{ fill: "#fff" }} />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
