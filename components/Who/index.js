import React from "react";
import { Container, Row } from "react-bootstrap";
import Firstsection from "./Firstsection";
import Secondsection from "./Secondsection";

const Who = () => {
  return (
    <section className="my-5 py-5">
      <Container>
        <Row>
          <h3 className="text-uppercase">who we are?</h3>
          <Firstsection />
          <Secondsection />
        </Row>
      </Container>
    </section>
  );
};
export default Who;
