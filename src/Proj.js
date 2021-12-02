import React from "react";

function Proj(props) {
  return (
    <>
      <a href={props.data.link} style={{ textDecoration: "none" }}>
        <div
          className="grid__item"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <div className="card">
            <img
              className="card__img"
              src={props.data.imgsrc}
              alt="Gaming Room"
            />
            <div className="card__content">
              <h1 className="card__header">{props.data.title}</h1>
              <p className="card__text">{props.data.subtitle}</p>
              <div className="prof"></div>
              <p href={props.data.link} className="card__btn">
                Explore<span>&rarr;</span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Proj;
