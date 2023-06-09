import dynamic from "next/dynamic";
import React, { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"));
import "react-modal-video/css/modal-video.css";

const Video = ({ video_url, video_type, image }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel={video_type}
          autoplay
          isOpen={isOpen}
          videoId={video_url}
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
