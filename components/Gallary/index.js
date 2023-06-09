import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import who1 from "../../public/assets/who1.jpg";
import who2 from "../../public/assets/who2.jpg";
import who3 from "../../public/assets/who3.jpg";
import who4 from "../../public/assets/whosecond.jpg";

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
    dots: true,
    infinite: false,
    speed: 500,
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <Slider {...settings}>
                <div className="card mainslider position-relative border-0">
                  <Image src={who1} alt="image" className="  img-fluid  " />
                  <div className="slidercontent position-absolute top-50 start-0 ">
                    <h2>cultural center</h2>
                    <p>Hotel & resort</p>
                  </div>
                </div>
                <div className="card  border-0">
                  <Image src={who2} alt="image" className="img-fluid " />
                </div>
                <div className="card border-0">
                  <Image src={who3} alt="image" className="img-fluid " />
                </div>
                <div className="card  border-0">
                  <Image src={who4} alt="image" className="img-fluid" />
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallary;
