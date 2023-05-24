import React, { memo } from 'react';

import FooterCredits from '!/components/common/InfoFooter/FooterCredits/FooterCredits';
import FooterReadMore from '!/components/common/InfoFooter/FooterReadMore/FooterReadMore';
import ShareButtons from '!/components/common/ShareButtons/ShareButtons';
import {
  CREDITS,
  HASHTAGS,
  READ_MORE,
  SHARE_MESSAGE,
} from '!/constants/global';

import { InfoFooterContainer } from './styles';

function InfoFooter() {
  return (
    <InfoFooterContainer>
      <div className="container">
        <div className="column">
          <div className="column-title">Compartilhe</div>
          <div className="column-content">
            <ShareButtons
              shareMessage={SHARE_MESSAGE}
              hashtags={HASHTAGS}
            />
          </div>
        </div>

        <div className="column">
          <div className="column-title">Créditos</div>
          <div className="column-content">
            <FooterCredits boxes={CREDITS} />
          </div>
        </div>

        <div className="column">
          <div className="column-title">Veja mais</div>
          <div className="column-content">
            <FooterReadMore boxes={READ_MORE} />
          </div>
        </div>
      </div>
    </InfoFooterContainer>
  );
}

export default memo(InfoFooter);
