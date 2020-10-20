import React from "react";
import "../App.css";
import { machineEvents } from "../Machines/VideoMachine";

const buttonStyle = {
  width: "100px",
};

export const PlayButton = ({ current, send }) => {
  return current.matches({ success: { ready: "playing" } }) ? (
    <button style={buttonStyle} className="m-2" onClick={() => send(machineEvents.PAUSE)}>
      Pause
    </button>
  ) : (
    <button
      style={buttonStyle}
      className="m-2"
      onClick={() => {
        send(machineEvents.PLAY);
      }}
    >
      Play
    </button>
  );
};

export const VideoTimeCounter = ({ elapsed, duration }) => {
  const getMinutes = (totalSeconds) => {
    const minutes = parseInt(totalSeconds / 60);
    return minutes < 10 ? `0${minutes}` : minutes; 
  }

  const getSeconds = (totalSeconds) => {
    const seconds = parseInt(totalSeconds % 60);
    return seconds < 10 ? `0${seconds}` : seconds; 
  }

  return (
    <span className="timer m-2">
      {getMinutes(elapsed)}:{getSeconds(elapsed)} /{" "}
      {getMinutes(duration)}:{getSeconds(duration)}
    </span>
  );
};

export const MuteButton = ({ isMute, send }) => {
  return isMute ? (
    <span className="m-2">
      <button style={buttonStyle} onClick={() => send(machineEvents.UNMUTE)}>Unmute</button>
    </span>
  ) : (
    <span className="m-2">
      <button style={buttonStyle} onClick={() => send(machineEvents.MUTE)}>Mute</button>
    </span>
  );
};

export const ForwardButton = ({ send }) => {
  return (
    <span className="m-2">
      <button style={buttonStyle} onClick={() => send(machineEvents.FORWARD)}>Forward</button>
    </span>
  );
};

export const BackwardButton = ({ send }) => {
  return (
    <span className="m-2">
      <button style={buttonStyle} onClick={() => send(machineEvents.BACKWARD)}>Backward</button>
    </span>
  );
};
