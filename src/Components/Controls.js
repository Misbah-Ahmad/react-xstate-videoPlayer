import React from "react";
import "../App.css";
import { machineEvents } from "../Machines/VideoMachine";

export const PlayButton = ({ current, send }) => {
  return current.matches({ ready: "playing" }) ? (
    <button onClick={() => send(machineEvents.PAUSE)}>Pause</button>
  ) : (
    <button
      onClick={() => {
        send(machineEvents.PLAY);
      }}
    >
      Play
    </button>
  );
};

export const VideoTimeCounter = () => {
  return (
    <span className="timer">
      00:00 / 00:00
    </span>
  );
};
