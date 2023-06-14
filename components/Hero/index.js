import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import hero1 from "../../public/assets/hero1.jpg";
import hero2 from "../../public/assets/hero2.jpg";
import hero3 from "../../public/assets/hero3.png";
import client from "../../public/assets/client.jpg";
import Link from "next/link";

const data = [
  {
    id: 1,
    img: hero1,
  },
  {
    id: 2,
    img: hero2,
  },
  {
    id: 3,
    img: hero1,
  },
  {
    id: 4,
    img: hero2,
  },
];

const FooterData = [
  {
    id: 1,
    icon: "bi bi-facebook",
    link: "www.facebook.com",
  },
  {
    id: 2,
    icon: "bi bi-instagram",
    link: "www.instagram.com",
  },
  {
    id: 1,
    icon: "bi bi-linkedin",
    link: "www.linkedin.com",
  },
];

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ color: "black ", fontSize: "30px" }}
//       onClick={onClick}
//     >
//       <i class="bi bi-arrow-right-short"></i>
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;

//   return (
//     <div
//       className={className}
//       style={{ color: "black ", fontSize: "30px" }}
//       onClick={onClick}
//     >
//       <i class="bi bi-arrow-left-short"></i>
//     </div>
//   );
// }

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    slidesToShow: 1,
    slidesToScroll: 1,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 1,
          slidesToShow: 2,
          arrow: false,
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
          arrow: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="hero" id="hero">
      <Container fluid>
        <Row className="">
          <Col xs={12} sm={12} md={12} lg={12} className="p-0">
            <div>
              <Slider {...settings} className="slick-prevs">
                {data?.map((items, index) => (
                  <div className="position-relative " key={index}>
                    <div>
                      <Image
                        src={items.img}
                        alt="image"
                        style={{ width: "100%", height: "500px" }}
                      />
                    </div>
                    <div
                      className="position-absolute  text-center"
                      style={{
                        color: "white",

                        top: "20%",
                        right: "28%",
                      }}
                    >
                      <h1
                        className=" mb-0 text-uppercase"
                        style={{ lineHeight: "53.2px", fontWeight: "500" }}
                      >
                        Close your eyes
                      </h1>
                      <h1
                        className=" mb-0 text-uppercase"
                        style={{ lineHeight: "53.2px", fontWeight: "500" }}
                      >
                        Give your dreams a shape
                      </h1>
                      <h1
                        className=" mb-0 text-uppercase"
                        style={{ lineHeight: "53.2px", fontWeight: "500" }}
                      >
                        of reality
                      </h1>

                      <button
                        className="mt-5 text-center  btn shadow-sm border border-white bg-primary text-white border-opacity-25 text-primary rounded-0"
                        style={{ color: "white" }}
                      >
                        LEARN MORE
                        <span className="p-3 ">
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </button>
                    </div>

                    <div
                      className="position-absolute d-grid justify-content-start ps-md-3"
                      style={{
                        color: "white",

                        top: "30%",
                        left: "0%",
                      }}
                    >
                      {FooterData?.map((v, k) => (
                        <div
                          key={k}
                          className="d-flex border mt-2 p-2 align-items-center justify-content-center"
                          style={{
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                            borderColor: "white",
                            color: "white",
                          }}
                        >
                          <Link
                            className="p-4"
                            onClick={() => setProgress(100)}
                            href={v.link}
                            target="_blank"
                            style={{ color: "white", fontSize: "16px" }}
                          >
                            <i className={v.icon} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
