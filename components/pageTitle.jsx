import React from "react";

const PageTitle = ({ title, time, marked, image }) => {
  return (
    <div
      className="page-title pt80"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="page-title-content">
              <span className="marked">&nbsp;</span>
              <h1>{title}</h1>
              <p suppressHydrationWarning={true}>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
