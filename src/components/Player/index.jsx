import React, { useEffect, useRef, useState } from 'react';

import pauseIcon from '!/assets/images/pause_icon.svg';
import playIcon from '!/assets/images/play_icon.svg';

import useData from '../../hooks/useData';
import useNavigation from '../../hooks/useNavigation';
import * as S from './styles';

export default function Player({ audio, imageDesk, imageMobi, showResult }) {
  const audioPlayer = useRef();
  const animationRef = useRef();

  const { questionData, answerData } = useData();
  const { currentQuestion } = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    resetCounter();
    audioPlayer.current.pause();
  }, [showResult]);

  const play = () => {
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      play();
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    const audioCurrentTime = audioPlayer.current.currentTime;
    setCurrentTime(audioCurrentTime);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const resetCounter = () => {
    audioPlayer.current.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const calculateTime = (secs) => {
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `0:${returnedSeconds}`;
  };

  const checkDotColor = (index) => {
    if (index > currentQuestion) {
      return '#c5c5c5';
    }

    if (index < currentQuestion) {
      if (answerData[index]['isCorrect'] === true) return '#72CA27';

      return '#F64CB0';
    }

    if (index === currentQuestion) {
      if (answerData[index]) {
        if (answerData[index]['isCorrect'] === true) return '#72CA27';
        return '#F64CB0';
      }
      return '#c5c5c5';
    }
  };

  return (
    <S.Container
      showResult={showResult}
      imageDesk={imageDesk}
      imageMobi={imageMobi}
    >
      <img src={imageDesk} style={{ display: 'none' }} alt="" />
      <img src={imageMobi} style={{ display: 'none' }} alt="" />
      <audio
        ref={audioPlayer}
        src={audio}
        preload="metadata"
        onEnded={resetCounter}
      ></audio>
      {!showResult && (
        <>
          <S.PlayerButton onClick={togglePlayPause} playing={isPlaying}>
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt="Icone Play/Pause"
            />
          </S.PlayerButton>
          <S.Counter>{calculateTime(currentTime)}</S.Counter>
        </>
      )}
      <S.DotContainer>
        {questionData.map((question, index) => (
          <S.StepDot
            key={question['nome_Musica']}
            dotColor={checkDotColor(index)}
          />
        ))}
      </S.DotContainer>
    </S.Container>
  );
}
