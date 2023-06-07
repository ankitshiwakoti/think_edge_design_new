import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import who1 from "../../public/assets/who1.jpg";
const Secondsection = () => {
  return (
    <Col xs={12} sm={12} md={6} lg={6}>
      <Row className="mt-3">
        <div style={{ width: "50rem" }}>
          <Image src={who1} alt="image" className="img-fluid " />
        </div>
      </Row>
    </Col>
  );
};

export default Secondsection;
