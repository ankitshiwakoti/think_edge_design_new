import React from "react";
import { Container, Row } from "react-bootstrap";
import Firstsection from "./Firstsection";
import Secondsection from "./Secondsection";

const Who = () => {
  return (
    <section className="my-5 py-5">
      <Container className="p-0 ">
        <Row className="who">
          <h2 className=" fw-medium text-uppercase">who we are?</h2>
          <Firstsection />
          <Secondsection />
        </Row>
      </Container>
    </section>
  );
};
export default Who;
