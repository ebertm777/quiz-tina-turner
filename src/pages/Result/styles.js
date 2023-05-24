import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const OptionsContent = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
  }
`;

export const ResultContent = styled.div`
  width: 100%;
  max-width: 711px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 747px;
    padding: 0 18px;
  }
`;

export const ResultTitle = styled.p`
  font-family: 'Kanit';
  font-size: 30px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: #000000;
  padding: 0 62px;
  margin-bottom: 16px;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 60px;
    padding: 0;
    margin-bottom: 16px;
  }
`;

export const ResultSubitle = styled.p`
  font-family: 'Kanit';
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #000000;
  padding: 0 18px;
  margin-bottom: 27px;

  @media (min-width: 1024px) {
    font-size: 22px;
    padding: 0;
    margin-bottom: 72px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 22px;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 100%;
    max-height: 330px;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 26px;
    margin-bottom: 36px;
  }
`;

export const Button = styled.button`
  width: 148px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #14b3e8;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 6px;
  font-family: 'Kanit';
  margin: 0 auto 35px auto;

  @media (min-width: 1024px) {
    width: 234px;
    height: 58px;
    background-color: #14b3e8;
    color: #fff;
    font-size: 22px;
    margin: 0 auto 85px auto;
  }
`;
