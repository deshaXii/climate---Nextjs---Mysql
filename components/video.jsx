import dynamic from "next/dynamic";
import React, { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"));
import "react-modal-video/css/modal-video.css";

const Video = ({ data, vide_url, image }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={vide_url}
          onClose={() => setOpen(false)}
        />
      )}
      <section
        className="video pt80"
        style={{ backgroundImage: `url(/uploads/${image})` }}
      >
        <div className="video-play-btn">
          <button
            className="video-play"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            <i className="fa fa-play"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default Video;
