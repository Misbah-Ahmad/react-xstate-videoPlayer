import React, { useRef } from "react";
import "../App.css";

import { machineEvents } from "../Machines/VideoMachine";
const Video = ({ send, current }) => {
  const ref = useRef(null);

  return (
    <video
      ref={ref}
      onCanPlay={() => send(machineEvents.LOADED, { video: ref.current })}
      onError={() => send(machineEvents.FAILED)}
      onTimeUpdate={() => send(machineEvents.TIMING)}
      onEnded={() => {send(machineEvents.END); console.log("ENDED");}}
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
