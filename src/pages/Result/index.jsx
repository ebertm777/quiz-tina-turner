import React from 'react';

import ResultPlayer from '!/components/ResultPlayer';
import useData from '!/hooks/useData';
import useNavigation from '!/hooks/useNavigation';

import * as S from './styles';

export default function Result() {
  const { resultData, answerData, setAnswerData } = useData();
  const { reset } = useNavigation();

  const correctCount = answerData.filter(
    (answer) => answer['isCorrect'] === true,
  ).length;
  const resultObject = checkWhichResultToDisplay(correctCount);

  function handleResetQuiz() {
    reset();
    setAnswerData([]);
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  }

  function checkWhichResultToDisplay(count) {
    const poinstPercent = Math.round(
      ((100 * count) / answerData.length).toFixed(0),
    );

    if (poinstPercent <= 49) {
      return resultData[2];
    }
    if (poinstPercent >= 50 && poinstPercent <= 79) {
      return resultData[1];
    }
    if (poinstPercent >= 80) {
      return resultData[0];
    }
  }

  return (
    <S.Container>
      <S.ResultContent>
        <S.ImageContainer>
          <img
            src={resultObject['imagem_Resultado']}
            alt="Imagem do resultado."
          />
        </S.ImageContainer>
        <S.ResultTitle>{`Você acertou ${correctCount} de ${answerData.length}!`}</S.ResultTitle>
        <S.ResultSubitle>{resultObject['mensagem_Resultado']}</S.ResultSubitle>
        {answerData.map((answer) => (
          <ResultPlayer
            key={answer['nome_Musica']}
            audio={answer['audio']}
            musicName={answer['nome_Musica']}
            isCorrect={answer['isCorrect']}
          />
        ))}
        <S.Button onClick={handleResetQuiz}>REFAZER QUIZ</S.Button>
      </S.ResultContent>
    </S.Container>
  );
}
