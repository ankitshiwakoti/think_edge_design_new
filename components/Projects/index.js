import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import who1 from "../../public/assets/who1.jpg";
import who2 from "../../public/assets/who2.jpg";
import who3 from "../../public/assets/who3.jpg";
import project1 from "../../public/assets/project/projects1.png";
import project2 from "../../public/assets/project/projects2.png";
import project3 from "../../public/assets/project/projects3.png";
import project4 from "../../public/assets/project/projects4.png";
import who4 from "../../public/assets/whosecond.jpg";
import Slider from "react-slick";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: project1,
    title: "MODERN CONTEMPORARY HOUSE",
    subtitle: "RESIDENTIAL",
    body: "A house for everyone, breaking previous stereotypes. It comes in two versions, Modern IV ideal for a family of 4 or 6 members.",
    ftitle: "Key Features",
    l1: "Ideal for a family of 4 or 6 members.",
    l2: "Modern materials and technology.",
    l3: "Modern materials and technology.",
    l4: "Modern materials and technology.",
    l5: "Ideal for a family of 4 or 6 members.",
  },
  {
    id: 2,
    image: project2,
    title: "MODERN CONTEMPORARY HOUSE",
    subtitle: "RESIDENTIAL",
    body: "A house for everyone, breaking previous stereotypes. It comes in two versions, Modern IV ideal for a family of 4 or 6 members.",
    ftitle: "Key Features",
    l1: "Ideal for a family of 4 or 6 members.",
    l2: "Modern materials and technology.",
    l3: "Modern materials and technology.",
    l4: "Modern materials and technology.",
    l5: "Ideal for a family of 4 or 6 members.",
  },
  {
    id: 3,
    image: project3,
    title: "MODERN CONTEMPORARY HOUSE",
    subtitle: "RESIDENTIAL",
    body: "A house for everyone, breaking previous stereotypes. It comes in two versions, Modern IV ideal for a family of 4 or 6 members.",
    ftitle: "Key Features",
    l1: "Ideal for a family of 4 or 6 members.",
    l2: "Modern materials and technology.",
    l3: "Modern materials and technology.",
    l4: "Modern materials and technology.",
    l5: "Ideal for a family of 4 or 6 members.",
  },
  {
    id: 4,
    image: project4,
    title: "MODERN CONTEMPORARY HOUSE",
    subtitle: "RESIDENTIAL",
    body: "A house for everyone, breaking previous stereotypes. It comes in two versions, Modern IV ideal for a family of 4 or 6 members.",
    ftitle: "Key Features",
    l1: "Ideal for a family of 4 or 6 members.",
    l2: "Modern materials and technology.",
    l3: "Modern materials and technology.",
    l4: "Modern materials and technology.",
    l5: "Ideal for a family of 4 or 6 members.",
  },
  {
    id: 5,
    image: project1,
    title: "MODERN CONTEMPORARY HOUSE",
    subtitle: "RESIDENTIAL",
    body: "A house for everyone, breaking previous stereotypes. It comes in two versions, Modern IV ideal for a family of 4 or 6 members.",
    ftitle: "Key Features",
    l1: "Ideal for a family of 4 or 6 members.",
    l2: "Modern materials and technology.",
    l3: "Modern materials and technology.",
    l4: "Modern materials and technology.",
    l5: "Ideal for a family of 4 or 6 members.",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        color: "#895d2b",
        fontWeight: "400",
        fontSize: "14px",
        top: "87%",
        left: "71%",
      }}
      onClick={onClick}
    >
      <span className="text-uppercase"> Next</span>
      <span className="ms-1 ">
        <i class="bi bi-arrow-right"> </i>
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        color: "#895d2b ",
        fontWeight: "400",
        fontSize: "14px",
        top: "87%",
        left: "64%",
      }}
      onClick={onClick}
    >
      <span className="me-1  mt-1">
        <i class="bi bi-arrow-left"> </i>
      </span>
      <span className="text-uppercase"> previous</span>
    </div>
  );
}

const Projects = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section id="projects" className="pt-5 projects">
      <Container className="">
        <Row className="my-5">
          <div className="p-0 justify-content-start col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <h2 className=" fw-normal text-uppercase">our latest projects </h2>
            <div className="projectline "></div>
          </div>

          <div className="d-flex  justify-content-end col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <div
              className="projectbutton p-2 ps-3 pt-2 border border-1 rounded-0   btn "
              style={{ background: "transparent" }}
            >
              <span className="p-2 pt-5">VIEW ALL PROJECTS</span>
              <span className="p-2 pt-5">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
          {/* <h2 className=" fw-medium text-uppercase mb-4">
            our latest projects
          </h2> */}
          <div className="pt-5 p-0">
            <Slider {...settings}>
              {data?.map((items, index) => (
                <div className=" position-relative">
                  <Col xs={8} sm={8} md={8} lg={8}>
                    <div
                      className="position-relative pe-5 pb-2 pt-3"
                      style={{ height: "700px", width: "100%" }}
                      data-aos="fade-left"
                      data-aos-once="false"
                      data-aos-duration="1500"
                    >
                      <Image
                        src={items.image}
                        alt="img"
                        // className="img-fluid"
                        // height={650}
                        style={{ width: "100%", height: "100%" }}
                        // fill
                      />
                    </div>
                  </Col>
                  <Col
                    xs={10}
                    sm={10}
                    md={5}
                    lg={5}
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-once="false"
                    className="position-absolute   ps-3 top-25  "
                    style={{ top: "5%", right: "0%" }}
                  >
                    <div
                      className=" p-4 ps-5 pt-5 mb-4 "
                      style={{ color: "#212121", backgroundColor: " #F2F1EB" }}
                    >
                      <h3 className="text-uppercase fw-medium">
                        {items.title}{" "}
                      </h3>
                      <h4 className="text-uppercase pt-2 fw-light">
                        {items.subtitle}
                      </h4>
                      <p
                        className="pt-3 fw-regular"
                        style={{ color: "#525252" }}
                      >
                        {items.body}
                      </p>
                      <div className="pt-3">
                        <h4 className="text-uppercase pb-2 fw-light">
                          {items.ftitle}
                        </h4>
                        <p className="mb-2" style={{ color: "#525252" }}>
                          1. {items.l1}
                        </p>
                        <p className="mb-2" style={{ color: "#525252" }}>
                          2. {items.l2}
                        </p>
                        <p className="mb-2" style={{ color: "#525252" }}>
                          3. {items.l3}{" "}
                        </p>
                        <p className="mb-2" style={{ color: "#525252" }}>
                          4. {items.l4}{" "}
                        </p>
                        <p className="mb-2" style={{ color: "#525252" }}>
                          5. {items.l5}
                        </p>
                      </div>
                      <div className="pb-4 " style={{ marginBottom: "60px" }}>
                        <div
                          className="mt-5 text-center projectbutton  btn  border  border-1 border-primary border-opacity-25  rounded-0"
                          style={{
                            color: "#212121",
                            background: "transparent",
                          }}
                        >
                          LEARN MORE
                          <span className="p-3 ">
                            <i class="bi bi-arrow-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
