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
import { getSong } from "../../utils/importsongs";
import { useNavigate } from "react-router-dom";
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDuration, setSongDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
  const [width, setWidth] = useState("0%");
  const navigate = useNavigate();

  const songId = Number(window.location.pathname.split(`/`)[2]);

  const songUrl = getSong(songId);
  const playSong = (id) => {
    const song = window.document.getElementById(id);
    setIsPlaying(true);
    song.play();
  };

  const changeSong = (str) => {
    if (songId >= 1 && songId <= 15) {
      if (str === "previous" && songId === 1) {
        return;
      }
      if (str === "previous") {
        getSongDuration("10");
        navigate(`/player/${songId - 1}`);
      }
      if (str !== "previous" && songId !== 15) {
        getSongDuration("10");
        navigate(`/player/${songId + 1}`);
      }

      setTimeout(() => {
        playSong("10");
      }, "1000");
    }
  };

  const stopSong = (id) => {
    const song = window.document.getElementById(id);

    song.pause();
    setIsPlaying(false);
  };

  const getSongDuration = (id) => {
    const song = window.document.getElementById(id);
    const seconds = Math.floor(song.duration);

    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    if (sec < 10) {
      setSongDuration(`${minutes}:0${sec}`);
    } else {
      setSongDuration(`${minutes}:${sec}`);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getSongDuration("10");
    }, "1000");
  }, []);

  const getCurrentTime = (id) => {
    const song = window.document.getElementById(id);
    const seconds = Math.floor(song.currentTime);

    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;

    if (sec < 10) {
      setCurrentTime(`${minutes}:0${sec}`);
    } else {
      setCurrentTime(`${minutes}:${sec}`);
    }

    setWidth(`${(seconds / song.duration) * 100}%`);
    if (currentTime === songDuration) {
      changeSong();
    }
  };

  return (
    <PlayerContainer>
      <SongImage>
        <img src={songUrl.img} alt="" />
      </SongImage>

      <SongNameContainer>
        <h3>{songUrl.name}</h3>
        <span>{songUrl.artist}</span>
      </SongNameContainer>

      <ProgressContainer>
        <StyledProgress value="0" max="100" width={width}></StyledProgress>
        <Ball></Ball>
      </ProgressContainer>
      <audio
        id="10"
        src={songUrl.song}
        onTimeUpdate={() => getCurrentTime("10")}
      ></audio>
      <TimeContainer>
        <p>{currentTime}</p>
        <p>{songDuration}</p>
      </TimeContainer>

      <ButtonsContainer>
        <Arrow
          onClick={() => {
            changeSong("previous");
          }}
        >
          <BiSkipPreviousCircle size={45} color="gray" />
        </Arrow>

        {!isPlaying ? (
          <PlayButton onClick={() => playSong("10")}>
            <BiPlayCircle size={45} color="gray" />
          </PlayButton>
        ) : (
          <PlayButton onClick={() => stopSong("10")}>
            <BiStopCircle size={45} color="gray" />
          </PlayButton>
        )}

        <Arrow
          onClick={() => {
            changeSong();
          }}
        >
          <BiSkipNextCircle size={45} color="gray" />
        </Arrow>
      </ButtonsContainer>
    </PlayerContainer>
  );
};

export default Player;
