import React from 'react';

import abreBgDesk from '!/assets/images/abertura-desk.jpg';
import abreBgMobi from '!/assets/images/abertura-mobi.jpg';

import useNavigation from '../../hooks/useNavigation';
import useWindowSize from '../../hooks/useWindowSize';
import * as S from './styles';

export default function Home() {
  const { nextPage } = useNavigation(nextPage);
  const windowSize = useWindowSize();

  const isMobile = windowSize.width < 1023;

  return (
    <S.Container>
      <S.Background src={isMobile ? abreBgMobi : abreBgDesk} />
      <S.Content>
        <S.Title>
          É fã de Tina Turner? Ouça trechos de músicas e teste seu conhecimento
          sobre a rainha do rock
        </S.Title>
        <S.Description>
        A cantora de voz marcante, que morreu nesta quarta-feira, aos 83 anos, deixou como legado uma obra repleta de temas como a superação e o poder feminino.
          {!isMobile ? (
            <>
              <br />
              <br />
            </>
          ) : (
            ' '
          )}
        </S.Description>
        <S.Button onClick={nextPage}>Iniciar quiz</S.Button>
      </S.Content>
    </S.Container>
  );
}
