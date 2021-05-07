import "./App.css";
import { Navbar } from "react-bootstrap";
import Buttons from "./Components/Buttons";
import Forms from "./Components/Form";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Etawah Corona HelpDisk</h1>
      <Buttons />
      <Forms />
    </div>
  );
}

export default App;
