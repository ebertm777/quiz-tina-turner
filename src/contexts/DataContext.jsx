import React, { createContext, useEffect, useState } from 'react';

import { GOOGLE_PLANILHAS } from '!/constants/googlePlanilhas';

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const QUESTION_DATA_URL = `${GOOGLE_PLANILHAS}/quiz-audios-tina-turner/quiz-audios-tina-turner.json`;
  const RESULT_DATA_URL = `${GOOGLE_PLANILHAS}/quiz-audios-tina-turner-resultados/quiz-audios-tina-turner-resultados.json`;

  const [questionData, setQuestionData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [answerData, setAnswerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadData(DATA_URL, setData) {
    try {
      setIsLoading(true);

      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error();
      }

      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData(QUESTION_DATA_URL, setQuestionData);
    loadData(RESULT_DATA_URL, setResultData);
  }, []);

  return (
    <DataContext.Provider
      value={{ questionData, resultData, answerData, setAnswerData, isLoading }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
