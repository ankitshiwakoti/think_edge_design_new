import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import who1 from "../../public/assets/whosecond.png";
const Secondsection = () => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} className="pe-0">
      <div className="mt-3">
        {/* <Image src={who1} alt="image" className="img-fluid " /> */}
        <Image
          src={who1}
          alt="image"
          className="img-fluid"
          // style={{ height: "73vh", width: "100%" }}
        />
      </div>
    </Col>
  );
};

export default Secondsection;
