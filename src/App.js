import "./App.css";
import LoginContainer from "./scenes/Login/LoginContainer";
import Homepage from "./scenes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/Landing/LandingPage";

function App() {
  return (
    <Routes basename="/app">
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
