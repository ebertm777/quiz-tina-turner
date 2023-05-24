import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 5%;
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  width: 100%;
  max-height: 500px;
  aspect-ratio: 1.5;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 980px;
    min-width: 580px;
    height: 100%;
    max-height: 726px;
    min-height: 726px;
    background-position: center;
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  max-width: 490px;
  padding: 25px 18px 18px;
  margin: 0 auto;
  font-family: 'Kanit';
  text-align: center;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 650px;
    align-items: start;
    gap: 42px;
    margin: initial;
    padding: 0 20px 0 0;
    text-align: initial;
  }
`;

export const Title = styled.h1`
  font-family: 'Kanit';
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  padding-bottom: 12px;

  @media (min-width: 1024px) {
    font-size: 45px;
    line-height: 48px;
    padding-bottom: 0px;
  }
`;

export const Description = styled.p`
  font-family: 'Kanit';
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 22px;

  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 26px;
    padding-bottom: 0px;
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  background-color: #14b3e8;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 6px;
  font-family: 'Kanit';

  @media (min-width: 1024px) {
    padding: 14px 32px;
    background-color: #14b3e8;
    color: #fff;
    font-size: 22px;
  }
`;
