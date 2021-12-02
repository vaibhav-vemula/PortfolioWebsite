import React from "react";
import { FaFileDownload } from "react-icons/fa";

function Resume() {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row skills-content">
            <div
              className="col-lg-6"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="bbb">
                <a
                  href="https://drive.google.com/drive/folders/1UjnYTGz0BNKj08DPXdTCuM7hrPBgtBhH?usp=sharing"
                  className="btnn btn-2 btn-2h"
                >
                  {" "}
                  <FaFileDownload size="30" /> &nbsp;Download Resume
                </a>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h2>Technical Skills </h2>
              <br />
              <div className="col-lg-12">
                <h5 className="ski">C++</h5>
                <h5 className="ski">C</h5>
                <h5 className="ski">Python</h5>
                <h5 className="ski">JavaScript</h5>
                <h5 className="ski">ReactJS</h5>
                <h5 className="ski">VueJS</h5>
                <h5 className="ski">NodeJS</h5>
                <h5 className="ski">ExpressJS</h5>
                <h5 className="ski">MongoDB</h5>
                <h5 className="ski">PostgreSQL</h5>
                <h5 className="ski">MySQL</h5>
                <h5 className="ski">AWS</h5>
                <h5 className="ski">Flutter</h5>
                <h5 className="ski">Machine Learning</h5>
                <h5 className="ski">Tensorflow</h5>
                <h5 className="ski">Git</h5>
                <h5 className="ski">Android / iOS App Development</h5>
                
              </div>
            </div>
          </div>

          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <h3 className="resume-title">EDUCATION</h3>
              <div className="resume-item">
                <h3>B.Tech in Computer Science &amp; Engineering</h3>
                <h5>2019 - Present</h5>
                <p style={{ fontSize: "20px" }}>
                  <i>PES University, Bangalore, India</i>
                </p>
                <ul>
                  <li>Received Distinction Award</li>
                </ul>
              </div>

              <h3 className="resume-title">EXPERIENCE</h3>

              <div className="resume-item">
                <h3>Product Developer</h3>
                <h4>PESU Venture Labs</h4>
                <h5>Oct 2021 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    PVL is a venture studio launched under the partnership of
                    PESU and COCreate Ventures.{" "}
                    <a
                      href="https://pesuventurelabs.com/#/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      pesuventurelabs.com
                    </a>
                  </li>
                  <li>
                    Collaborated with team members using version control systems
                    such as Git to organize modifications and assign tasks.
                  </li>
                  <li>
                    Working on building a product for a startup called Seminar
                    Room.
                  </li>
                  <li>
                    Technologies used - ReactJS, NextJS, TailwindCSS, NodeJS,
                    AWS and MySQL.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Web Developer Executive</h3>
                <h4>PESU IO</h4>
                <h5>Mar 2021 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    PESU I/O is India's first and only peer to peer
                    collaborative platform by PES University.{" "}
                    <a
                      href="https://pesu.io/home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      pesu.io/home
                    </a>
                  </li>
                  <li>Developing and maintaining applications of PESU IO.</li>
                  <li>
                    Collaborated with team members using version control systems
                    such as Git to organize modifications and assign tasks.
                  </li>
                  <li>
                    Working on redesign of the website using NuxtJS,
                    TailwindCSS. Building APIs and maintaining backend using
                    NodeJS and ExpressJS.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Research Intern</h3>
                <h4>
                  Centre for Robotics, Automation and Intelligent Systems, PES
                  University
                </h4>
                <h5>Sep 2021 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    Working on a project titled Expression generation for human
                    robot interaction.
                  </li>
                  <li>
                    This project aims to build a 3D printed social humanoid
                    robot face capable of generating various human like facial
                    expressions and voice outputs based on the situations in
                    which it’s situated.
                  </li>
                  <li>
                    Researching on various Artificial intelligence, Deep
                    learning algorithms and other cloud based APIs to
                    efficiently learn, recognize, and react to different
                    situations.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="2000"
            >
              <div className="resume-item">
                <h3>Research Intern</h3>
                <h4>
                  Center for Cloud Computing and Big Data (CCBD), <br></br>PES
                  University
                </h4>
                <h5>June 2021 - Sep 2021</h5>
                <p>
                  <em>Bangalore, India </em>
                </p>
                <ul>
                  <li>
                    <a
                      href="http://research.pes.edu/cloud-computing-big-data/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      research.pes.edu/ccbd
                    </a>
                  </li>
                  <li>
                    Researched and developed optimised algorithms for Synthetic
                    Polygon Generation with varieties of data distributions and
                    spatial attributes.
                  </li>
                  <li>
                    Generated polygon datasets - exhibiting spatial properties
                    of Real-world Land Use/Land Cover(LULC) cases.
                  </li>
                </ul>
              </div>

              <h3 className="resume-title"> POSITIONS OF RESPONSIBILITY</h3>

              <div className="resume-item">
                <h3>Aeolus – IARC, PES University</h3>
                <h4>Core Team Member</h4>
                <h5>Oct 2019 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    <a
                      href="https://aeolus.pes.edu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      aeolus.pes.edu
                    </a>
                  </li>
                  <li>
                    IARC domain of Team Aeolus is aimed to participate in the
                    AUVSI- IARC held annually.
                  </li>
                  <li>
                    Working under the obstacle avoidance and computer vision
                    domain.
                  </li>
                  <li>
                    Researching various Machine Learning algorithms and
                    developing new insights for object detection on drones using
                    combinations of stereo cameras and LIDAR for simultaneous
                    localization and mapping.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Equinox - The Space Club of PES University</h3>
                <h4>Team lead for Navigation and Autonomy domain</h4>
                <h5>Mar 2020 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    Equinox Projects domain of Equinox is focused to participate
                    in the International Rover Challenge(IRC) and University
                    Rover Challenge(URC).
                  </li>
                  <li>
                    Working under the Navigation and Autonomy domain and
                    developed a Semi-Guided autonomous navigation system for
                    MARS rover.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Why Waste?</h3>
                <h4>Core app developer</h4>
                <h5>Sep 2021 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    “Why Waste?” is a Non profit organization educating citizens
                    about creative ways to reduce water waste.&nbsp;
                    <a
                      href="https://whywaste.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      whywaste.io
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=whywasteorg.wwapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span style={{ fontSize: "35px", color: "Black" }}>
                        <i className="bx bxl-android"></i>
                      </span>
                    </a>

                    <a
                      href="https://apps.apple.com/in/app/why-waste/id1530519500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span style={{ fontSize: "35px", color: "Black" }}>
                        <i className="bx bxl-apple"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    Responsible for implementing new features and maintaining
                    Why Waste? app.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
