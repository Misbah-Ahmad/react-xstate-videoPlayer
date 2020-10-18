import React from "react";
import "../App.css";
const Video = () => {
  return (
    <video controls>
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
