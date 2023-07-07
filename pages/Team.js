import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";

const data = [
  {
    id: 1,
    photo: "/assets/aboutus/About1.png",
    name: "Anil keshari",
    role: "CEO",
  },
  {
    id: 2,
    photo: "/assets/aboutus/About2.png",
    name: "Nikil Shrestha",
    role: "Project Manager",
  },
  {
    id: 3,
    photo: "/assets/aboutus/About3.png",
    name: "Ankit Shiwakoti",
    role: "Developer",
  },
  {
    id: 4,
    photo: "/assets/aboutus/About4.png",
    name: "Nabina Shahi",
    role: "Designer",
  },
  {
    id: 5,
    photo: "/assets/aboutus/About5.png",
    name: "Anil keshari",
    role: "CEO",
  },
  {
    id: 6,
    photo: "/assets/aboutus/About6.png",
    name: "Nikil Shrestha",
    role: "Project Manager",
  },
  {
    id: 7,
    photo: "/assets/aboutus/About7.png",
    name: "Ankit Shiwakoti",
    role: "Developer",
  },
  {
    id: 8,
    photo: "/assets/aboutus/About8.png",
    name: "Nabina Shahi",
    role: "Designer",
  },
  {
    id: 9,
    photo: "/assets/aboutus/About9.png",
    name: "Anil keshari",
    role: "CEO",
  },
  {
    id: 10,
    photo: "/assets/aboutus/About10.png",
    name: "Nikil Shrestha",
    role: "Project Manager",
  },
  {
    id: 11,
    photo: "/assets/aboutus/About11.png",
    name: "Ankit Shiwakoti",
    role: "Developer",
  },
  {
    id: 12,
    photo: "/assets/aboutus/About12.png",
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
                src="/assets/aboutus/Banner1.png"
                className="img-fluid w-100"
                width={1920}
                height={600}
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

      <Container className="p-3 p-sm-0">
        <Row className=" p-0  bg-designnonactive py-5">
          <h2 className="py-3">MEET OUR TEAM</h2>

          {data?.map((items, index) => (
            <div
              className=" col-md-6 col-lg-3 col-sm-6 d-grid d-sm-flex bg-designnonactive p-2 "
              key={index}
            >
              <div class="card bg-designnonactive border-0 rounded-0">
                <Image
                  src={items.photo}
                  className="img-fluid"
                  alt="card images"
                  width={407}
                  height={460}
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
