import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import who1 from "../../public/assets/footerbackground.jpg";

const Blog = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={4}>
            <div class="card bg-lightwhite shadow">
              <div className="p-3">
                <Image src={who1} alt="image " className="img-fluid" />
              </div>
              <div class="card-body">
                <div
                  className="text-secondary  d-flex justify-content-between"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  <p>Eco-friendly home scents</p>
                  <p>May 30, 2023</p>
                </div>
                <p class="blogtitle ">
                  A Definitive Guide On how To hire An Interior Designer For
                  Your Home{" "}
                </p>
                <p
                  class="card-text blogtext"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button className="btn border text-primary rounded-0">
                  LEARN MORE
                  <span className="p-2 ">
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
