import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 18px;
  margin: 0 auto 31px auto;

  .right-wrong {
    width: 27px;
    height: 28px;
  }

  @media (min-width: 1024px) {
    max-width: 595px;
    padding: 0;
    margin: 0 auto 40px auto;

    .right-wrong {
      width: 39px;
      height: 40px;
    }
  }
`;

export const MusicName = styled.p`
  font-family: 'Kanit';
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  text-align: left;
  color: #000000;

  @media (min-width: 1024px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const PlayerButton = styled.button`
  width: 100%;
  max-width: 27px;
  height: 28px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px 0 8px;

  * {
    -moz-transition: all 0.02s ease-in;
    -o-transition: all 0.02s ease-in;
    -webkit-transition: all 0.02s ease-in;
    transition: all 0.02s ease-in;
  }

  img {
    width: ${(props) => (props.playing ? '11px' : '12px')};
    margin-left: ${(props) => (props.playing ? '0px' : '2px')};
  }

  @media (min-width: 1024px) {
    max-width: 39px;
    height: 40px;
    margin: 0 26px 0 12px;

    img {
      width: ${(props) => (props.playing ? '15px' : '16px')};
      margin-left: ${(props) => (props.playing ? '0px' : '5px')};
    }
  }
`;

export const StepDot = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 12px;
  background-color: ${(props) => props.dotColor && props.dotColor};
  border-radius: 50%;

  @media (min-width: 1024px) {
    width: 11px;
    height: 11px;
    margin-right: 15px;
  }
`;
export const DotContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: 14px;
  padding: 0 16px;

  @media (min-width: 1024px) {
    bottom: 31px;
  }
`;
