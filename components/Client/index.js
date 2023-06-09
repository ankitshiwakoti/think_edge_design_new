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
    title: "Cultural Center",
    body: "Hotel & Resort",
    image: who1,
  },
  {
    id: 2,
    title: "Cultural Center",
    body: "You & Who ",
    image: who2,
  },
  {
    id: 3,
    title: "Cultural Center",
    body: "You & Me",
    image: who3,
  },
  {
    id: 4,
    title: "Cultural Center",
    body: "Dark & mOOn",
    image: who4,
  },
  {
    id: 5,
    title: "Cultural Center",
    body: "Hotel & Resort",
    image: who1,
  },
  {
    id: 6,
    title: "Cultural Center",
    body: "Hotel & Resort",
    image: who2,
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 2,
          slidesToShow: 2,
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
          xs={12}
          sm={12}
          md={5}
          lg={5}
          className="position-absolute top-25  "
          style={{ top: "25%", right: "20%" }}
        >
          <div className="" style={{ width: "700px" }}>
            <Slider {...settings}>
              {data?.map((items, index) => (
                <div class="card">
                  <div class="card-body">
                    <div className="d-flex gap-2">
                      <div
                        className="rounded-4"
                        style={{ borderRadius: "50%" }}
                      >
                        <Image
                          src={profile}
                          alt="image"
                          className="img-fluid"
                          width={60}
                        />
                      </div>
                      <div>
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          Card subtitle
                        </h6>
                      </div>
                    </div>

                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
