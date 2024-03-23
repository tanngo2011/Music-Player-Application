import React, { useState } from "react";
import Backgr from "../components/Box/Backgr";
import Box from "../containers/Box";

function MusicPlayer(props) {
  const songs = [
    {
      path: "src/assets/102.mp3",
      displayName: "Tầng Thượng 102",
      artists: "Cá Hồi Hoang",
      coverSource:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/covers/f/d/fdedde94b72e56d1eca324fee31fa28a_1510221982.jpg",
    },
    {
      path: "src/assets/250.mp3",
      displayName: "Điền Vào Ô Trống (250)",
      artists: "Cá Hồi Hoang",
      coverSource:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/75/52/44/75524458-43e2-9dc7-f57f-562822132cbd/cover.jpg/1200x1200bf-60.jpg",
    },
    {
      path: "src/assets/5AM.mp3",
      displayName: "5AM",
      artists: "Cá Hồi Hoang",
      coverSource:
        "https://i.scdn.co/image/ab67616d0000b27305607293173bbaa855c275de",
    },
    {
      path: "src/assets/Thấy Chưa.mp3",
      displayName: "Thấy Chưa",
      artists: "Ngọt",
      coverSource:
        "https://e.snmc.io/i/600/s/6858393259e27a69cf788cdde07208ff/10307508/ngot-thay-ch%C6%B0a-Cover-Art.jpg",
    },
    {
      path: "src/assets/Buoc Qua Mua Co Don - Vu.mp3",
      displayName: "Bước Qua Mùa Cô Đơn",
      artists: "Vũ.",
      coverSource:
        "https://i1.sndcdn.com/artworks-qSNfK6TePY85-0-t500x500.jpg",
    },
  ];

  //Khai báo biến musicIndex để lưu trữ index của danh sách bài hát, phục vụ thực hiện chức
  //năng chuyển bài
  const [musicIndex, setMusicIndex] = useState(0);
  

  return (
    <>
      <Backgr 
      songs={songs}
      musicIndex={musicIndex}/>
      <Box 
      songs={songs}
      musicIndex={musicIndex}
      setMusicIndex={setMusicIndex}
      />
    </>
  );
}

export default MusicPlayer;
