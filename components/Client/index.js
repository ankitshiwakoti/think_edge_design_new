import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import client from "../../public/assets/client.jpg";
import who1 from "../../public/assets/who1.jpg";
import who2 from "../../public/assets/who2.jpg";
import who3 from "../../public/assets/who3.jpg";
import who4 from "../../public/assets/whosecond.jpg";
import Slider from "react-slick";
import profile from "../../public/assets/profile.png";

const data = [
  {
    id: 1,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit.",
    image: profile,
  },
  {
    id: 2,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit.",
    image: profile,
  },
  {
    id: 3,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit.",
    image: profile,
  },
  {
    id: 4,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit.",
    image: profile,
  },
  {
    id: 5,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit.",
    image: profile,
  },
  {
    id: 6,
    title: "Mary Goldie",
    subtitle: "Envato Customer",
    body: "I love their design for all stunning details. you must know what can you do for a project before taking it, but with Architus, the sky is the limit.",
    image: profile,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ color: "black ", fontSize: "30px" }}
      onClick={onClick}
    >
      <i class="bi bi-arrow-right-short"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ color: "black ", fontSize: "30px" }}
      onClick={onClick}
    >
      <i class="bi bi-arrow-left-short"></i>
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
    <section>
      <Container className="position-relative">
        <Row className="my-5 ">
          <Col xs={10} sm={10} md={10} lg={10}>
            <div className="position-relative" style={{ height: "320px" }}>
              <Image src={client} alt="image" fill />
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Col
          xs={8}
          sm={8}
          md={5}
          lg={5}
          className=" position-absolute top-25  "
          style={{ top: "18%", right: "0%" }}
        >
          <div className="">
            <Slider {...settings}>
              {data?.map((items, index) => (
                <div class="card rounded-0 p-3">
                  <div class="card-body">
                    <div className="d-flex gap-2">
                      <div
                        className="rounded-4"
                        style={{ borderRadius: "50%" }}
                      >
                        <Image
                          src={items.image}
                          alt="image"
                          className="img-fluid"
                          width={50}
                        />
                      </div>
                      <div className="ms-1 mb-1">
                        <h5 class="card-title">{items.title}</h5>
                        <p class="card-subtitle mb-2 text-body-secondary">
                          {items.subtitle}
                        </p>
                      </div>
                    </div>

                    <p class="card-text">{items.body}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Client;
