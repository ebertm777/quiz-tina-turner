import styled from 'styled-components';

import { colors } from '!/styles/constants/colors';

export const FooterCreditsContainer = styled.div`
  .container-credits {
    text-align: center;
    margin: 0 auto 10px;

    .box {
      &:not(:first-of-type) {
        margin-top: 25px;
      }
    }

    .role,
    .names,
    .name {
      display: block;
      line-height: 18px;
      margin-bottom: 3px;
      color: ${colors.footer.text};
      text-align: left;
      font-size: 15px;
    }

    .role {
      margin-bottom: 5px;
      color: ${colors.footer.text};
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .names {
      font-family: Arial;
      font-size: 15px;
      margin-bottom: 30px;

      .name {
        display: block;
      }
    }
  }
`;
