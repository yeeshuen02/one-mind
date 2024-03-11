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
import Upload from "./scenes/Upload/Upload";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {" "}
        //basename="/app"
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route
          path="/homepage"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/addpatient"
          element={
            <PrivateRoute>
              <AddPatient />
            </PrivateRoute>
          }
        />
        <Route
          path="/consent"
          element={
            <PrivateRoute>
              <ConsentForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/questionnaire"
          element={
            <PrivateRoute>
              <Questionnaire />
            </PrivateRoute>
          }
        />
        <Route
          path="/results"
          element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          }
        />
        <Route
          path="/results/:patientID"
          element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
        <Route
          path="/report"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        />
        <Route
          path="/report/:patientID"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
