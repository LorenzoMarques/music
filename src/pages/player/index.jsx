import {
  Arrow,
  Ball,
  ButtonsContainer,
  PlayButton,
  PlayerContainer,
  ProgressContainer,
  SongImage,
  SongNameContainer,
  StyledProgress,
  TimeContainer,
} from "./style";

import {
  BiPlayCircle,
  BiSkipNextCircle,
  BiSkipPreviousCircle,
  BiStopCircle,
} from "react-icons/bi";
import { useEffect, useState } from "react";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDuration, setSongDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
  const [width, setWidth] = useState("0%");

  const songUrl =
    "https://upload-capstone-m4-grupo-14.s3.sa-east-1.amazonaws.com/2b81030d8fa4848a986e75c0af32b83e-Cartoon+-+C+U+Again.mp3";
  const playSong = (id) => {
    const song = window.document.getElementById(id);

    song.play();
    setIsPlaying(!isPlaying);
  };

  const stopSong = (id) => {
    const song = window.document.getElementById(id);

    song.pause();
    setIsPlaying(!isPlaying);
  };

  const getSongDuration = (id) => {
    const song = window.document.getElementById(id);
    const seconds = Math.floor(song.duration);

    const minutes = Math.floor(seconds / 60); // get minutes
    const sec = seconds % 60;

    setSongDuration(`${minutes}:${sec}`);
  };

  useEffect(() => {
    setTimeout(() => {
      getSongDuration("10");
    }, "1000");
  }, []);

  const getCurrentTime = (id) => {
    const song = window.document.getElementById(id);
    const seconds = Math.floor(song.currentTime);

    const minutes = Math.floor(seconds / 60); // get minutes
    const sec = seconds % 60;

    if (sec < 10) {
      setCurrentTime(`${minutes}:0${sec}`);
    } else {
      setCurrentTime(`${minutes}:${sec}`);
    }

    setWidth(`${(seconds / song.duration) * 100}%`);
    console.log((seconds / song.duration) * 100);
  };

  return (
    <PlayerContainer>
      <SongImage></SongImage>

      <SongNameContainer>
        <h3>Song Name</h3>
        <span>Artist</span>
      </SongNameContainer>

      <ProgressContainer>
        <StyledProgress value="0" max="100" width={width}></StyledProgress>
        <Ball></Ball>
      </ProgressContainer>
      <audio
        id="10"
        src={songUrl}
        onTimeUpdate={() => getCurrentTime("10")}
      ></audio>
      <TimeContainer>
        <p>{currentTime}</p>
        <p>{songDuration}</p>
      </TimeContainer>

      <ButtonsContainer>
        <Arrow>
          <BiSkipPreviousCircle size={45} color="white" />
        </Arrow>

        {!isPlaying ? (
          <PlayButton onClick={() => playSong("10")}>
            <BiPlayCircle size={45} color="white" />
          </PlayButton>
        ) : (
          <PlayButton onClick={() => stopSong("10")}>
            <BiStopCircle size={45} color="white" />
          </PlayButton>
        )}

        <Arrow>
          <BiSkipNextCircle size={45} color="white" />
        </Arrow>
      </ButtonsContainer>
    </PlayerContainer>
  );
};

export default Player;
