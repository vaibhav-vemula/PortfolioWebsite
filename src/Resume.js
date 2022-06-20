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
                target="_blank"
                rel="noopener noreferrer"
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
                <h5 className="ski">Python</h5>
                <h5 className="ski">JavaScript</h5>
                <h5 className="ski">C/C++</h5>
                <h5 className="ski">ReactJS</h5>
                <h5 className="ski">NextJS</h5>
                <h5 className="ski">VueJS</h5>
                <h5 className="ski">NuxtJS</h5>
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
                <h5 className="ski">Android</h5>
                <h5 className="ski">Blockchain</h5>
              </div>
            </div>
          </div>

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
                  <li>
                    Specialization in Machine Intelligence and Data
                    Science(MIDS)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr data-aos="fade-up" data-aos-duration="1500" className="hhhh" />

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <h3 className="resume-title">EXPERIENCE</h3>

              <div className="resume-item">
                <h3>PESU Venture Labs</h3>
                <h4>Product Developer</h4>

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
                rel="noopener noreferrer"
                    >
                      pesuventurelabs.com
                    </a>
                  </li>
                  <h5 style={{ "textDecoration": "underline" }}>
                    Seminar Room -
                  </h5>
                  <li>Worked on a product for a company named Seminar Room.</li>
                  <li>
                    Developed an application for hosting industrial
                    seminars/sessions and successfully integrated video
                    streaming service and payment gateway.
                  </li>
                  <li>
                    Implemented enhancements that improved application
                    functionality and responsiveness.
                  </li>
                  <li>
                    Responsible for implementing new features and maintaining
                    seminar room application.
                  </li>
                  <li>
                    Technologies used - ReactJS, NextJS, TailwindCSS, NodeJS,
                    AWS and MySQL.
                  </li>
                  <h5 style={{ "textDecoration": "underline" }}>
                    Senior Central -
                  </h5>
                  <li>
                    Working on a product for a Start Up named Senior Central.
                  </li>
                  <li>
                    Developing a multipurpose backend framework. Designed and
                    implemented SQL database using PostgreSQL.
                  </li>
                  <li>Designed and architected features from the ground up.</li>
                  <li>
                    Managing backend development, creating server and APIs.
                  </li>
                  <li>Technologies used - NodeJS, ExpressJS, PostgreSQL</li>
                  <li>
                    Collaborated with front end team to ensure the backend
                    server and database were accessed easily and precisely.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6 temppp"
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="2000"
            >
              <div className="resume-item">
                <h3>Centre for Robotics, Automation and Intelligent Systems</h3>
                <h4>Research Intern</h4>

                <h5>June 2021 - Sep 2021</h5>
                <p>
                  <em>PES University</em>
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
              <div className="resume-item">
                <h3>PESU IO</h3>
                <h4>Executive</h4>

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
                    Successfully integrated payment gateway and working with
                    internal and external APIs.Implemented enhancements that
                    improved application functionality and responsiveness.
                  </li>
                  <li>
                    Working on redesign/revamp of the website using NuxtJS,
                    TailwindCSS. Building APIs and maintaining backend using
                    NodeJS and ExpressJS.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr data-aos="fade-up" data-aos-duration="1500" className="hhhh" />
          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <h3 className="resume-title">POSITIONS OF RESPONSIBILITY</h3>

              <div className="resume-item">
                <h3>IEEE Computer Society, PES University</h3>
                <h4>Student Vice Chair</h4>
                <h5>Nov 2021 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    <a
                      href="https://ieeecspesu.tech"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ieeecspesu.tech
                    </a>
                  </li>
                  <li>
                    Founding member of IEEE Computer Society Student Branch
                    Chapter in PES University.
                  </li>
                  <li>
                    Organizing workshops, technical events, and
                    interdisciplinary initiatives to promote and leverage the
                    Computer Science culture on campus.
                  </li>
                  <li>
                    Building community of students from all circuit branches in
                    the university to share ideas and upscale their technical
                    skills.
                  </li>
                  <li>
                    Actively participating in IEEE Computer Society webinars and
                    events.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Team Aeolus – IARC</h3>
                <h4>Core team member</h4>
                <h5>Sep 2019 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    IARC domain of Team Aeolus is focused to participate in the
                    Mission 9 of International Aerial Robotics Competition(IARC)
                    held annually in Atlanta, USA.{" "}
                    <a
                      href="http://www.aerialroboticscompetition.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      aerialroboticscompetition.org
                    </a>
                  </li>
                  <li>
                    Working under the obstacle avoidance and computer vision
                    domain and developed an obstacle avoidance system for
                    drones.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6 temppp"
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="2000"
            >
              <div className="resume-item">
                <h3>Equinox - The Space Club of PES University</h3>
                <h4>Team lead for Navigation and Autonomy domain</h4>
                <h5>Mar 2020 – Present</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    Equinox Projects domain of Equinox is focused on competing
                    in the International Rover Challenge(IRC) and University
                    Rover Challenge(URC).
                  </li>
                  <li>
                    Developed a Semi-Guided autonomous navigation system for
                    MARS rover prototype.
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
