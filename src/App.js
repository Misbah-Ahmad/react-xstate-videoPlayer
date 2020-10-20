import React from "react";
import "./reset.css";
import "./App.css";
import Video from "./Components/Video";
import { BackwardButton, ForwardButton, MuteButton, PlayButton, VideoTimeCounter } from "./Components/Controls";
import { useMachine } from "@xstate/react";
import { videoMachine } from "./Machines/VideoMachine";

function App() {
  const [current, send] = useMachine(videoMachine);

  const { elapsed, duration, isMute } = current.context;

  return (
    <div className="container">
      <Video send={send} current={current} />
      <div>
        <PlayButton current={current} send={send} />
        <VideoTimeCounter elapsed={elapsed} duration={duration} />
        <MuteButton isMute={isMute} send={send}/>
        <BackwardButton send={send}/>
        <ForwardButton send={send}/>
      </div>
    </div>
  );
}

export default App;
