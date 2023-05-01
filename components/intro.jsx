import React from "react";

const Intro = ({ title, subTitle }) => {
  return (
    <div
      className="intor"
      style={{ backgroundImage: "url(/images/intro-img.jpg)" }}
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
