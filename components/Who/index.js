import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Firstsection from "./Firstsection";
import Secondsection from "./Secondsection";

import whosecond from "../../public/assets/whosecond.png";
import Image from "next/image";
import who1 from "../../public/assets/whofirst1.png";
import who2 from "../../public/assets/whofirst2.png";
import who3 from "../../public/assets/whofirst3.png";

const data = [
  {
    id: 1,
    image: who1,
  },
  {
    id: 2,
    image: who2,
  },
  {
    id: 3,
    image: who3,
  },
];
const Who = () => {
  return (
    <section className="my-5 py-5">
      <Container className="">
        <Row className="">
          <h2 className="p-0 fw-medium text-uppercase">who we are?</h2>
          <Col xs={12} sm={12} md={6} lg={6} className="p-0">
            <div className="mt-4 who">
              <div>
                <p className="">
                  Our exceptional multinational team offers reliable quality
                  services both nationally and internationally. Nature,
                  architecture, design, beauty itself and contemporary art
                  inspires us. And yet, what inspires us the most, is to get
                  know who will live in our homes and to translate their
                  physical and emotional desires into tailored interiors.
                </p>
                <button className=" mt-4 blogbtn whobtn shadow-sm  btn border border-black-subtle rounded-0">
                  GET TO KNOW US
                  <span className="p-2 ">
                    {" "}
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-4 ">
              <div className="d-flex pt-3 mt-2 gap-2">
                {data?.map((items, index) => (
                  <div class=" rounded-0 border-0 " key={index}>
                    <Image src={items.image} class="img-fluid" alt="image" />
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="pe-0">
            <div className="mt-4">
              {/* <Image src={who1} alt="image" className="img-fluid " /> */}
              <Image
                src={whosecond}
                alt="image"
                className="img-fluid"
                // style={{ objectFit: "contain" }}
                style={{ height: "470px", width: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Who;
