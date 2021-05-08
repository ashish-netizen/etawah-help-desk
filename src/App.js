import "./App.css";
import { Button, Container, Navbar } from "react-bootstrap";
import Buttons from "./Components/Buttons";
import Forms from "./Components/Form";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="header">
        Etawah Corona HelpDesk
      </h1>
      <br />
      <Container>
        <a href="#" style={{ textDecoration: "none" }}>
          <Button variant="warning" size="lg" block>
            Join us as volunteer
          </Button>
        </a>
      </Container>
      <Buttons />
      <Forms />
      <footer className="footer">
        <h4>Etawah Corona HelpDesk Team</h4>
      </footer>
    </div>
  );
}

export default App;
