import Image from "next/image";
import React, { useState } from "react";
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
  const [limit, setLimit] = useState(4);
  const handleShowMore = () => {
    setLimit(limit + 4);
  };
  console.log("this", data);
  //   const name = servi.BIM;
  //   console.log("name is ", name);
  return (
    <Row>
      {data?.slice(0, limit)?.map((items, index) => (
        <div
          key={items.id}
          className={`col-md-12 mt-5 col-lg-12  ${
            index % 2 === 0
              ? "d-sm-flex d-grid flex-row gap-1 "
              : "d-sm-flex d-grid  flex-row-reverse gap-1"
          }`}
        >
          <div className="col-md-7 col-lg-7 col-sm-12">
            <Image
              src={items.image1}
              className="img-fluid"
              alt="portfolio images"
              width={0}
              height={0}
            />
          </div>
          <div
            className={`col-md-5 p-0 col-sm-12 col-lg-5 ${
              index % 2 === 0 ? "ps-3 " : "pe-3"
            }`}
          >
            <Image
              src={items.image2}
              className="img-fluid"
              alt="portfolio images"
              width={0}
              height={0}
            />
            <div className="mt-4 ">
              <h3 className="fw-normal">MODERN CONTEMPORARY HOUSE</h3>
              <h4 className="fw-medium pb-1">RESIDENTIAL </h4>
              <div className="pt-4">
                {" "}
                <div className="projectbutton  btn p-2 shadow-sm border border-black border-opacity-25 text-primary rounded-0">
                  <span className="p-2 fw-medium" style={{ fontSize: "16px" }}>
                    {" "}
                    LEARN MORE{" "}
                  </span>
                  <span className="p-1 ps-1">
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {data?.length > limit && (
        <div className="d-flex justify-content-center mt-5">
          <button
            className="btn btn-secondary px-5 py-3 fw-normal"
            onClick={handleShowMore}
          >
            Load More
            <i className="bi bi-arrow-right ms-2" />
          </button>
        </div>
      )}
    </Row>
  );
};

export default Portfolios;
