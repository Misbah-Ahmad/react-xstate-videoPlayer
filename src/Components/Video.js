import React, { useRef } from "react";
import "../App.css";

import { machineEvents } from "../Machines/VideoMachine";
const Video = ({ send, current }) => {
  const ref = useRef(null);

  return (
    <video
      ref={ref}
      onCanPlay={() => send(machineEvents.LOADED, { video: ref.current })}
      onPlay={() => send(machineEvents.PLAY)}
      onPause={() => send(machineEvents.PAUSE)}
      onError={() => send(machineEvents.FAILED)}
      onTimeUpdate={() => send(machineEvents.TIMING)}
      onEnded={() => {send(machineEvents.END); console.log("ENDED");}}
      controls
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
