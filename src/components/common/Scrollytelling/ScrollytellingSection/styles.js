import styled, { css } from 'styled-components';

import { breakpoints } from '!/styles/constants/breakpoints';

export const SectionContainer = styled.div`
  position: relative;
  padding: 100vh 0;

  ${(props) =>
    props.isFadeTransition &&
    css`
      padding: 0;
      margin: 100vh 0;
    `}


  .section-background {
    height: 100vh;
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translateZ(0);

    &.section-background-hidden {
      opacity: 0;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(#000, 0.3);
    }

    &.section-background-fixed {
      position: fixed;
    }
  }

  .section-content {
    z-index: 9;
    position: relative;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    &--left {
      margin-right: auto;
      width: 50%;
    }

    &--right {
      margin-left: auto;
      width: 50%;
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
      width: 100%;
      padding: 0;
    }
  }
}

.section-background-mobile {
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.section-background-desktop {
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
  `;
