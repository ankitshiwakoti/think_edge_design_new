import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="bg-light ">
      <Container>
        <Row style={{ color: "black" }}>
          <h2>Contact Us</h2>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <p
                style={{
                  fontWeight: "200",
                  fontSmooth: "4px",
                  fontSize: "21px",
                }}
              >
                Have a projects?
              </p>
              <h4 style={{ fontWeight: "normal" }}>ssssss</h4>
            </div>
            <div>
              <h4 style={{ fontWeight: "normal" }}> Email us</h4>
              <p>thinkedgedesign@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
