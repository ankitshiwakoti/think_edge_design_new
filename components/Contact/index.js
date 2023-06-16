import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Form from "../Form";

const Contact = () => {
  return (
    <section className="" style={{ backgroundColor: "#343131" }}>
      <Container>
        <h2 className="pt-5" style={{ color: "white" }}>
          Contact us
        </h2>
        <Row
          className="d-flex  justify-content-between"
          style={{ color: "white" }}
        >
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <h3 className="fofn mb-0">Have a projects?</h3>
              <h3 className="fofn">Lets make great things!</h3>
            </div>
            <div>
              <p className="fophead mb-0"> Email us</p>
              <p className="fobbody">thinkedgedesign@gmail.com</p>
            </div>
            <div>
              <p className="fophead mb-0"> Call us</p>
              <p className="fobbody">(456)45897136</p>
            </div>
            <div>
              <p className="fophead mb-0"> Address</p>
              <p className="fobbody">
                290 Maryam Springs, 260, Sydney, Australia
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="pt-4">
              <Form />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
