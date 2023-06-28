import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";
import Bim11 from "../../public/assets/portfolio/Bim1-1.png";
import Bim12 from "../../public/assets/portfolio/Bim1-2.png";
import Auto11 from "../../public/assets/portfolio/Auto1-1.png";
import Auto12 from "../../public/assets/portfolio/Auto1-2.png";

// const initialValues = {
//   textField: [
//     {
//       fullName: "",

//       email: "",
//       message: "",
//     },
//   ],
// };

const servi = {
  BIM: [
    {
      id: 1,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 1,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 2,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 3,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 4,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 5,
      image1: "Bim11",
      image2: "Bim12",
    },
  ],
  AutoCAD: [
    {
      id: 1,
      image1: "Auto11",
      image2: "Auto12",
    },
    {
      id: 1,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 2,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 3,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 4,
      image1: "Bim11",
      image2: "Bim12",
    },
    {
      id: 5,
      image1: "Bim11",
      image2: "Bim12",
    },
  ],
};

const Portfolios = ({ data }) => {
  console.log("this", data);
  //   const name = servi.BIM;
  //   console.log("name is ", name);
  return (
    <Row>
      {data.map((items, index) => (
        <div
          key={items.id}
          className={`col-md-12 mt-5 col-lg-12 ${
            index % 2 === 0
              ? "d-flex flex-row gap-1 "
              : "d-flex flex-row-reverse gap-1"
          }`}
        >
          <div className="col-md-7 col-lg-7">
            <Image
              src={items.image1}
              className="img-fluid"
              alt="portfolio images"
              width={0}
              height={0}
            />
          </div>
          <div className="col-md-5 p-3 pt-0 pb-0 col-lg-5">
            <Image
              src={items.image2}
              className="img-fluid"
              alt="portfolio images"
              width={0}
              height={0}
            />
            <div className="mt-3">
              <h3 className="fw-medium">MODERN CONTEMPORARY HOUSE</h3>
              <p className="fw-normal">RESIDENTIAL </p>
              <div className="pt-3 pb-2">
                <div className="projectbutton btn  shadow-sm border border-black border-opacity-25 text-primary rounded-0">
                  <span className="p-2"> LEARN MORE </span>
                  <span className="p-2">
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default Portfolios;
