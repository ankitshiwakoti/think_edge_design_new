import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

function TopHeader() {
  return (
    <header className="" style={{ position: "sticky" }}>
      <section className="d-flex justify-content-between align-items-center py-1 bg-light">
        <Container>
          <Row className="d-flex mx-auto align-items-center">
            <Col className="col-12 col-sm-8 col-md-7 col-lg-6 d-flex justify-content-center justify-content-sm-start align-items-center">
              <span>
                <Link
                  href="https://api.whatsapp.com/send?phone=61482070864 "
                  className="navhov"
                  target="_blank"
                >
                  +61 482 070 864
                </Link>
              </span>{" "}
              &nbsp;|&nbsp;{" "}
              <span>
                <Link
                  className="navhov"
                  href="mailto:info@cdrforengineer.com"
                  target="_blank"
                >
                  info@cdrforengineer.com
                </Link>
              </span>
            </Col>

            <Col className="col-12 col-sm-4 col-md-5 col-lg-6 mt-2 mt-sm-0 social-links">
              <div className=" d-flex justify-content-sm-end justify-content-center align-items-center">
                <Link
                  className="facebook-icon"
                  href="https://www.facebook.com/cdrforengineer001"
                  target="_blank"
                >
                  <i className="bi bi-facebook fs-5 pointer navhov" />
                </Link>
                <Link
                  className="linkedin-icon"
                  href="https://www.linkedin.com/company/cdr-for-engineer/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin fs-5 pointer navhov mx-4" />
                </Link>
                <Link
                  className="twitter-icon"
                  href="https://www.twitter.com/CdrSkill"
                  target="_blank"
                >
                  <i className="bi bi-twitter fs-5 pointer navhov" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </header>
  );
}

export default TopHeader;
