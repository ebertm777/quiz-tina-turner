import PropTypes from 'prop-types';
import React from 'react';

import ShareButton from '../ShareButtons/ShareButton/ShareButton';
import { ShareButtonsComponent } from './styles';

function ShareButtons({ shareMessage, hashtags = ['oglobo'] }) {
  const encodedShareMessage = encodeURIComponent(
    `${shareMessage} ${location.href}`,
  );

  return (
    <ShareButtonsComponent>
      <ShareButton
        shareMessage={encodedShareMessage}
        hashtags={hashtags}
        socialMedia="Facebook"
      />
      <ShareButton
        shareMessage={encodedShareMessage}
        hashtags={hashtags}
        socialMedia="Twitter"
      />
      <ShareButton
        shareMessage={encodedShareMessage}
        hashtags={hashtags}
        socialMedia="WhatsApp"
      />
    </ShareButtonsComponent>
  );
}

ShareButtons.propTypes = {
  textColor: PropTypes.string,
  shareMessage: PropTypes.string.isRequired,
  hashtags: PropTypes.array,
};

export default ShareButtons;
