import React from 'react';
import { FaFileDownload } from "react-icons/fa";

function Resume(){
    return(
        <>
        <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">

             <div className='bbb'>
                <a href="https://drive.google.com/drive/folders/1UjnYTGz0BNKj08DPXdTCuM7hrPBgtBhH?usp=sharing" className="btnn btn-2 btn-2h"> <FaFileDownload size='30'/> &nbsp;Download Resume</a>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" >
             <h2>Technical Skills </h2><br/>
            <div className='col-lg-12'>
              <h5 className='ski'>C++</h5>
              <h5 className='ski'>C</h5>
              <h5 className='ski'>Python</h5>
              <h5 className='ski'>JavaScript</h5>
              <h5 className='ski'>ReactJS</h5>
              <h5 className='ski'>VueJS</h5>
              <h5 className='ski'>NodeJS</h5>
              <h5 className='ski'>ExpressJS</h5>
              <h5 className='ski'>MongoDB</h5>
              <h5 className='ski'>PostgreSQL</h5>
              <h5 className='ski'>Machine Learning</h5>
              <h5 className='ski'>Tensorflow</h5>
              <h5 className='ski'>Data Science</h5>
              <h5 className='ski'>Flutter</h5>
              <h5 className='ski'>Android/iOS App Development</h5>
              <h5 className='ski'>Git</h5>
             

          </div>
        </div>
        </div>

     
        <br/>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up-right" data-aos-duration="1500">
            

            <h3 className="resume-title">EDUCATION</h3>
            <div className="resume-item">
              <h3>B.Tech in Computer Science &amp; Engineering</h3>
              <h5>2019 - Present</h5>
              <p style={{fontSize:'20px'}}><i>PES University, Bangalore, India</i></p>
              <ul>
                <li>CGPA – 8.13 / 10.00</li>
                <li>Received Distinction Award</li>
              </ul>
            </div>

            <h3 className="resume-title">EXPERIENCE</h3>

            <div className="resume-item">
              <h3>Research Intern</h3>
              <h4>Center for Cloud Computing and Big Data (CCBD), <br></br>PES University</h4>
              <h5>June 2021 - Present</h5>
              <p><em>Bangalore, India </em></p>
              <ul>
                <li><a href='http://research.pes.edu/cloud-computing-big-data/' target="_blank" rel="noreferrer">research.pes.edu/ccbd</a></li>
                <li>Researching and developing optimised algorithms for Synthetic Polygon Generation with varieties of data distributions and spatial attributes.</li>
                <li>Generating polygon datasets - exhibiting spatial properties of Real-world LULC cases.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Web Developer</h3>
              <h4>PESU IO</h4>
              <h5>Mar 2021 – Present</h5>
              <p><em>Bangalore, India</em></p>
              <ul>
                <li>PESU I/O is India's first and only peer to peer collaborative platform by PES University. <a href='https://pesu.io/home' target="_blank" rel="noreferrer">pesu.io/home</a></li>
                <li>Assisted in developing and maintaining applications of PESU IO.</li>
                <li>Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.</li>
                <li>Working on redesign of the website using NuxtJS, TailwindCSS. Building APIs and maintaining backend using NodeJS and ExpressJS.</li>
              </ul>
              
            </div>
          </div>


          <div className="col-lg-6" data-aos="fade-up-left" data-aos-delay="100" data-aos-duration="2000">
           
          <div className="resume-item">
              <h3>Research Intern</h3>
              <h4>Parallel Systems Research Lab (PSRL), PES University</h4>
              <h5>June 2020 - Aug 2020</h5>
              <p><em>Bangalore, India </em></p>
              <ul>
                <li>Collaborated with team members to initiate best practices to achieve organizational goals.</li>
                <li>Designed and executed Semi-Guided Autonomous Navigation System for Mars Rover Prototype (Marvin- Eye). Complete dependence on Computer Vision and Machine Learning algorithms for guidance of the rover.</li>
                <li>Wrote research papers, reports, reviews and summaries.</li>
              </ul>
            </div>

            <h3 className="resume-title"> POSITIONS OF RESPONSIBILITY</h3>

            <div className="resume-item">
              <h3>Core Team Member</h3>
              <h4>Aeolus – IARC, PES University</h4>
              <h5>Oct 2019 – Present</h5>
              <p><em>Bangalore, India</em></p>
              <ul>
                <li><a href='https://aeolus.pes.edu' target="_blank" rel="noreferrer">aeolus.pes.edu</a></li>
                <li>IARC domain of Team Aeolus is aimed to participate in the AUVSI- IARC held annually.</li>
                <li>Working under the obstacle avoidance and computer vision domain.</li> 
                <li>Researching various Machine Learning algorithms and developing new insights for object detection on drones using combinations of stereo cameras and LIDAR for simultaneous localization and mapping.</li>
              </ul>
            </div>

           
            <div className="resume-item">
              <h3>Project Member</h3>
              <h4>Equinox-The Space Club of PES University</h4>
              <h5>Mar 2020 – Present</h5>
              <p><em>Bangalore, India</em></p>
              <ul>
                <li>Equinox Projects domain of Equinox is focused to participate in the International Rover Challenge(IRC) and University Rover Challenge(URC).</li>
                <li>Working under the Navigation and Autonomy domain and developed a Semi-Guided autonomous navigation system for MARS rover.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
        </>
    );

}

export default Resume