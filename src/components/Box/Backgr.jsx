import React from "react";
import Box from "../../containers/Box";

function Backgr({songs, musicIndex}) {



  return (
    <>
      <div 
      className="background" 
      style={
        {
          backgroundImage: `url(${songs[musicIndex].coverSource})`,
          filter: `blur(10px)`,
          opacity: `0.8`
        }
      }
      >
      </div>
    </>
  );
}

export default Backgr;
