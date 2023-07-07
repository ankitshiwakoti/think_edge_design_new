import React from "react";
import { Container, Row } from "react-bootstrap";
import { data } from "../../ourservices.js";
import Image from "next/image.js";

const Ourservices = () => {
  return (
    <section>
      <Container>
        <h2 className="fw-normal mt-4 pt-5 p-0">OUR SERVICES</h2>
        <div className="ourserviceline "></div>
      </Container>
      <Container fluid className="">
        <Row className="p-0">
          {data?.map((items, index) => (
            <Row>
              <div
                key={items.id}
                className={`col-md-12 mt-5 col-lg-12 gap-4 position-relative ${
                  index % 2 === 0
                    ? "d-sm-flex d-grid flex-row gap-1 "
                    : "d-sm-flex d-grid  flex-row-reverse gap-1"
                }`}
              >
                <div className="col-md-6 col-lg-6"></div>

                <div className="col-md-7 pt-4   col-lg-7 ms-5 p-5 ps-4 mt-1  position-absolute">
                  <Image
                    src={items.image}
                    className="img-fluid"
                    alt="portfolio images"
                    width={0}
                    height={0}
                  />
                </div>
                <div
                  className={`col-md-6 col-lg-6 p-5 ms-5  mb-4 ${
                    index % 2 === 0 ? "pe-0 " : "ps-0"
                  }`}
                  style={{ backgroundColor: "#FFFCF8" }}
                >
                  <div className="p-3 px-5 py-5 ">
                    <h2 className="mb-2"> {items.title}</h2>
                    <p className="ourservicestext  lh-lg">{items.body}</p>
                    <div className="pt-4">
                      {" "}
                      <div className="projectbutton  btn p-2 shadow-sm border border-black border-opacity-25 text-primary rounded-0">
                        <span
                          className="p-2 fw-medium"
                          style={{ fontSize: "16px" }}
                        >
                          {" "}
                          LEARN MORE{" "}
                        </span>
                        <span className="p-1 ps-1">
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Ourservices;
