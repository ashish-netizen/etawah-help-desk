import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import oxygen from "../assets/oxygen-tank.png";
import blood from "../assets/blood.png";
import plasma from "../assets/blood-donation.png";
import medicines from "../assets/vitamin.png";
import doctor from "../assets/doctor.png";
import beds from "../assets/hospital-bed.png";
import vaccine from "../assets/syringe.png";
import food from "../assets/diet.png";
import volunteer from "../assets/solidarity.png";

const Buttons = () => {
  return (
    <div>
      <Container
        style={{ marginTop: "25px", textAlign: "center", alignItems: "center" }}
        className="shadow-sm p-3 mb-5 bg-white rounded"
      >
        <h2>Find Help in Etawah</h2>
        <br />
        <Row
          style={{
            alignItems: "center",
          }}
        >
          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={oxygen}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <br />
              <h3>Oxygen Cylinder</h3>
            </a>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={blood}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Blood</h3>
            </a>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={plasma}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Plasma</h3>
            </a>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="https://docs.google.com/spreadsheets/d/1pxF6avP5Fa21ZrYqLjgTDg1uX0N8oD6yhndxzVDRLBk/edit?usp=sharing">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={medicines}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Medicines</h3>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="https://docs.google.com/spreadsheets/d/1s0_4kjEuBgoC2fVu36qS5DqoyKJifuJUCkZVI6YJbMA/edit?usp=sharing">
              <div>
                <Button
                  variant="outline-danger"
                  style={{ borderRadius: "50%", border: "none", margin: "5px" }}
                >
                  <img
                    src={doctor}
                    alt="Oxygen Cylinder"
                    width="175"
                    height="175"
                  />
                </Button>
                <h3>Free Doctor Assistance</h3>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={beds}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Hospital Beds</h3>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={volunteer}
                  alt="Volunteers"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Volunteers list</h3>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={vaccine}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Vaccination center</h3>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <a href="#">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={food}
                  alt="Oxygen Cylinder"
                  width="175"
                  height="175"
                />
              </Button>
              <h3>Free Food Service</h3>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
