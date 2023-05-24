import React from 'react';

import useNavigation from '../../hooks/useNavigation';
import Home from '../../pages/Home';
import Questions from '../../pages/Questions';
import Result from '../../pages/Result';

export default function PageStack() {
  const { currentPage } = useNavigation();

  return (
    <>
      {currentPage === 0 && <Home />}
      {currentPage === 1 && <Questions />}
      {currentPage === 2 && <Result />}
    </>
  );
}
