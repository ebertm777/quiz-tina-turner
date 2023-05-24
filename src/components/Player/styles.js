import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 152px;
  border: ${(props) => (props.showResult ? 'none' : '1px solid #000000')};
  background-image: ${(props) =>
    props.showResult ? `url(${props.imageMobi})` : 'transparent'};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;

  @media (min-width: 1024px) {
    background-image: ${(props) =>
      props.showResult ? `url(${props.imageDesk})` : 'transparent'};
    max-width: 442px;
    min-width: 442px;
    height: 409px;
    gap: 18px;
  }
`;

export const Counter = styled.p`
  font-family: 'Kanit';
  font-size: 18px;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 22px;
    gap: 18px;
  }
`;

export const PlayerButton = styled.button`
  width: 61px;
  height: 61px;
  background-color: #14b3e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    -moz-transition: all 0.02s ease-in;
    -o-transition: all 0.02s ease-in;
    -webkit-transition: all 0.02s ease-in;
    transition: all 0.02s ease-in;
  }

  img {
    width: ${(props) => (props.playing ? '16px' : '20px')};
    margin-left: ${(props) => (props.playing ? '0px' : '4px')};
  }

  @media (min-width: 1024px) {
    width: 94px;
    height: 94px;

    img {
      width: ${(props) => (props.playing ? '23px' : '33px')};
      margin-left: ${(props) => (props.playing ? '0px' : '8px')};
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
