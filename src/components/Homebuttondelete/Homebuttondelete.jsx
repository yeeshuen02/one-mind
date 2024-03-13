import React, { useState } from "react";
import homePageOneMindLogo from "../../assets/logo-blue.png";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Homebuttondelete = ({ patientID }) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const decrementCounter = async () => {
    try {
      // Retrieve the current counter value
      const counterDocRef = doc(db, "PatientList", "PatientID");
      const counterDocSnapshot = await getDoc(counterDocRef);

      if (counterDocSnapshot.exists()) {
        const counterValue = counterDocSnapshot.data().value;

        // Decrement the counter
        await setDoc(counterDocRef, { value: counterValue - 1 });
      }
    } catch (error) {
      console.error("Error decrementing patient counter:", error);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);
      await deleteDoc(doc(db, "PatientList", patientID));
      await decrementCounter();
      setIsDeleting(false);
      // Continue with the navigation to the homepage after deletion
    } catch (err) {
      console.error(err);
      setIsDeleting(false);
    }
  };

  const navigateHome = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to proceed to the homepage? Your changes will not be saved, and your data will be deleted."
    );

    if (isConfirmed) {
      // Call the handleDelete function only if the user confirms
      handleDelete();
      navigate("/homepage");
    }
  };

  return (
    <div>
      <button className="homepage-home-button" onClick={navigateHome}>
        <img src={homePageOneMindLogo} alt="OneMind Logo" />
        <p>OneMind</p>
      </button>
    </div>
  );
};

export default Homebuttondelete;
