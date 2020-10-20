import React from "react";
import "../App.css";
import { machineEvents } from "../Machines/VideoMachine";

export const PlayButton = ({ current, send }) => {
  return current.matches({ success: { ready: "playing" } }) ? (
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

export const VideoTimeCounter = ({ elapsed, duration }) => {
  return (
    <span className="timer">
      {parseInt(elapsed / 60)}:{parseInt(elapsed % 60)} /{" "}
      {parseInt(duration / 60)}:{parseInt(duration % 60)}
    </span>
  );
};

export const MuteButton = ({ isMute, send }) => {
  return isMute ? (
    <span className="">
      <button onClick={() => send(machineEvents.UNMUTE)}>Unmute</button>
    </span>
  ) : (
    <span className="">
      <button onClick={() => send(machineEvents.MUTE)}>Mute</button>
    </span>
  );
};
