import Form1 from "@/components/Form";
import Formcontactp from "@/components/Form/Formcontactp";
import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";

const Contactus = () => {
  return (
    <section>
      <Container fluid>
        <Row className="">
          <div className="p-0 col-md-12  col-lg-12 position-relative">
            <div>
              <Image
                alt="portfolio banner"
                src="/assets/aboutus/Banner1.png"
                className="img-fluid w-100"
                width={1920}
                height={600}
              />
            </div>
            <div
              className="position-absolute  top-50 start-50 translate-middle"
              style={{ color: "white" }}
            >
              <h1>GET IN TOUCH</h1>
            </div>
            <div
              className="position-absolute bottom-0 start-0 mb-3"
              style={{ color: "white" }}
            >
              <h4 className="ms-5 ps-5">Home/Get in touch</h4>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className="col-md-6 col-lg-6"></div>
          <div className="col-md-6 col-lg-6">
            <Formcontactp />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Contactus;
