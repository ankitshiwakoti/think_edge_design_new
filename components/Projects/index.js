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
      }}
      onClick={onClick}
    >
      <span> Next</span>
      <span className="ms-1">
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
        top: "80%",
        left: "52%",
      }}
      onClick={onClick}
    >
      <span className="me-1">
        <i class="bi bi-arrow-left"> </i>
      </span>
      <span> previous</span>
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
      <Container className="p-0">
        <Row className="my-5">
          <div className="p-0 justify-content-start col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <h2 className=" fw-normal text-uppercase">our latest projects </h2>
          </div>

          <div className="d-flex justify-content-end col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <button
              className="blogbtn pe-3 ps-4  border border-1 rounded-0   btn "
              style={{ background: "transparent" }}
            >
              VIEW ALL PROJECTS
              <span className="p-2 ps-3 ">
                <i class="bi bi-arrow-right"></i>
              </span>
            </button>
          </div>
          {/* <h2 className=" fw-medium text-uppercase mb-4">
            our latest projects
          </h2> */}
          <div className="pt-5 p-0">
            <Slider {...settings}>
              {data?.map((items, index) => (
                <div className=" position-relative">
                  <Col xs={8} sm={8} md={7} lg={7}>
                    <div
                      className="position-relative"
                      style={{ height: "700px", width: "100%" }}
                    >
                      <Image
                        src={items.image}
                        alt="img"
                        // height={650}
                        // style={{ width: "100%" }}
                        fill
                      />
                    </div>
                  </Col>
                  <Col
                    xs={10}
                    sm={10}
                    md={6}
                    lg={6}
                    className="position-absolute top-25  "
                    style={{ top: "3%", right: "0%" }}
                  >
                    <div
                      className=" p-4 pt-5 mb-5 pb-5"
                      style={{ color: "#212121", backgroundColor: " #F2F1EB" }}
                    >
                      <h3 className="text-uppercase fw-medium">
                        {items.title}{" "}
                      </h3>
                      <h4 className="text-uppercase fw-light">
                        {items.subtitle}
                      </h4>
                      <p
                        className="pt-2 fw-regular"
                        style={{ color: "#525252" }}
                      >
                        {items.body}
                      </p>
                      <div className="pt-3">
                        <h4 className="text-uppercase fw-light">
                          {items.ftitle}
                        </h4>
                        <p className="mb-1" style={{ color: "#525252" }}>
                          1.{items.l1}
                        </p>
                        <p className="mb-1" style={{ color: "#525252" }}>
                          2. {items.l2}
                        </p>
                        <p className="mb-1" style={{ color: "#525252" }}>
                          3. {items.l3}{" "}
                        </p>
                        <p className="mb-1" style={{ color: "#525252" }}>
                          4. {items.l4}{" "}
                        </p>
                        <p className="mb-1" style={{ color: "#525252" }}>
                          5. {items.l5}
                        </p>
                      </div>
                      <div className="pb-4" style={{ marginBottom: "60px" }}>
                        <button
                          className="mt-5 text-center  btn  border  border-1 border-primary border-opacity-25  rounded-0"
                          style={{
                            color: "#212121",
                            background: "transparent",
                          }}
                        >
                          LEARN MORE
                          <span className="p-3 ">
                            <i class="bi bi-arrow-right"></i>
                          </span>
                        </button>
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
