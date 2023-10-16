import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className="container-fluid bg-white fixed-top">
        <div className="row p-3">
          <div className="col">
            <span className="logo">
              <img src={logo} alt="CCDb Logo" />
            </span>
            <span className="material-symbols-outlined">menu</span>
          </div>
          <div className="col-6 justify-content-end">
            <form class="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
          <div className="col d-flex">
            <span class="material-symbols-outlined">account_circle</span>
            <span>Username</span>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
