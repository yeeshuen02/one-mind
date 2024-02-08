import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import {doc, setDoc, collection, addDoc,serverTimestamp} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";



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
    
    const [patientID, setPatientID] = useState('');
    const [name,setName] = useState ('');
    const [age,setAge] = useState ('');
    const [dob,setDob] = useState ('');
    const [phone,setPhone] = useState ('');
    const [gender,setGender] = useState ('');
    const [score,setScore] = useState ('');
    const [occupation,setOccupation] = useState ('');
    const [status,setStatus] = useState ('');
    const timeStamp = serverTimestamp();

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const newPatientRef = await addDoc(collection(db, "PatientList"), {
                PatientID: patientID,
                Name: name,
                Age: age,
                DOB: dob,
                Gender: gender,
                Occupation: occupation,
                Phone: phone,
                Date: timeStamp, //work on this
                Status: status,
              });
            
            console.log("Document written with ID: ", newPatientRef.id);
            navigate(-1);
        
        } catch (err) {
          console.log(err);
        }
      };


    return (
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
                    type="date"
                    placeholder="Date of Birth"
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                    required
                />
                </div>

                <div>
                <input
                    type="number"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                    type="text"
                    placeholder="Occupation"
                    onChange={(e) => setOccupation(e.target.value)}
                    value={occupation}
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
    )
}

export default AddPatient
