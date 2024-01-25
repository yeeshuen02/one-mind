import "./App.css";
import LoginContainer from "./scenes/Login/LoginContainer";
import Homepage from "./scenes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes basename="/app">
      <Route path="/" element={<LoginContainer />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
