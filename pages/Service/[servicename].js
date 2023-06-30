import React from "react";
import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import { data } from "../../services.js";
import Designprocess from "@/components/Designprocess";
import Contact from "@/components/Contact";

const servicename = () => {
  const router = useRouter();
  const servicelist = router.query.servicename;

  const selectedService = data.find((service) => service.slug === servicelist);

  if (selectedService) {
    // Access sections1
    const sections1 = selectedService.sections1[0];

    // Access sections2
    const sections2 = selectedService.sections2[0];

    // Access sections3
    const sections3 = selectedService.sections3[0];

    // Access sections4
    const sections4 = selectedService.sections4[0];
    // Access sections4
    const sections5 = selectedService.sections5[0];

    return (
      <section className="serviceslug ">
        <Container fluid>
          <Row className="mt-5">
            <div className="p-0 col-md-12  col-lg-12 position-relative">
              <div>
                <Image
                  alt="portfolio banner"
                  src={sections1.banner}
                  className=" img-fluid w-100"
                />
              </div>
              <div
                className="position-absolute w-100 d-flex justify-content-center top-50 start-50 translate-middle"
                style={{ color: "white" }}
              >
                <h1>{sections1.title}</h1>
              </div>
              <div
                className="position-absolute bottom-0 start-0 mb-3"
                style={{ color: "white" }}
              >
                <p className="ms-3 fw-normal ps-5">{sections1.breadcrumb}</p>
              </div>
            </div>
          </Row>
        </Container>
        <Container className="p-0">
          <Row className="pt-5">
            <div className="col-md-12 col-lg-12 p-md-0 p-lg-0">
              <h3>{sections2.title}</h3>
              <div className="headingline"></div>
              <div>
                <p className="lh-lg pt-3">{sections2.body}</p>
                <ul class="pt-4">
                  {Object.values(sections3).map((value, index) => (
                    <li class="mb-2" key={index}>
                      {value}
                    </li>
                  ))}
                  {/* <li class="mb-2">A second item</li>
                  <li class="mb-2">A third item</li>
                  <li class="mb-2">A fourth item</li>
                  <li class="mb-2">And a fifth one</li> */}
                </ul>

                <div className="pt-4">
                  {" "}
                  <div className="projectbutton  btn p-2 shadow-sm border border-black border-opacity-25 text-primary rounded-0">
                    <span
                      className="p-2 fw-medium"
                      style={{ fontSize: "16px" }}
                    >
                      {" "}
                      START A PROJECT{" "}
                    </span>
                    <span className="p-1 ps-1">
                      <i class="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Row className="pt-5 p-0 ">
              <div className="pe-2 ps-2 p-0  col-md-5 col-lg-5">
                <Image
                  src={sections4.image1}
                  className="img-fluid "
                  alt="services image"
                />
              </div>
              <div className="p-0 ps-2 col-md-7 col-lg-7">
                <Image
                  src={sections4.image2}
                  className="img-fluid"
                  alt="services image"
                />
                <div className="pt-3 p-0 col-md-12 col-lg-12 d-flex ">
                  <div className=" d-flex pe-3 col-md-6 col-lg-6">
                    <Image
                      src={sections4.image3}
                      className="img-fluid "
                      alt="services image"
                    />
                  </div>
                  <div className=" d-flex col-md-6 col-lg-6">
                    <Image
                      src={sections4.image4}
                      className="img-fluid"
                      alt="services image"
                    />
                  </div>
                </div>
              </div>
            </Row>
            <Row className="p-0 mt-5">
              <div className=" p-0 ps-2 col-md-12 col-lg-12 position-relative">
                <Image
                  src={sections5.image1}
                  alt="image for banner"
                  className="w-100 img-fluid"
                />
                <div className="w-100 position-absolute top-50 start-50 translate-middle">
                  <marquee
                    className="  "
                    width="100%"
                    direction="right"
                    height="50px"
                  >
                    <h1 className="fw-white" style={{ color: "white" }}>
                      {" "}
                      {sections5.text}
                    </h1>
                  </marquee>
                </div>
              </div>
            </Row>
            <Designprocess />
          </Row>
        </Container>
        <Contact />
      </section>
    );
  } else {
    return (
      <div className="py-5 my-5  my-5 mx-5  d-flex justify-content-center align-items-center">
        <h1>404 page not found.</h1>
      </div>
    );
  }
};

export default servicename;
