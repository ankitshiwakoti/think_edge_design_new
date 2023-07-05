import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../public/assets/Contactbg.png";

import Form from "../Form";

const Contact = () => {
  return (
    <section
      className="contact"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Container className="">
        <Row className="d-flex pt-5 justify-content-between">
          <h2
            className=" ps-lg-0 ps-md-0 ps-2 fw-normal text-uppercase"
            style={{ color: "#212121" }}
          >
            Contact us
          </h2>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="p-md-0 p-lg-0"
            data-aos="fade-right"
            data-aos-easing="liner"
            data-aos-duration="2000"
          >
            <div className="mt-5 fw-light" style={{ color: "#525252" }}>
              <h2 className=" mb-0 fw-light " style={{ color: "#525252" }}>
                Have a projects?
              </h2>
              <h2 className="fw-light">Lets make great things!</h2>
            </div>
            <div className="mt-5">
              <h4 className="fw-medium mb-0"> Email us</h4>
              <p className="fw-normal">thinkedgedesign@gmail.com</p>
            </div>
            <div>
              <h4 className="fw-medium mb-0"> Call us</h4>
              <p className="">(456)45897136</p>
            </div>
            <div>
              <h4 className=" mb-0"> Address</h4>
              <p className="">290 Maryam Springs, 260, Sydney, Australia</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div
              className="pt-2 pb-5 ps-0 p-3"
              // data-aos="fade-left"
              // data-aos-easing="liner"
              // data-aos-duration="2000"
            >
              <Form />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
