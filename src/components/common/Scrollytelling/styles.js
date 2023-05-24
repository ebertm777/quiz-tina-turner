import styled, { css } from 'styled-components';

import { breakpoints } from '!/styles/constants/breakpoints';

export const ScrollytellingContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  background: #c3c3c3;
  margin-top: -1px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 50px;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 9;

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }

  ${(props) =>
    props.backgroundsContainerFixed &&
    css`
      position: fixed;
      z-index: 9;
    `}

  .background-container {
    position: absolute;
    transition: opacity 0.3s;
    opacity: 1;
    top: 250px;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #c3c3c3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakpoints.tablet}) {
      align-items: flex-end;
      top: 0px;
    }

    @media (max-width: ${breakpoints.phone}) {
      top: -100px;
    }

    &::after {
      content: '';
      width: 10%;
      height: 10%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(#000, 0.3);
    }

    & > img {
      object-fit: contain;
      width: 600px;
      height: 600px;
      z-index: 9;

      @media (max-width: ${breakpoints.phone}) {
        padding: 0px 20px;
      }
    }

    & > video {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -1000;
      overflow: hidden;
    }
  }

  .show-mobile {
    display: block;

    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  .show-desktop {
    display: block;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`;
