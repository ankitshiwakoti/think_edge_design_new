import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../public/assets/Designprocessbg.png";

const design = [
  {
    id: 1,
    num: "01",
    title: "Concept Design",
    body: "A profound design process eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
  {
    id: 2,
    num: "02",
    title: "Client Discussion",
    body: "the Client is somthing eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
  {
    id: 3,
    num: "03",
    title: "Execution",
    body: "A man is somthing you will eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
  {
    id: 4,
    num: "04",
    title: "Concept",
    body: "A profound design process eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
];

const Design = () => {
  const [active, setActive] = useState(design[0].title);
  const [cbody, setBody] = useState(design[0].body);
  return (
    <section
      className="py-5"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Container fluid>
        <Container className="p-0">
          <Row className="py-4">
            <div className="pb-5">
              <h2 className="text-white">Design Process</h2>
              <div className="designline"></div>
            </div>
            {design?.map((items, index) => (
              <Col xs={12} sm={6} md={6} lg={3} key={index} className="">
                <div
                  class=""
                  className={`card py-5 text-center rounded-0 ${
                    active === items.title
                      ? "bg-designactive text-white "
                      : "bg-designnonactive"
                  }`}
                  //   style={{ color: "#FFFEFE" }}
                  onClick={() => {
                    setActive(items?.title), setBody(items?.body);
                  }}
                >
                  <h3 className="">{items.title}</h3>
                </div>
              </Col>
            ))}
            <Col xs={12} sm={12} md={12} lg={12} className=" py-4 ">
              <div>
                <hr className="text-white" style={{ height: "10px" }} />
              </div>
              <div className="text-center">
                <h4 className="fw-normal text-white">{cbody}</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Design;
