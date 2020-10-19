import React from "react";
import "./reset.css";
import "./App.css";
import Video from "./Components/Video";
import { PlayButton, VideoTimeCounter } from "./Components/Controls";
import { useMachine } from "@xstate/react";
import { videoMachine } from "./Machines/VideoMachine";

function App() {
  const [current, send] = useMachine(videoMachine);

  const { elapsed, duration } = current.context;

  return (
    <div className="container">
      <Video send={send} current={current} />
      <div>
        <PlayButton current={current} send={send} />
        <VideoTimeCounter elapsed={elapsed} duration={duration} />
      </div>
    </div>
  );
}

export default App;
