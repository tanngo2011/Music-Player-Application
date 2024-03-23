import { useState } from "react";
import "./App.css";
import Backgr from "./components/Box/Backgr";
import PlayerControls from "./components/Box/PlayerControls";
import ReactDOM from "react-dom";
import Title from "./components/Box/Title";
import PlayerProgress from "./components/Box/PlayerProgress";
import Box from "./containers/Box";
import MusicPlayer from "./pages/MusicPlayer";

function App() {
  return (
    <>
      <MusicPlayer />
    </>
  );
}

export default App;
