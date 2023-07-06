import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner1 from "../public/assets/aboutus/banner1.png";
import About1 from "../public/assets/aboutus/About1.png";
import About2 from "../public/assets/aboutus/About2.png";
import About3 from "../public/assets/aboutus/About3.png";
import About4 from "../public/assets/aboutus/About4.png";
import About5 from "../public/assets/aboutus/About5.png";
import About6 from "../public/assets/aboutus/About6.png";
import About7 from "../public/assets/aboutus/About7.png";
import About8 from "../public/assets/aboutus/About8.png";
import About9 from "../public/assets/aboutus/About9.png";
import About10 from "../public/assets/aboutus/About10.png";
import About11 from "../public/assets/aboutus/About11.png";
import About12 from "../public/assets/aboutus/About12.png";

const data = [
  {
    id: 1,
    photo: About1,
    name: "Anil keshari",
    role: "CEO",
  },
  {
    id: 2,
    photo: About2,
    name: "Nikil Shrestha",
    role: "Project Manager",
  },
  {
    id: 3,
    photo: About3,
    name: "Ankit Shiwakoti",
    role: "Developer",
  },
  {
    id: 4,
    photo: About4,
    name: "Nabina Shahi",
    role: "Designer",
  },
  {
    id: 5,
    photo: About5,
    name: "Anil keshari",
    role: "CEO",
  },
  {
    id: 6,
    photo: About6,
    name: "Nikil Shrestha",
    role: "Project Manager",
  },
  {
    id: 7,
    photo: About7,
    name: "Ankit Shiwakoti",
    role: "Developer",
  },
  {
    id: 8,
    photo: About8,
    name: "Nabina Shahi",
    role: "Designer",
  },
  {
    id: 9,
    photo: About9,
    name: "Anil keshari",
    role: "CEO",
  },
  {
    id: 10,
    photo: About10,
    name: "Nikil Shrestha",
    role: "Project Manager",
  },
  {
    id: 11,
    photo: About11,
    name: "Ankit Shiwakoti",
    role: "Developer",
  },
  {
    id: 12,
    photo: About12,
    name: "Nabina Shahi",
    role: "Designer",
  },
];

const Team = () => {
  return (
    <section>
      <Container fluid>
        <Row className="">
          <div className="p-0 col-md-12  col-lg-12 position-relative">
            <div>
              <Image
                alt="portfolio banner"
                src={Banner1}
                className="img-fluid w-100"
              />
            </div>
            <div
              className="position-absolute  top-50 start-50 translate-middle"
              style={{ color: "white" }}
            >
              <h1>MEET OUR TEAM</h1>
            </div>
            <div
              className="position-absolute bottom-0 start-0 mb-3"
              style={{ color: "white" }}
            >
              <h4 className="ms-5 ps-5">Home/Portfolio/Meet our team</h4>
            </div>
          </div>
        </Row>
      </Container>

      <Container className="p-0">
        <Row className=" p-0  bg-designnonactive py-5">
          <h2 className="py-3">MEET OUR TEAM</h2>

          {data?.map((items, index) => (
            <div
              className=" col-md-3 col-lg-3 d-flex bg-designnonactive p-2"
              key={index}
            >
              <div class="card bg-designnonactive border-0 rounded-0">
                <Image
                  src={items.photo}
                  className="img-fluid"
                  alt="card images"
                />
                <div class="card-body text-center bg-designnonactive border-0 rounded-0">
                  <h2 class=" fw-light">{items.name}</h2>
                  <h3 class="fw-normal">{items.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
