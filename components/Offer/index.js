import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import who1 from "../../public/assets/who1.jpg";
import who2 from "../../public/assets/who2.jpg";
import who3 from "../../public/assets/who3.jpg";
import who4 from "../../public/assets/whosecond.jpg";
import wwo1 from "../../public/assets/wwo1.png";

const data = [
  {
    id: 1,
    title: "BIM Moduling",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: wwo1,
  },
  {
    id: 2,
    title: "AutoCAD Drafting",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: who2,
  },
  {
    id: 3,
    title: "Interior Design",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: who3,
  },
  {
    id: 4,
    title: "2D & 3D Modelling",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: who4,
  },
  {
    id: 5,
    title: "Landscape Conecpt",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: who1,
  },
  {
    id: 6,
    title: "Estimation Stratragic Resource planning",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: who2,
  },
];

const Offer = () => {
  const [active, setActive] = useState(data[0]?.image);
  const [activetitle, setActivetitle] = useState(data[0]?.title);
  return (
    <section className="mt-5 ">
      <Container className="p-0">
        <h2 className="">What We Offer</h2>
        <Row className="mt-4 ">
          <Col className="p-0" xs={12} sm={6} md={4} lg={4}>
            <Accordion defaultActiveKey="0" bsPrefix="faqAccordion" flush>
              {data?.map((items, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index}
                  onClick={() => {
                    setActive(items?.image), setActivetitle(items?.title);
                  }}
                >
                  <Accordion.Header>{items.title}</Accordion.Header>
                  <Accordion.Body>{items.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            {/* {data?.map((items, index) => (
              <div
                className={`offer shadow  text-start d-flex  border border-primary border-opacity-25 justify-content-between ${
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
            ))} */}
          </Col>
          <Col className="pe-0" xs={12} sm={6} md={8} lg={8}>
            <div className="position-relative ">
              <Image src={active} alt="image" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offer;
