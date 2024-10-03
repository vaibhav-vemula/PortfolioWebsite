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
                <h5 className="ski">Azure</h5>
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
                <h3>Master of Science in Computer Science</h3>
                <h5>Aug 2023 - Present</h5>
                <p style={{ fontSize: "20px" }}>
                  <i>The George Washington University, Washington D.C.</i>
                </p>
                <ul>
                  <li>Specialization in Machine Intelligence and Cognition</li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>B.Tech in Computer Science &amp; Engineering</h3>
                <h5>Aug 2019 - May 2023</h5>
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
                <h3>The George Washington University </h3>
                <h4>Student Research Specialist</h4>

                <h5>Sep 2024 - Present</h5>
                <p>
                  <em>Washington, DC</em>
                </p>
                <ul>
                  <li>
                  Engaging under Dr. Kelvin Fong at LEAPH Lab, utilizing GIS and satellite remote sensing to assess environmental exposures, including air pollution, extreme temperatures, and green space in communities.
                  </li>
                  <li>
                  Building an interactive application to visualize park greenness index across all 50 US states for GIS-based Data Analysis.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>The George Washington University </h3>
                <h4>Graduate Research Assistant </h4>

                <h5>May 2024 - Present</h5>
                <p>
                  <em>Washington, DC</em>
                </p>
                <ul>
                  <li>
                  Collaborating with Dr. Jin Fang to design and develop a scalable educational platform for over 1000 children, implementing a comprehensive database, user interface, and server-side logic.
                  </li>
                  <li>
                  Automating testing for React and Flask frameworks, focusing on high performance, scalability, quality assurance, secure authentication, and an intuitive user experience to improve learning outcomes.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Bosch Global Software Technologies (BGSW)</h3>
                <h4>Research and Development Intern</h4>

                <h5>Jan 2023 - May 2023</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                  Developed and managed comprehensive MLOps pipelines on Azure Machine Learning, automating model training, evaluation, and deployment, resulting in a 30% reduction in deployment time for 5 robust deep learning models; presented these innovations at a company project showcase to the CEO and executives from Germany and Bangalore.
                  </li>
                  <li>
                    Leveraged Azure Machine Learning pipelines and workflows to
                    orchestrate and automate the model training, evaluation, and
                    deployment process, ensuring reproducibility and version
                    control.
                  </li>
                  <li>
                  Implemented scalable deployment solutions with Azure Container Instances and integrated MLOps pipeline architecture with a React frontend and Flask API for user-friendly interactions.
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
                <h3>Bosch Global Software Technologies (BGSW)</h3>
                <h4>Research and Development Intern</h4>

                <h5>June 2022 - July 2022</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    Worked with various deep learning models, architectures and
                    strategies for pedestrian detection and segmentation in the
                    Autonomous Driving (AD) domain.
                  </li>
                  <li>
                    Researched and implemented various ensemble learning
                    techniques for object detection and segmentation.
                  </li>
                  <li>
                    Constructed MLOps pipeline and developed a visualisation
                    dashboard using MLflow to better analyse metrics.
                  </li>
                  <li>
                    Technologies used - PyTorch, Tensorflow, OpenCV, MLOps,
                    MLFlow, DVC, Python
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h3>PESU Venture Labs</h3>
                <h4>Product Developer</h4>

                <h5>Oct 2021 – June 2022</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    Collaborated with clients to create applications that are
                    released for public use.
                  </li>
                  <li>
                    Developed applications from the ground up for two startups,{" "}
                    <a
                      href="https://seminarroom.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <u>
                        <b>seminarroom.in</b>
                      </u>
                    </a>
                    , and{" "}
                    <u>
                      <b>Senior Central</b>
                    </u>
                  </li>
                  <li>
                    Successfully integrated video streaming service and payment
                    gateway and scaled the architecture for 7000+ users.
                  </li>
                  <li>
                    Developed a multipurpose backend architecture. Designed and
                    implemented SQL database using PostgreSQL.
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
                <h5>Nov 2021 – Nov 2022</h5>
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
                    Leading a team of 30 motivated people and successfully
                    conducted 6 technical events, workshops and
                    multidisciplinary initiatives that helped 500+ students in
                    learning new skills.
                  </li>
                  <li>Mentored 5 teams to complete their research project.</li>
                  <li>
                    Played a pivotal role in organising a 24Hr Bangalore Level
                    Hackathon,{" "}
                    <a
                      href="https://siliconrush.ieeecspesu.tech"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Silicon Rush
                    </a>
                  </li>
                  <li>
                    Built a search engine with open source tools to keep track
                    of the web searches performed throughout the hackathon.
                  </li>
                  <li>
                    Actively participating in IEEE Computer Society webinars and
                    events.
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
                    Developed a mobile app with 2000+ downloads across iOS and
                    Android that allows users to measure their water footprint,
                    complete challenges, and learn more about water waste.
                  </li>
                  <li>
                    Working with UNICEF India to track and evaluate student
                    water consumption across India’s state of Maharashtra.
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
                <h3>PESU IO</h3>
                <h4>Executive</h4>
                <h5>Mar 2021 – Oct 2022</h5>
                <p>
                  <em>Bangalore, India</em>
                </p>
                <ul>
                  <li>
                    PESU I/O is India’s first and only peer to peer
                    collaborative platform by PES University.
                    <a
                      href="https://pesu.io/home/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      pesu.io/home
                    </a>
                  </li>
                  <li>
                    Collaborated with team members using version control systems
                    such as Git to organize modifications and assign tasks.
                  </li>
                  <li>
                    Successfully integrated payment gateway and working with
                    internal and external APIs. Implemented enhancements that
                    improved application functionality and responsiveness.
                    scaled the infrastructure to support 5000+ concurrent users.
                  </li>
                  <li>
                    Worked on revamp of the website using NuxtJS, TailwindCSS.
                    Building APIs and maintaining backend using NodeJS and
                    ExpressJS.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Team Aeolus – IARC</h3>
                <h4>Core team member</h4>
                <h5>Sep 2019 – July 2022</h5>
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
                    Developed an obstacle avoidance system for drones to solve a
                    challenging task given by IARC Mission 9.
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
