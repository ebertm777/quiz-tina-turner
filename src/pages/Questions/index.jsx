import React, { useState } from 'react';

import Player from '!/components/Player';
import useData from '!/hooks/useData';
import useNavigation from '!/hooks/useNavigation';

import triggerPageView from '../../../tools/triggerPageView';
import * as S from './styles';

export default function Questions() {
  const { questionData, answerData, setAnswerData } = useData();
  const { currentQuestion, nextQuestion, nextPage } = useNavigation();
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [showResult, setShowRessult] = useState(false);

  const question = questionData[currentQuestion];
  const isCorrect = question && currentAnswer === question['resposta'];
  const options = [
    question['alternativa_A'],
    question['alternativa_B'],
    question['alternativa_C'],
    question['alternativa_D'],
  ];

  function handleChangeQuestion() {
    if (currentQuestion < questionData.length - 1) {
      opacityTransition('player', false);
      setTimeout(() => {
        setCurrentAnswer('');
        nextQuestion();
      }, 100);
    } else {
      nextPage();
    }
    triggerPageView();
  }

  function handleSetAnswer(answer) {
    setCurrentAnswer(answer);
    buildAnswerObject(answer);
    setTimeout(() => {
      opacityTransition('player', true);
    }, 1000);
    triggerPageView();
  }

  function opacityTransition(elementId, valueToSet) {
    const element = document.getElementById(elementId).style;
    element.opacity = 0;
    setTimeout(() => {
      setShowRessult(valueToSet);
      element.opacity = 1;
    }, 100);
  }

  function buildAnswerObject(answer) {
    const correctAnswer = validateAnswer(question['resposta'], answer);
    const answerObject = {
      audio: question['audio'],
      nome_Musica: question['nome_Musica'],
      isCorrect: correctAnswer,
    };
    const currentAnswer = [...answerData, answerObject];

    setAnswerData(currentAnswer);
  }

  function validateAnswer(correctAnswer, selectedAnswer) {
    return correctAnswer === selectedAnswer;
  }

  function checkButtonColor(value) {
    if (currentAnswer.length > 0) {
      if (value === question['resposta']) return '#8BDC1C';
      if (value === currentAnswer) return '#F64CB0';
      return '#000';
    }
    return '#000';
  }

  return (
    <S.Container>
      <img src={question['imagem']} style={{ display: 'none' }} alt="" />
      <img src={question['imagem_Mobi']} style={{ display: 'none' }} alt="" />
      <S.QuestionContent showResult={showResult}>
        <div id="player">
          <Player
            audio={question['audio']}
            imageDesk={question['imagem']}
            imageMobi={question['imagem_Mobi']}
            showResult={showResult}
          />
        </div>
        {!showResult ? (
          <S.OptionsContent>
            <S.QuestionTitle>{question['pergunta']}</S.QuestionTitle>
            {options.map((option) => (
              <S.OptionButton
                onClick={() => handleSetAnswer(option)}
                color={checkButtonColor(option)}
                key={option}
                disabled={currentAnswer.length > 0}
              >
                {option}
              </S.OptionButton>
            ))}
          </S.OptionsContent>
        ) : (
          <S.AnswerContent>
            <S.ResultTitle textColor={isCorrect}>
              {isCorrect ? 'ACERTOU!' : 'ERRADO!'}
            </S.ResultTitle>
            <S.MusicTitle>{question['nome_Musica']}</S.MusicTitle>
            <S.MusicDescription>{question['texto_Musica']}</S.MusicDescription>
            <S.NextButton onClick={handleChangeQuestion}>
              PRÓXIMA <i></i>
            </S.NextButton>
          </S.AnswerContent>
        )}
      </S.QuestionContent>
    </S.Container>
  );
}
