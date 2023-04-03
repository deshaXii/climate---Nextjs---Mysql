import React from "react";

const Video = ({data}) => {
  return (
    <section
      className="video pt80"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <div className="video-play-btn">
        <button className="video-play">
          <i className="fa fa-play"></i>
        </button>
      </div>
    </section>
  );
};

export default Video;
