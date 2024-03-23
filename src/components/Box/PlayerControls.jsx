import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function PlayerControls(props) {

  let {playToggle, playMusic, forwardSong, previousSong} = props;

  //Có thể hiểu, trong phạm vi bài này, ta không cần đưa 2 biến button và title đi sử dụng 
  //trong các function nên không cần đem 2 biến này vào quản lý trong useRef().
  let button;
  let title;

  if (playMusic) {
    button = "fa-solid fa-pause pause-button";
    title = "Pause";
  } else if (!playMusic) {
    button = "fa-solid fa-play play-button";
    title = "Play";
  }

  return (
    <>
      <div className="player-controls">
        <i className="fa-solid fa-backward" title="Previous" onClick={previousSong}></i>
        
        <i className={button} title={title} onClick={playToggle}></i>
        {/* <FontAwesomeIcon icon={faPlay} /> */}

        {/* <i className="fa-solid fa-pause" title="Pause"></i> */}

        <i className="fa-solid fa-forward" title="Next" onClick={forwardSong}></i>

      </div>
    </>
  );
}

export default PlayerControls;
