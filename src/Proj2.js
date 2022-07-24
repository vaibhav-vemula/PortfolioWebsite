import React from "react";

function Proj2(props) {
  return (
    <>
      
      <div className="grid__item"
          data-aos="flip-right"
          data-aos-duration="1500" class="proj2">
      <img class="proj3" height={200} src={props.data.imgsrc} alt="Sunset in the mountains" />
        <div class="proj4">
          <div class="proj5">{props.data.title}</div>
          {props.data.subtitle.map((data, key)=>{
            return <p class="proj6" key={key}>
            {data}
          </p>
          })}
        </div>
        <div class="proj44">
          {props.data.tags.map((data,key)=>{
            return <span class="proj7">{data}</span>
          })}
        </div>
      </div>
    </>
  );
}

export default Proj2;
