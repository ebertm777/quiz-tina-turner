import { createGlobalStyle, css } from 'styled-components';

import { Fonts } from './Fonts';

export default createGlobalStyle`
  ${Fonts}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:focus {
    outline-width: thin;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  strong {
    font-weight: bold;
  }

  img {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  .titulo-ultimas,
  .head-materia {
    display: none;
  }

  .container {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1280px;
  }

  .main-title {
    @include fontSize(45px);
    font-family: 'Whitman Display Condensed', Arial, Helvetica, sans-serif;
    font-weight: 700;
    margin: 10px auto;
    text-align: center;
  }

  .infoarte {
    &.no-js {
      .progressive-img {
        .image {
          display: none;
        }

        noscript .image {
          display: block;
          opacity: 1;
        }
      }
    }

    .progressive-img {
      background-color: #f6f6f6;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      position: relative;

      .image {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity 0.3s linear;
        width: 100%;
      }

      .progressive-draft {
        filter: blur(10px);
        left: auto;
        max-height: 100%;
        opacity: 1;
        position: absolute;
        top: 0;
        transform: scale(1);
      }

      .progressive-loaded {
        opacity: 1;
      }

      .image-description {
        display: block;
        font-size: 0.75rem;
        line-height: 1rem;
        margin: 1rem 0 0 0;
        margin-top: 1rem;
      }

      .back-draft {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
      }

      .back-image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    button {
      cursor: pointer;
    }

    // Esconde um elemento sem prejudicar o SEO
    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  ${(props) =>
    props.hideBarraGlobo &&
    css`
      #barra-globocom,
      .site-header,
      .info-ad,
      .block--advertising,
      .block--advertising-header,
      .block--advertising--is-fixed,
      .info-ad {
        display: none !important;
      }

      .site-header--is-fixed + * {
        margin-top: 0px !important;
      }
    `}
`;
