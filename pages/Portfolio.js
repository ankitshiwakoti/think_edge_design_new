import Image from "next/image";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import banner from "../public/assets/portfolio/banner.png";
import Portfolios from "@/components/Portfolio";
import Bim11 from "../public/assets/portfolio/Bim1-1.png";
import Bim12 from "../public/assets/portfolio/Bim1-2.png";
import Auto11 from "../public/assets/portfolio/Auto1-1.png";
import Auto12 from "../public/assets/portfolio/Auto1-2.png";

const services = [
  {
    id: 1,
    title: "BIM modeling",
    send: "BIM",
  },

  {
    id: 2,
    title: "AutoCAD Drafting",
    send: "AutoCAD",
  },

  {
    id: 3,
    title: "Interior Designer",
    send: "Interior",
  },

  {
    id: 4,
    title: "3D Modeling and Rendering/ Façade Design",
    send: "3D",
  },

  {
    id: 5,
    title: "Landscape Concept",
    send: "Landscape",
  },

  {
    id: 6,
    title: "Estimation: Strategic Resource Planning",
    send: "Estimation",
  },
];

const BIM = [
  {
    id: 1,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 1,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 2,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 3,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 4,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 5,
    image1: Bim11,
    image2: Bim12,
  },
];

const AutoCAD = [
  {
    id: 1,
    image1: Auto11,
    image2: Auto12,
  },
  {
    id: 2,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 3,
    image1: Auto11,
    image2: Auto12,
  },

  {
    id: 4,
    image1: Bim11,
    image2: Bim12,
  },
  {
    id: 5,
    image1: Auto11,
    image2: Auto12,
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("BIM modeling");
  const [send, setSend] = useState("BIM");
  const [limit, setLimit] = useState(4);
  const handleShowMore = () => {
    setLimit(limit + 4);
  };
  console.log(send);
  return (
    <section>
      <Container fluid>
        <Row className="">
          <div className="p-0 col-md-12  col-lg-12 position-relative">
            <div>
              <Image alt="portfolio banner" src={banner} className=" w-100" />
            </div>
            <div
              className="position-absolute  top-50 start-50 translate-middle"
              style={{ color: "white" }}
            >
              <h1>Portfolio</h1>
            </div>
            <div
              className="position-absolute bottom-0 start-0 mb-3"
              style={{ color: "white" }}
            >
              <h4 className="ms-5 ps-5">Home/Portfolio/{active}</h4>
            </div>
          </div>
        </Row>
      </Container>
      <Container className="p-0">
        <Row className=" mb-4 mt-5 d-flex flex-wrap ">
          {services?.map((item) => (
            <div
              key={item?.id}
              className="d-flex ps-2 pe-2 justify-content-between col-12 col-md "
            >
              <button
                style={{ border: " 1px solid var(--secondary-black, #ABABAB)" }}
                className={`w-100  p-1  rounded-0 projectbutton ${
                  active === item?.title
                    ? "bg-buttons text-buttontext fw-normal "
                    : "bg-transparent text-dark "
                }`}
                onClick={() => {
                  setActive(item?.title), setSend(item?.send);
                }}
              >
                {item?.title}
              </button>
            </div>
          ))}
        </Row>
        {send === "BIM" ? <Portfolios data={BIM} /> : null}
        {send === "AutoCAD" ? <Portfolios data={AutoCAD} /> : null}
      </Container>
    </section>
  );
};

export default Portfolio;
