import styled from 'styled-components';

import { colors } from '!/styles/constants/colors';

export const InfoFooterContainer = styled.div`
  padding: 30px 0;
  background-color: ${colors.footer.background};

  @media (min-width: 640px) {
    padding: 70px 0;
    padding-top: 80px;
  }

  .container {
    display: flex;
    margin: 0 auto;
    max-width: 970px;
    align-items: flex-start;

    .column {
      width: 33.3%;
      margin-right: 20px;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;

      &:last-child {
        margin-right: 0;
      }

      @media screen and (max-width: 820px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    @media screen and (max-width: 820px) {
      padding: 0 10px;
      flex-direction: column;

      .column {
        width: 100%;
        margin-right: 0;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .column-title {
      display: inline-block;
      text-align: left;
      text-transform: uppercase;
      color: ${colors.footer.text};
      border-bottom: 1px solid ${colors.footer.separator};
      margin-bottom: 20px;
      padding-bottom: 10px;
      letter-spacing: 2px;
      width: 100%;
      font-family: Arial, Helvetica;
      font-size: 14px;
      font-weight: 700;

      @media screen and (max-width: 820px) {
        text-align: center;
      }
    }

    .column-content {
      display: flex;
      justify-content: flex-start;
    }
  }
`;
