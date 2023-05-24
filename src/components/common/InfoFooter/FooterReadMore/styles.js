import styled from 'styled-components';

import { colors } from '!/styles/constants/colors';

export const FooterReadMoreComponent = styled.div`
  box-sizing: border-box;
  max-width: 640px;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 820px) {
      justify-content: space-around;
      margin: 0 auto;
      max-width: 320px;
    }
  }

  .item {
    width: 100%;
    color: ${colors.footer.text};
    display: flex;
    line-height: initial;
    margin-bottom: 20px;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 185px;

    @media screen and (max-width: 820px) {
      margin-bottom: 30px;
    }

    & > * {
      flex: 1;
    }

    .item-image {
      display: block;
      margin-bottom: 5px;
      width: 100%;
      max-height: 135px;

      @media screen and (max-width: 820px) {
        margin-right: 0;
      }
    }

    .item-title {
      max-width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
    }
  }
`;
