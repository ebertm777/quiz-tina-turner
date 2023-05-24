import styled from 'styled-components';

export const ShareButtonComponent = styled.a`
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.75;
    }
  }
`;
