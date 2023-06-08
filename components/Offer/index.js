import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import who1 from "../../public/assets/who1.jpg";
import who2 from "../../public/assets/who2.jpg";
import who3 from "../../public/assets/who3.jpg";
import who4 from "../../public/assets/whosecond.jpg";

const data = [
  {
    id: 1,
    title: "BIM MODELING",
    image: who1,
  },
  {
    id: 2,
    title: "AutoCAD Drafting",
    image: who2,
  },
  {
    id: 3,
    title: "Interior Design",
    image: who3,
  },
  {
    id: 4,
    title: "2D & 3D Modelling",
    image: who4,
  },
  {
    id: 5,
    title: "Landscape Conecpt",
    image: who1,
  },
  {
    id: 6,
    title: "Estimation Stratragic Resource planning",
    image: who2,
  },
];

const Offer = () => {
  const [active, setActive] = useState(data[0]?.image);
  const [activetitle, setActivetitle] = useState(data[0]?.title);
  return (
    <section className="mt-5 pt-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <h2 className="mb-4">What We Offer</h2>
            {data?.map((items, index) => (
              <div
                className={`offer  text-start d-flex  border border-primary border-opacity-25 justify-content-between ${
                  activetitle === items?.title
                    ? "bs-white-text bg-primary "
                    : "text-secondary bg-white "
                }`}
                onClick={() => {
                  setActive(items?.image), setActivetitle(items?.title);
                }}
                key={index}
              >
                <button
                  className={`offerbtn  text-start border-0 btn btn-white text-secondary ${
                    activetitle === items?.title
                      ? "text-white "
                      : "text-secondary "
                  }`}
                >
                  {items.title}
                </button>
                <span
                  className={`p-2 ${
                    activetitle === items?.title ? "text-white" : ""
                  }`}
                >
                  <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            ))}
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="position-relative " style={{ height: "318px" }}>
              <Image src={active} alt="image" className="" fill />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offer;
