import React from "react";

const Intro = ({ title, subTitle, image }) => {
  console.log(`url(/uploads/${image})`);
  return (
    <div
      className="intor"
      style={{ backgroundImage: `url(/uploads/${image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="intro-content">
              <h1>{title && title}</h1>
              <h4>{subTitle && subTitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
