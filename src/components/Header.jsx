import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className="container-fluid fixed-top">
        <div className="row p-3">
          <div className="col-2">
            <span className="logo">
              <img src={logo} alt="CCDb Logo" />
            </span>
          </div>
          <div className="col-1 d-flex align-items-center">
            <span><i class="fa-solid fa-bars"></i></span>
          </div>
          <div className="col-6">
            <form class="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your favourite courses here..."
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <span><i class="fa-solid fa-circle-user"></i></span>
            <span className="username">Username</span>
            <span><i class="fa-solid fa-angle-down"></i></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
