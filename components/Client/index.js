import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import client from "../../public/assets/client.jpg";
import who1 from "../../public/assets/who1.jpg";
import who2 from "../../public/assets/who2.jpg";
import who3 from "../../public/assets/who3.jpg";
import who4 from "../../public/assets/whosecond.jpg";
import Slider from "react-slick";
import profile from "../../public/assets/client/profile.png";
import client1 from "../../public/assets/client/second.png";

const data = [
  {
    id: 1,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit. I am in love your entire work. kudos to all the team member and enhancing and making my home to the new home.",
    image: profile,
  },
  {
    id: 2,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit. I am in love your entire work. kudos to all the team member and enhancing and making my home to the new home.",
    image: profile,
  },
  {
    id: 3,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit. I am in love your entire work. kudos to all the team member and enhancing and making my home to the new home.",
    image: profile,
  },
  {
    id: 4,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit. I am in love your entire work. kudos to all the team member and enhancing and making my home to the new home.",
    image: profile,
  },
  {
    id: 5,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit. I am in love your entire work. kudos to all the team member and enhancing and making my home to the new home.",
    image: profile,
  },
  {
    id: 6,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit. I am in love your entire work. kudos to all the team member and enhancing and making my home to the new home.",
    image: profile,
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
        top: "85%",
        left: "15%",
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
        top: "85%",
        left: "5%",
      }}
      onClick={onClick}
    >
      <span className="me-1 mt-1">
        <i class="bi bi-arrow-left"> </i>
      </span>
      <span className="text-uppercase"> previous</span>
    </div>
  );
}

const Client = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrow: false,
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
    <section className="client pt-5">
      <Container className=" p-0">
        <div className=" mt-3 position">
          <h2>WHAT OUR CLIENT SAY</h2>
        </div>
        <Row className="my-5 position-relative ">
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            className=" position-absolute top-25 mb-5  "
            style={{
              top: "10%",
              left: "0%",
              zIndex: "1",
            }}
          >
            <div className="">
              <Slider {...settings}>
                {data?.map((items, index) => (
                  <div
                    class="card rounded-0 "
                    style={{ backgroundColor: "#F2F1EB" }}
                  >
                    <div
                      class="card-body p-4  pe-0 "
                      style={{ backgroundColor: "#F2F1EB" }}
                    >
                      <div className="d-flex gap-2">
                        <div
                          className="rounded-4 mt-3"
                          style={{
                            borderRadius: "50%",
                          }}
                        >
                          <Image
                            src={items.image}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className=" mt-1 p-4  ps-0 ">
                          <p class=" fw-semibold mb-1 card-title">
                            {items.title}
                          </p>
                          <p class=" mb-2  fw-normal text-body-secondary">
                            {items.subtitle}
                          </p>
                        </div>
                      </div>
                      <p
                        class="fw-light text-body-secondary p-3 pe-1  mb-5"
                        style={{ lineHeight: "180%" }}
                      >
                        {items.body}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
          <Col md={7} className="p-0"></Col>
          <Col xs={10} sm={10} md={5} lg={5}>
            <div className="position-relative">
              <Image
                src={client1}
                alt="image"
                className="img-fluid"
                style={{ height: "400px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
