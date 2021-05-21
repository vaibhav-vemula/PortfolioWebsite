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
              <h5 className='ski'>C</h5>
              <h5 className='ski'>C++</h5>
              <h5 className='ski'>JavaScript</h5>
              <h5 className='ski'>Python</h5>
              <h5 className='ski'>Java</h5>
              <h5 className='ski'>Swift</h5>
              <h5 className='ski'>Flutter</h5>
              <h5 className='ski'>HTML</h5>
              <h5 className='ski'>CSS</h5>
              <h5 className='ski'>ReactJS</h5>
              <h5 className='ski'>NodeJS</h5>
              <h5 className='ski'>ExpressJS</h5>
              <h5 className='ski'>MongoDB</h5>
              <h5 className='ski'>PostgreSQL</h5>
              <h5 className='ski'>Machine Learning</h5>
             <h5 className='ski'>Arduino</h5>

          </div>
        </div>
        </div>

     
        <br/>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up-right" data-aos-duration="1500">
            

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h3>B.Tech in Computer Science &amp; Engineering</h3>
              <h5>2019 - Present</h5>
              <p style={{fontSize:'20px'}}><i>PES University, Bangalore, India</i></p>
              <ul>
                <li>CGPA – 8.03/10.00</li>
                <li>Received Distinction Award</li>
              </ul>
            </div>

            <h3 className="resume-title"> Experience</h3>
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
          </div>


          <div className="col-lg-6" data-aos="fade-up-left" data-aos-delay="100" data-aos-duration="2000">
           
            <div className="resume-item">
              <h3>Core Team Member</h3>
              <h4>Aeolus – IARC, PES University</h4>
              <h5>Oct 2019 – Present</h5>
              <p><em>Bangalore, India</em></p>
              <ul>
                <li>IARC division of Team Aeolus is focused on participating in the AUVSI-IARC.</li>
                <li>Working under the obstacle avoidance and computer vision domain.</li> 
                <li>Researching various algorithms to provide best result.</li>
                <li>Using combinations of LIDAR and 3D and Stereo cameras for simultaneous localization and mapping.</li>
                <li>Developing new insights for object detection on drones.</li>
              </ul>
            </div>

           
            <div className="resume-item">
              <h3>Project Member</h3>
              <h4>Equinox-The Space Club of PES University</h4>
              <h5>Mar 2020 – Present</h5>
              <p><em>Bangalore, India</em></p>
              <ul>
                <li>Equinox Projects division of Equinox-The Space Club is focused on participating in Indian Rover Challenge and University Rover Challenge.</li>
                <li>Working under Navigation and Autonomy domain for autonomous navigation of the rover.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Web Development Intern</h3>
              <h4>PESU IO</h4>
              <h5>Mar 2021 – Present</h5>
              <p><em>Bangalore, India</em></p>
              <ul>
                <li>Developing and maintaining products (websites) of PESU IO.</li>
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