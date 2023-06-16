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
      " A Definitive Guide On how To hire An Interior Designer For Your HomeWho We Are",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: blog1,
  },
  {
    id: 2,
    title:
      " A Definitive Guide On how To hire An Interior Designer For Your HomeWho We Are",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: blog2,
  },
  {
    id: 3,
    title:
      " A Definitive Guide On how To hire An Interior Designer For Your HomeWho We Are",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section>
      <Container>
        <Row className="d-flex justify-content-between mb-5">
          <div className=" justify-content-start col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <h2 className=" fw-medium text-uppercase">Blog post </h2>
          </div>

          <div className="d-flex justify-content-end col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <button className="blogbtn  rounded-0  shadow-lg btn btn-white">
              VIEW ALL PROJECTS
              <span className="p-2 ">
                <i class="bi bi-arrow-right"></i>
              </span>
            </button>
          </div>
        </Row>

        <Row>
          {data?.map((items, index) => (
            <Col xs={12} sm={6} md={6} lg={4} key={index}>
              <div class="card bg-lightwhite shadow">
                <div className="p-3 pb-1">
                  <Image src={items.image} alt="image " className="img-fluid" />
                </div>
                <div class="card-body">
                  <div className="text-secondary mb-2  d-flex justify-content-between">
                    <small>Eco-friendly home scents</small>
                    <small>May 30, 2023</small>
                  </div>
                  <h3 class=" fw-light ">{items.title}</h3>
                  <p class=" blogtext">{items.body}</p>
                  <div className="pt-2">
                    <button className=" blogbtn btn  shadow-sm border border-black border-opacity-25 text-primary rounded-0">
                      LEARN MORE
                      <span className="p-2">
                        <i class="bi bi-arrow-right"></i>
                      </span>
                    </button>
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
