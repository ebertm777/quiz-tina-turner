import React, { useRef, useState } from 'react';

import rightIcon from '!/assets/images/icone_certo.svg';
import wrongIcon from '!/assets/images/icone_errado.svg';
import pauseIcon from '!/assets/images/pause_icon.svg';
import playIcon from '!/assets/images/play_icon.svg';

import * as S from './styles';

export default function ResultPlayer({ audio, musicName, isCorrect }) {
  const audioPlayer = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audioPlayer.current.play();
  };
  const pause = () => {
    audioPlayer.current.pause();
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      play();
    } else {
      pause();
    }
  };

  const resetCounter = () => {
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <S.Container>
      <audio
        ref={audioPlayer}
        src={audio}
        preload="metadata"
        onEnded={resetCounter}
      ></audio>
      <img
        className="right-wrong"
        src={isCorrect ? rightIcon : wrongIcon}
        alt="Icone de Certo/Errado"
      />
      <S.PlayerButton onClick={togglePlayPause} playing={isPlaying}>
        <img src={isPlaying ? pauseIcon : playIcon} alt="Icone Play/Pause" />
      </S.PlayerButton>
      <S.MusicName>{musicName}</S.MusicName>
    </S.Container>
  );
}
