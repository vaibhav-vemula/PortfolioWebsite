import React from "react";
// import pp from "./img/pp.jpg";
import vv from "./img/vaibhav.png"

function About() {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p className="foo" data-aos="fade-in">
            I am an energetic and ambitious person who has developed a mature
            and responsible approach to any task that i undertake. I am a
            hardcore <strong>programming</strong> and{" "}
            <strong>technology</strong> enthusiast.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-4"
            data-aos="fade-up-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src={vv} className="iii " alt="sdcs" height={10}/>
          </div>
          <div
            className="col-lg-8 pt-4 pt-lg-0 content"
            data-aos="fade-up-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h3>Computer Science &amp; Engineering</h3>
            <h4>PES University</h4>
            <br />
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.vaibhavvemula.me</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+91 7619229838</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Location:</strong>
                    <span>Bangalore, India</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>21</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>B.Tech</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span>
                      vaibhav25vemula23@gmail.com <br />
                      vemulavaibhav@pesu.pes.edu
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sss ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/vaibhaaaavvv/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/vaibhavvemula/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/vaibhav-vemula"
                  className="linkedin"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/vaibhaaaavvv"
                  className="twitter"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
