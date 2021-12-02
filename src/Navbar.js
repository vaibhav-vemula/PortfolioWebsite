import React from "react";
import pp from "./img/pp.jpg";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="d-flex flex-column">
          <h1 className="po">PORTFOLIO</h1>
          <div className="profile">
            <img src={pp} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="/">Vaibhav Vemula</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://www.instagram.com/vaibhaaaavvv/"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://linkedin.com/in/vaibhavvemula/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/vaibhav-vemula" className="linkedin">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://twitter.com/vaibhaaaavvv" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>

          <nav className="navbar nav-menu navbar">
            <ul>
              <li>
                <Link
                  activeclass="true"
                  to="hero"
                  spy={true}
                  className="nav-link scrollto"
                >
                  <i className="bx bx-home"></i> <span>Home()</span>
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About()</span>
                </Link>
              </li>
              <li>
                <Link to="resume" spy={true} className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume()</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Projects()</span>
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact()</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
