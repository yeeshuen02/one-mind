import "./App.css";
import LoginContainer from "./scenes/Login/LoginContainer";
import Homepage from "./scenes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/Landing/LandingPage";
import AddPatient from "./scenes/AddPatients/AddPatient";
import ConsentForm from "./scenes/ConsentForm/ConsentForm";
import Results from "./scenes/Results/Results";

function App() {
  return (
    <Routes basename="/app">
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/addpatient" element={<AddPatient />} />
      <Route path="/consent" element={<ConsentForm />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
