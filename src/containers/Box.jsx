import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Box/Title";
import PlayerProgress from "../components/Box/PlayerProgress";
import PlayerControls from "../components/Box/PlayerControls";
import PlayerImg from "../components/Box/PlayerImg";
import Backgr from "../components/Box/Backgr";

function Box({songs, setMusicIndex, musicIndex}) {

    
  //Khai báo biến playMusic để kiểm tra xem nhạc có đang phát hay không. Nếu có, thì hiện nút
  //Pause, nếu không thì hiện nút Play (trong Component PlayerControls)
  const [playMusic, setPlayMusic] = useState(false);




  //Ta phải đưa biến music vào quản lý trong useRef(). Lý do: Mỗi khi bấm Play, Component Box sẽ được
  //render lại (re-render), mỗi lần như thế lại tạo mới một Audio Object và lưu trữ trong biến music
  //--> phải đem biến music bỏ vào useRef() để biến music không bị tạo mới sau mỗi lần render.
  //(tham khảo link sau: https://stackoverflow.com/questions/63003690/unable-to-pause-audio-in-reactjs)
  // const music = new Audio("src/assets/102.mp3");
  let music = useRef(new Audio(songs[musicIndex].path));


  let [duration, setDuration] = useState("00:00");
  let [currentTime, setCurrentTime] = useState("00:00");
  let [progress, setProgress] = useState("50%");





  useEffect(() => {
    music.current = new Audio(songs[musicIndex].path);

    //Sử dụng Event LoadedMetadata để load thông tin duration (không dùng Event này thì
    //duration được lấy ra sẽ có giá trị NaN)
    music.current.onloadedmetadata = () => {
      console.log(music.current.duration);
      setDuration(music.current.duration);
      setCurrentTime(music.current.currentTime);
    };

    if (playMusic == true) {
      music.current.play();
    }


    //Thêm chức năng scrollTo ở đây


    return () => {
      clearInterval(interval);
      console.log("đã vào đây");
    };
  }, [musicIndex]);






  //function playToggle() có chức năng dừng hoặc phát tiếp bài hát
  let playToggle = () => {
    if (playMusic == false) {
      setPlayMusic(true);
      music.current.play();
    } else if (playMusic == true) {
      setPlayMusic(false);
      music.current.pause();
      // console.log("pause đê");
    }
    console.log(music);
  };





  //function forwardSong() có chức năng chuyển đến bài hát tiếp theo
  let forwardSong = () => {
    if (musicIndex == songs.length - 1) {
      setMusicIndex(0);
    } else {
      setMusicIndex(musicIndex + 1);
      // console.log(musicIndex);
    }

    music.current.pause();
    setPlayMusic(true);
  };





  //function previousSong() có chức năng chuyển đến bài hát trước đó
  let previousSong = () => {
    if (musicIndex == 0) {
      setMusicIndex(songs.length - 1);
    } else {
      setMusicIndex(musicIndex - 1);
    }
    music.current.pause();
    setPlayMusic(true);
    // music.current.play();
  };

  // if (playMusic == true) {
  // console.log(music.current.duration);
  console.log("cuối chương trình: " + music?.current?.duration);

  // }



  let timeFormat = (time) => {
    if (!isNaN(time)) {
      let minute = Math.floor(time / 60);

      let second = Math.floor(time - minute * 60);

      if (minute < 10) {
        minute = "0" + minute;
      }

      if (second < 10) {
        second = "0" + second;
      }

      time = minute + ":" + second;

      console.log(time);
      return time;
    } else {
        return "00:00";
    }

    
  };

  let interval;


  //function changeCurrentTime() có chức năng thay đổi thời lượng đang phát của bài hát (currentTime)
  //trên thanh progress
  let changeCurrentTime = () => {

    if (music.current.paused) {
        setCurrentTime(Math.floor(music.current.currentTime));
        setProgress((currentTime * 100) / Math.floor(duration));
        console.log("đã goalllll");
    }
    
    


    //Cách 1: Cấu hình currentTime bằng setInterval()
    // if (!music.current.paused) {
    //   interval = setInterval(() => {
    //     setCurrentTime(Math.floor(music.current.currentTime));
    //   }, 1000);
    // }


    //Cách 2: Cấu hình currentTime bằng event onTimeUpdate
    music.current.ontimeupdate = () => {
        setCurrentTime(Math.floor(music.current.currentTime));
        setProgress((currentTime * 100) / Math.floor(duration));
        // let progressObject = {
        //     width: progress + "%"
        // } 
    }

      // clearInterval(interval);
    
    // clearInterval(interval);
    // setCurrentTime(music.current.currentTime);
    return timeFormat(currentTime);
  };




  //function backwardAndForward() có chức năng tua bài hát bằng thanh progress
  let backwardAndForward = (e, progressWidth) => {
    console.log(e);
    
    // console.log(progressWidth);
    console.log(e.offsetX);
    console.log(e.target);
    console.log(e.target.offsetWidth);
    
    music.current.currentTime = (e.offsetX * Math.floor(music.current.duration)) / progressWidth.offsetWidth;
    

    changeCurrentTime();
    
    
  }




  return (
    <div className="container">
      
      {/* <audio src='src/assets/102.mp3'></audio> */}
      <PlayerImg 
      coverSource = {songs[musicIndex].coverSource}/>
      <Title 
      title = {songs[musicIndex].displayName}
      artists={songs[musicIndex].artists}/>
      <PlayerProgress
        // currentTime = {currentTime}
        // currentSong = {music.current}
        // playMusic = {playMusic}
        duration={duration}
        changeCurrentTime={changeCurrentTime}
        timeFormat={timeFormat}
        progress={progress}
        backwardAndForward={backwardAndForward}
      />
      <PlayerControls
        playToggle={playToggle}
        playMusic={playMusic}
        forwardSong={forwardSong}
        previousSong={previousSong}
      />

      {/* <Location/> */}
    </div>
  );
}

export default Box;
