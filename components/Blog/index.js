import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../public/assets/blog1.png";
import blog2 from "../../public/assets/blog2.png";
import blog3 from "../../public/assets/blog3.png";

const data = [
  {
    id: 1,
    title:
      " A Definitive Guide On how To hire An Interior Designer For Your Home",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: blog1,
  },
  {
    id: 2,
    title:
      " A Definitive Guide On how To hire An Interior Designer For Your Home",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: blog2,
  },
  {
    id: 3,
    title:
      " A Definitive Guide On how To hire An Interior Designer For Your Home",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section>
      <Container className="p-0">
        <Row className="d-flex justify-content-between mb-5">
          <div className=" justify-content-start col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <h2 className=" fw-medium text-uppercase">Blog post </h2>
          </div>

          <div className="d-flex justify-content-end col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <div className="projectbutton p-2  rounded-0  shadow-sm btn btn-white">
              <span className="text-uppercase p-2"> VIEW ALL Blogs </span>
              <span className="p-2 ">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        </Row>

        <Row>
          {data?.map((items, index) => (
            <Col xs={12} sm={6} md={6} lg={4} key={index} className="">
              <div
                class="card bg-white border border-1  rounded-0"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <div
                  className="p-3 pb-0"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <Image
                    src={items.image}
                    alt="image "
                    className="img-fluid bg-white"
                  />
                </div>
                <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
                  <div className="text-body-secondary mb-2  d-flex justify-content-between">
                    <small className="fw-semibold" style={{ color: "#895D2B" }}>
                      Eco-friendly home scents
                    </small>
                    <small>May 30, 2023</small>
                  </div>
                  <h4
                    class="fw-normal pt-2 blogtitle"
                    style={{ color: "#525252", lineHeight: "140%" }}
                  >
                    {items.title}
                  </h4>
                  <p class="pt-2 blogtext fw-normal">{items.body}</p>
                  <div className="pt-4 pb-3">
                    <div className="projectbutton btn  shadow-sm border border-black border-opacity-25 text-primary rounded-0">
                      <span className="p-2"> LEARN MORE </span>
                      <span className="p-2">
                        <i class="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
