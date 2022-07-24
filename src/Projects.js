import React from "react";
import Proj from "./Proj";
import Proj2 from "./Proj2";
import ProjectsData,{Carddata2} from "./ProjectsData";

function Projects() {
  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <h2 data-aos="fade-up" className="heeeeee">--------&nbsp;RESEARCH&nbsp;--------</h2>
          <div className="grid2">
            {Carddata2.map((data, key) => {
              return <Proj2 key={key} data={data} />;
            })}
          </div>
          <br />
          <br />
          <hr className="hhhh" />
          <br />
          <h2 data-aos="fade-up" className="heeeeee">--------&nbsp;Few Personal Projects&nbsp;--------</h2>
          <div className="grid">
            {ProjectsData.map((data, key) => {
              return <Proj key={key} data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
