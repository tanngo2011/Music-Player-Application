import React, { useRef, useState } from "react";

function PlayerProgress(props) {
  let {
    duration,
    changeCurrentTime,
    timeFormat,
    currentTime,
    progress,
    backwardAndForward,
  } = props;



  let progressWidth = useRef();



  return (
    <>
      <div
        className="player-progress"
        id="player-progress"
        ref={progressWidth}
        onClick={() => backwardAndForward(event, progressWidth.current)}
      >
        <div
          className="progress"
          id="progress"
          style={{
            width: `${progress}%`,
          }}
        ></div>
        {/* <label for="Light">Độ sáng</label> */}
        {/* <br /> */}
        {/* <input type="range" className="progress" id="Light" min="0" max="999" /> */}

        <div className="music-duration">
          <span id="current-time">{changeCurrentTime()}</span>
          <span id="duration">{timeFormat(duration)}</span>
        </div>
      </div>
    </>
  );
}

export default PlayerProgress;
