import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";

import Banner from "/public/assets/Viewprojects/Banner.png";
import Vp1 from "/public/assets/Viewprojects/Vp1.png";
import Vp2 from "/public/assets/Viewprojects/Vp2.png";
import Vp3 from "/public/assets/Viewprojects/Vp3.png";
import Vp4 from "/public/assets/Viewprojects/Vp4.png";
import Vp5 from "/public/assets/Viewprojects/Vp5.png";
import Client from "@/components/Client";

const data = [
  {
    id: 1,
    images: Vp1,
  },
  {
    id: 2,
    images: Vp2,
  },
  {
    id: 3,
    images: Vp3,
  },
  {
    id: 4,
    images: Vp4,
  },
  {
    id: 5,
    images: Vp5,
  },
];

const small = [
  {
    id: 1,
    title1: "Client",
    value1: "Liquid theem",
    title2: "Date",
    value2: "2023",
    title3: "Product",
    value3: "Interior design",
  },
];

const lis = [
  {
    id: 1,
    values:
      "1. Open Concept Living: The project involves reconfiguring the existing floor plan to an open concept living area, promoting a seamless flow between the living room. ",
  },
  {
    id: 2,
    values:
      "2. Luxurious Materials and Finishes: Premium materials  be utilized throughout  project to exude a sense of elegance and sophistication.  ",
  },
  {
    id: 3,
    values:
      "3. Lighting and Ambiance: A carefully curated lighting design  play a pivotal role  enhancing the mood and functionality of each space. ",
  },
  {
    id: 4,
    values:
      "4. Customized Storage Solutions: Ample storage is a crucial aspect of any designed interior. ",
  },
];

const projectname = () => {
  const router = useRouter();
  const servicelist = router.query.servicename;
  return (
    <section>
      <Container fluid>
        <Row className="mt-5">
          <div className="p-0 col-md-12  col-lg-12 position-relative">
            <div>
              <Image
                alt="portfolio banner"
                src={Banner}
                className=" img-fluid w-100"
              />
            </div>
            <div
              className="position-absolute w-100 d-flex justify-content-center top-50 start-50 translate-middle"
              style={{ color: "white" }}
            >
              <h1>MODERN CONTEMPORY HOUSE</h1>
            </div>
            <div
              className="position-absolute bottom-0 start-0 mb-3"
              style={{ color: "white" }}
            >
              <p className="ms-3 fw-normal ps-5">Home/portfolio/Bim Modeling</p>
            </div>
          </div>
        </Row>
      </Container>

      <Container className="p-0">
        <Row className="py-5">
          <div className="col-md-12 col-lg-12 ">
            <div className="col-lg-12 col-md-12 d-flex">
              <div className="col-lg-9 col-md-9">
                <h2 className="pb-2">MODERN CONTEMPORY HOUSE</h2>
                <p className="lh-lg">
                  The Modern Elegance project aims to transform a dated and
                  lackluster house into a contemporary and sophisticated living
                  space. This comprehensive interior renovation project
                  encompasses the entire house, including the living areas,
                  bedrooms, kitchen, bathrooms, and hallway. The goal is to
                  create a harmonious blend of modern design elements,
                  functional layouts, and luxurious finishes that reflect the
                  homeowner's refined taste and lifestyle.
                </p>
              </div>
              <div className="col-md-3 col-lg-3 bg-viewproject p-3 ">
                <h4 className="py-3">Project details</h4>

                {small?.map((items, index) => (
                  <div className="d-flex justify-content-between" key={index}>
                    <div className="text-start">
                      <p>{items.title1}</p>
                      <p>{items.title2}</p>
                      <p>{items.title3}</p>
                    </div>
                    <div className="text-end">
                      <p>{items.value1}</p>
                      <p>{items.value2}</p>
                      <p>{items.value3}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <h2>Key Features </h2>
              {lis.map((items, index) => (
                <ul class="  " key={index}>
                  <li class="list-group-numbered mb-1">{items.values}</li>
                </ul>
              ))}
            </div>
          </div>
        </Row>
        {data?.map((items, index) => (
          <Row key={index} className="py-2">
            <Image
              alt="portfolio banner"
              src={items.images}
              className=" img-fluid w-100"
            />
          </Row>
        ))}
      </Container>
      <Container fluid className="py-5">
        <Client />
      </Container>
    </section>
  );
};

export default projectname;
