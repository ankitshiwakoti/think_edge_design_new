import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section
      className=" demo-wrap mt-3 pb-5 pt-5"
      // style={{ position: "absolute", bottom: 0, width: "100%" }}
    >
      <Container className="demo-content">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Row>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt="Logo"
                  width="30"
                  height="50"
                  class="d-inline-block align-text-buttom"
                />
              </div>
              <div className="mt-3">
                <p className="mb-0 fofont">Email us</p>
                <p className="folfont">thinkedgedesign@gmail.com</p>
              </div>
              <div>
                <p className="mb-0 fofont">Call us</p>
                <p className="folfont">(977) 9824977469</p>
              </div>
            </Row>
          </Col>

          <Col className="" xs={12} sm={12} md={5} lg={6}>
            <Row className="d-flex ">
              <div className="col-md-4 ">
                <p className=" fofont">Explore</p>
                <p className="mb-0 folfont pb-1">Home</p>
                <p className="mb-0 pb-1 folfont">About Us</p>
                <p className="mb-0 pb-1 folfont ">Services</p>
                <p className="mb-0 pb-1 folfont">Blogs</p>
                <p className="mb-0 pb-1 folfont">Contact us</p>
              </div>
              <div className="col-md-4 ">
                <p className=" fofont">Privacy</p>
                <p className="mb-0 pb-1 folfont">Terms of use</p>
                <p className="mb-0 pb-1 folfont">Privacy Policy</p>
                <p className="mb-0 pb-1 folfont">Cookie Policy</p>
              </div>
              <div className="col-md-4 ">
                <p className=" fofont ">Projects</p>
                <p className="mb-0 pb-1 folfont">Architecture</p>
                <p className="mb-0 pb-1 folfont">Interior Design</p>
                <p className="mb-0 pb-1 folfont">Residental</p>
                <p className="mb-0 pb-1 folfont">Engineering</p>
              </div>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3}>
            <Row>
              <p className="fofont">Suscribe To Our Newsletter</p>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className=" folfont form-control border border-end-0 "
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Your email address"
                />
                <span
                  className="input-group-text "
                  id="inputGroup-sizing-sm"
                  style={{ backgroundColor: "white" }}
                >
                  <i className="bi bi-arrow-right me-3 "> </i>
                </span>
              </div>

              <div className="d-flex justify-content-start gap-3 pt-3">
                <div className=" ">
                  <span className=" p-2 border border-primary rounded-circle">
                    <i class="bi bi-facebook"></i>
                  </span>
                </div>
                <div className="">
                  <span className=" p-2 border border-primary rounded-circle">
                    <i class="bi bi-linkedin"></i>
                  </span>
                </div>
                <div className="">
                  <span
                    className="p-2  border border-primary rounded-circle "
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    <i class="  bi bi-instagram"></i>
                  </span>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex pb-2  align-items-start">
          <div className="text-start rights">
            Copyright ©{" "}
            <b className="rights m-0 p-0">{new Date().getFullYear()}</b>
            <Link href="/" className=" ms-1 rights">
              Jobrecruitment.com.np
            </Link>{" "}
            ALL RIGHTS RESERVED.
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
