import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();

export default function NavigationContextProvider(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function nextPage() {
    setCurrentPage((prevState) => ++prevState);
  }

  function nextQuestion() {
    setCurrentQuestion((prevState) => ++prevState);
  }

  function reset() {
    setCurrentPage(0);
    setCurrentQuestion(0);
  }

  return (
    <NavigationContext.Provider
      value={{ currentPage, currentQuestion, nextPage, nextQuestion, reset }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
