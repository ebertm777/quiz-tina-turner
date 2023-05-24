import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const QuestionContent = styled.div`
  width: 100%;
  max-width: 425px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 14px 17px;
  gap: ${(props) => (props.showResult ? '22px' : '14px')};
  margin: 0 auto;

  #player {
    width: 100%;
    -moz-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
  }

  @media (min-width: 1024px) {
    max-width: 942px;
    flex-direction: row;
    align-items: center;
    padding: 137px 20px 180px;
    gap: ${(props) => (props.showResult ? '46px' : '18px')};
  }
`;

export const OptionsContent = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
  }
`;

export const AnswerContent = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
  }
`;

export const QuestionTitle = styled.p`
  font-family: 'Kanit';
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 15px;
  }
`;

export const ResultTitle = styled.p`
  font-family: 'Kanit';
  font-size: 25px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  color: ${(props) => (props.textColor ? '#81D620' : '#F64CB0')};
  margin-bottom: 31px;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 60px;
    text-align: left;
    margin-bottom: 37px;
  }
`;

export const MusicTitle = styled.p`
  font-family: 'Kanit';
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: #000000;
  margin-bottom: 14px;

  @media (min-width: 1024px) {
    font-size: 30px;
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const MusicDescription = styled.p`
  font-family: 'Kanit';
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #000000;
  margin-bottom: 44px;

  @media (min-width: 1024px) {
    font-size: 20px;
    text-align: left;
    margin-bottom: 59px;
  }
`;

export const OptionButton = styled.button`
  width: 100%;
  min-height: 59px;
  background-color: ${(props) => props.color && props.color};
  color: ${(props) => (props.color === '#000' ? '#fff' : '#000')};
  font-family: 'Kanit';
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  border-radius: 6px;
  margin-bottom: 6px;
  padding: 0 26px;

  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;

  :last-of-type {
    margin-bottom: 0px;
  }

  @media (min-width: 1024px) {
    min-height: 80px;
    font-size: 20px;
    line-height: 22px;
    padding: 0 53px;
  }
`;

export const NextButton = styled.button`
  width: 132px;
  height: 37px;
  background-color: #000000;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kanit';
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  margin: 0 auto;

  * {
    -moz-transition: all 0.02s ease-in;
    -o-transition: all 0.02s ease-in;
    -webkit-transition: all 0.02s ease-in;
    transition: all 0.02s ease-in;
  }

  i {
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-left: 24px;
  }

  @media (min-width: 1024px) {
    width: 162px;
    height: 54px;
    font-size: 20px;
    margin: 0 auto 0 0;

    i {
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 6px;
      margin-left: 14px;
    }
  }
`;
