import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const data = [
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
    body: "A profound design process eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
  {
    id: 3,
    num: "03",
    title: "Execution",
    body: "A profound design process eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
  {
    id: 4,
    num: "04",
    title: "Concept Design",
    body: "A profound design process eventually makes the patron, the architect, and every occasional visitor in the building a slightly better human being.",
  },
];

const Designprocess = () => {
  return (
    <section className="my-5 design">
      <Container className="">
        <Row className="mt-4">
          <h2 className=" mb-3 fw-normal ps-0 text-uppercase">
            design process
          </h2>
          {data?.map((items, index) => (
            <Col className="mt-4 p-0" xs={12} sm={6} md={6} lg={3} key={index}>
              <div
                class="designhov  card border-opacity-25 rounded-0 p-0 "
                data-aos="flip-right"
                data-aos-duration="3000"
                data-aos-once="false"
              >
                <div class="card-body testcolor pb-4">
                  <div
                    className="hovsmall  mt-3 p-1 d-flex justify-content-center align-items-center"
                    style={{
                      width: "100px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <h1 className=" fw-medium">{items.num}</h1>
                  </div>
                  <h3 class=" mt-4 p-2 ps-0 p fw-medium ">{items.title}</h3>
                  <p class=" mt-4 p fw-normal " style={{ color: "#525252" }}>
                    {items.body}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Designprocess;
