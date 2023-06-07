import React from "react";
import { Container, Row } from "react-bootstrap";
import Firstsection from "./Firstsection";
import Secondsection from "./Secondsection";

const Who = () => {
  return (
    <section className="mt-5 pt-5">
      <Container>
        <Row>
          <h2 className="text-uppercase">who we are?</h2>
          <Firstsection />
          <Secondsection />
        </Row>
      </Container>
    </section>
  );
};
export default Who;
