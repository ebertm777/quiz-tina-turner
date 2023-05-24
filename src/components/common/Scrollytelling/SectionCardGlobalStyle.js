import { createGlobalStyle } from 'styled-components';

import { breakpoints } from '!/styles/constants/breakpoints';

export default createGlobalStyle`
  .section-content-card {
    max-width: 600px;
    position: relative;
    white-space: pre-wrap;

    @media (max-width: ${breakpoints.tablet}) {
      align-self: center;
      max-width: 600px;
      padding: 25px 8vw;
      background: rgba( 80, 80, 80, 0.7 );
      backdrop-filter: blur( 6.0px );
      -webkit-backdrop-filter: blur( 6.0px );
      border-radius: 10px;
    }


    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    p {
      font-size: 27px;
      line-height: 35px;
      color: #000000;
      font-family: 'Benton Sans Condensed', Arial, Helvetica, sans-serif;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 20px;
        line-height: 27px;
      }
    }

    strong {
      color: #FF0000;
      font-family: 'Benton Sans Condensed', Arial, Helvetica, sans-serif;
      font-weight: 900;
      font-size: 32px;

      @media (max-width: ${breakpoints.tablet}) {
      font-size: 25px;
      }
    }
  }

  .section-background-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: 9;
    }

  .section-background-video {
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
`;
