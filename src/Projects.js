import React from 'react'
import Proj from './Proj'
import ProjectsData from './ProjectsData'

function Projects(){
    return(<>
         <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Projects</h2>
        </div>
            <div className='grid' >
            {
          ProjectsData.map((data,key)=>{
           return <Proj key={key} data={data}  />;
        })
      }
            </div>

          </div>

    </section>
    </>);
}

export default Projects