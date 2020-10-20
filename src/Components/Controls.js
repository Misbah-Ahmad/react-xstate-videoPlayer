import React from "react";
import "../App.css";
import { machineEvents } from "../Machines/VideoMachine";

export const PlayButton = ({ current, send }) => {
  return current.matches({ success: { ready: "playing" } }) ? (
    <button className="m-2" onClick={() => send(machineEvents.PAUSE)}>
      Pause
    </button>
  ) : (
    <button
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
  return (
    <span className="timer m-2">
      {parseInt(elapsed / 60)}:{parseInt(elapsed % 60)} /{" "}
      {parseInt(duration / 60)}:{parseInt(duration % 60)}
    </span>
  );
};

export const MuteButton = ({ isMute, send }) => {
  return isMute ? (
    <span className="m-2">
      <button onClick={() => send(machineEvents.UNMUTE)}>Unmute</button>
    </span>
  ) : (
    <span className="m-2">
      <button onClick={() => send(machineEvents.MUTE)}>Mute</button>
    </span>
  );
};

export const ForwardButton = ({ send }) => {
  return (
    <span className="m-2">
      <button onClick={() => send(machineEvents.FORWARD)}>Forward</button>
    </span>
  );
};

export const BackwardButton = ({ send }) => {
  return (
    <span className="m-2">
      <button onClick={() => send(machineEvents.BACKWARD)}>Backward</button>
    </span>
  );
};
