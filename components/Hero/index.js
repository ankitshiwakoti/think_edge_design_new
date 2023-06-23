import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import hero1 from "../../public/assets/hero1.png";
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
    img: hero3,
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
    icon: "bi bi-youtube",
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

    // speed: 2000,
    // autoplaySpeed: 4000,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (current, next) => {
    //   const slickList = document.querySelector(".slick-list");
    //   slickList.style.transform = "translateY(0)";
    // },
    // afterChange: (current) => {
    //   const slickList = document.querySelector(".slick-list");
    //   slickList.style.transform = "translateY(-100%)";
    // },
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: "red",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),

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
          dots: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
          arrow: false,
          dots: true,
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
              <Slider {...settings}>
                {data?.map((items, index) => (
                  <div className="position-relative  " key={index}>
                    <div
                      className="tryhero position-absolute"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></div>
                    <div>
                      <Image
                        src={items.img}
                        alt="image"
                        className=""
                        style={{ width: "100%", height: "800px" }}
                        // fill
                      />
                    </div>
                    <div
                      className="position-absolute  text-center"
                      data-aos="fade-up"
                      data-aos-easing="liner"
                      data-aos-duration="3000"
                      style={{
                        color: "white",

                        top: "22%",
                        right: "100%",
                        width: "100%",
                        height: "100vh",
                      }}
                    >
                      <h1 className=" mb-0 text-uppercase lh-base fw-medium">
                        Close your eyes
                      </h1>
                      <h1 className=" mb-0 text-uppercase lh-base fw-medium">
                        Give your dreams a shape
                      </h1>
                      <h1 className=" mb-4 text-uppercase lh-base fw-medium">
                        of reality
                      </h1>

                      <div
                        className="mt-5 text-center herobtn btnhover btn shadow-sm border border-white text-white border-opacity-25 text-primary rounded-0"
                        style={{ color: "white" }}
                      >
                        <span className="p-2 "> LEARN MORE</span>
                        <span className="pe-2 ">
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </div>
                    </div>

                    <div
                      className="position-absolute d-grid justify-content-start ps-md-3"
                      style={{
                        color: "white",

                        top: "18%",
                        left: "0%",
                      }}
                    >
                      <div className="ms-3 mb-1 vl"></div>
                      <div>
                        {FooterData?.map((v, k) => (
                          <div
                            key={k}
                            className="d-flex border mt-3 p-2 border border-1 align-items-center justify-content-center"
                            style={{
                              borderRadius: "50%",
                              width: "35px",
                              height: "35px",
                              borderColor: "#FFFEFE",
                            }}
                          >
                            <Link
                              className="p-4 d-flex align-items-center justify-content-center "
                              onClick={() => setProgress(100)}
                              href={v.link}
                              target="_blank"
                              style={{ color: "white", fontSize: "16px" }}
                            >
                              <i className={`${v.icon} `} />
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 ms-3 vl"></div>
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
