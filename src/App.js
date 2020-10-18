import React from "react";
import "./reset.css";
import "./App.css";
import Video from "./Components/Video";
import { PlayButton, VideoTimeCounter } from "./Components/Controls";

function App() {
  return (
    <div className="container">
      <Video />
      <div>
        <PlayButton />
        <VideoTimeCounter />
      </div>
    </div>
  );
}

export default App;
