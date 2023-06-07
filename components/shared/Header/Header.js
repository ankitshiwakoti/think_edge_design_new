import React from "react";

const Header = () => {
  return (
    <section className=" mb-5 pb-3">
      <nav
        className="scroll-bounce navbar navbar-expand-lg pt-4 fixed-top"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/png;base64,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"
              alt="Logo"
              width="30"
              height="50"
              className="d-inline-block align-text-buttom"
            />
            <span className="mt-5"> Think Edge Design</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                THINK EDGE DESIGN
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" style={{ fontSize: "16px" }}>
              <div className="navbar-nav justify-content-end flex-grow-1 gap-2 pe-3">
                <div className="  nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    <span className="navhov pb-4" style={{ color: "#ABABAB" }}>
                      HOME
                    </span>
                  </a>
                </div>

                <div className="nav-item dropdown">
                  <a
                    className="nav-link  "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className=" pb-4" style={{ color: "#ABABAB" }}>
                      SERVICES <i className="bi bi-chevron-down"> </i>
                    </span>
                  </a>
                  <div className=" dropdown-content dropdown-menu  rounded-0 p-0">
                    <div className="border-bottom">
                      <a className=" drophov dropdown-item" href="#">
                        BIM Modelling
                      </a>
                    </div>
                    <div className="border-bottom">
                      <a className=" drophov dropdown-item" href="#">
                        BIM Modelling
                      </a>
                    </div>
                    <div className="border-bottom">
                      <a className="drophov dropdown-item" href="#">
                        BIM Modelling
                      </a>
                    </div>
                    <div className="border-bottom">
                      <a className="drophov dropdown-item" href="#">
                        BIM Modelling
                      </a>
                    </div>
                    <div className="border-bottom">
                      <a className="drophov dropdown-item" href="#">
                        BIM Modelling
                      </a>
                    </div>
                    <div className="border-bottom">
                      <a className="drophov dropdown-item" href="#">
                        BIM Modelling
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="navhov pb-4" style={{ color: "#ABABAB" }}>
                      ABOUT US
                    </span>
                  </a>
                </div>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link navhov pb-4"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#ABABAB" }}
                  >
                    <span className=""> BLOGS </span>

                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className="dropdown-menu">
                    <div>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                    <div>
                      <hr className="dropdown-divider" />
                    </div>
                    <div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                {" "}
                <button className=" nabbtnhov px-4 btn  rounded-0 bg-primary">
                  <span style={{ color: "#FAFAFA" }}>CONTACT US</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
