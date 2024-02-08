import "./App.css";
import LoginContainer from "./scenes/Login/LoginContainer";
import Homepage from "./scenes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/Landing/LandingPage";
import AddPatient from "./scenes/AddPatients/AddPatient";

function App() {
  return (
    <Routes basename="/app">
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/addpatient" element={<AddPatient />} />
    </Routes>
  );
}

export default App;
