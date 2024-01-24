import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import "./App.css";
import LoginContainer from "./components/LoginForm/LoginContainer";

function App() {
  return (
    <div>
      <LoginContainer />
    </div>
  );
}

export default App;
