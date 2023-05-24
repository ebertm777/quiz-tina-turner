import PropTypes from 'prop-types';
import React from 'react';

function InfoartePaywallPreview({ children }) {
  return <div id="infoarte-paywall-preview">{children}</div>;
}

InfoartePaywallPreview.propTypes = {
  children: PropTypes.element,
};

export default InfoartePaywallPreview;
