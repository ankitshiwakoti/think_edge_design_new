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
    <section className="my-5">
      <Container>
        <h2 className="mt-4 fw-normal text-uppercase">design process</h2>
        <Row>
          {data?.map((items, index) => (
            <Col className="p-0 mt-4" xs={12} sm={6} md={6} lg={3} key={index}>
              <div class="designhov shadow card rounded-0 p-0">
                <div class="card-body">
                  <div
                    className="hovsmall bg-primary mt-3 p-3 d-flex justify-content-center align-items-center"
                    style={{ width: "100px", color: "white" }}
                  >
                    <h2 className="">{items.num}</h2>
                  </div>
                  <h3 class=" mt-4 p  ">{items.title}</h3>
                  <p class=" mt-3 p  ">{items.body}</p>
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
