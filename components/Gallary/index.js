import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import image1 from "../../public/assets/gallery/g1.png";
import image2 from "../../public/assets/gallery/g2.png";
import image3 from "../../public/assets/gallery/gd1.png";
import image4 from "../../public/assets/gallery/gd2.png";
import image5 from "../../public/assets/gallery/gd3.png";

// const data = [
//   {
//     id: 1,
//     title: "Cultural Center",
//     body: "Hotel & Resort",
//     image: who1,
//   },
//   {
//     id: 2,
//     title: "Cultural Center",
//     body: "You & Who ",
//     image: who2,
//   },
//   {
//     id: 3,
//     title: "Cultural Center",
//     body: "You & Me",
//     image: who3,
//   },
//   {
//     id: 4,
//     title: "Cultural Center",
//     body: "Dark & mOOn",
//     image: who4,
//   },
//   {
//     id: 5,
//     title: "Cultural Center",
//     body: "Hotel & Resort",
//     image: who1,
//   },
//   {
//     id: 6,
//     title: "Cultural Center",
//     body: "Hotel & Resort",
//     image: who2,
//   },
// ];

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

const Gallary = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrow: false,
    slidesToShow: 4,
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
      <Container className="p-0">
        <Row className="my-5">
          <h2 className="fw-normal">GALLERY</h2>
          <Row className="mt-4">
            <Col xs={12} sm={12} md={7} lg={7}>
              <div className="  mainsliders position-relative">
                <Image src={image1} alt="image" className="img-fluid" />
                <div className="slidercontents text-center position-absolute  ">
                  <div className="content position-relative">
                    <h3 className="p-0 m-0">Modern Contaporary house</h3>
                    <p className="p-0 m-0">Residental</p>
                  </div>
                </div>
                {/* <Slider {...settings}>
                {data?.map((items, index) => (
                  <div
                    className="card p-2 mainsliders position-relative border-0"
                    key={index}
                  >
                    <Image
                      src={items.image}
                      alt="image"
                      className=" imgslides img-fluid  "
                    />
                    <div className="slidercontents my-5 py-2 ms-3 position-absolute top-50 start-0 ">
                      <h3 className="p-0 m-0">{items.title}</h3>
                      <p className="p-0 m-0">{items.body}</p>
                    </div>
                  </div>
                ))}
              </Slider> */}
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <div className="  mainsliders position-relative">
                <Image src={image2} alt="image" className="img-fluid" />

                <div className="slidercontents text-center  position-absolute  ">
                  <div className="content position-relative">
                    <h3 className="p-0 m-0">Modern Contaporary house</h3>
                    <p className="p-0 m-0">Residental</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={6} sm={6} md={4} lg={4}>
              <div className="  mainsliders position-relative">
                <Image src={image3} alt="image" className="img-fluid" />

                <div className="slidercontents text-center  position-absolute  ">
                  <div className="content position-relative">
                    <h3 className="p-0 m-0">Modern Contaporary house</h3>
                    <p className="p-0 m-0">Residental</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <div className="  mainsliders position-relative">
                <Image src={image4} alt="image" className="img-fluid" />
                <div className="slidercontents text-center  position-absolute  ">
                  <div className="content position-relative">
                    <h3 className="p-0 m-0">Modern Contaporary house</h3>
                    <p className="p-0 m-0">Residental</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <div className="  mainsliders position-relative">
                <Image src={image5} alt="image" className="img-fluid" />
                <div
                  className="slidercontents text-center  position-absolute  "
                  // style={{ top: "30%", left: "5%" }}
                >
                  <div className="content position-absolute ">
                    <h3 className="">Modern Contaporary house</h3>
                    <p className="">Residental</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Gallary;
