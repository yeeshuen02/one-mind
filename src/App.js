import "./App.css";
import LoginContainer from "./scenes/Login/LoginContainer";
import Homepage from "./scenes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/Landing/LandingPage";
import AddPatient from "./scenes/AddPatients/AddPatient";
import ConsentForm from "./scenes/ConsentForm/ConsentForm";
import Questionnaire from "./scenes/Questionnaire/Questionnaire";
import Results from "./scenes/Results/Results";
import Report from "./scenes/Report/Report";

function App() {
  return (
    <Routes basename="/app">
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/addpatient" element={<AddPatient />} />
      <Route path="/consent" element={<ConsentForm />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/results" element={<Results />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default App;
