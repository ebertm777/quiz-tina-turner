import PropTypes from 'prop-types';
import React from 'react';

import { FooterCreditsContainer } from './styles';

function FooterCredits({ boxes }) {
  return (
    <FooterCreditsContainer>
      <div className="container-credits">
        {boxes.map((box, index) => (
          <div key={index} className="box">
            <span className="role">{box.area}</span>
            {box.names.map((name, index) => (
              <span key={index} className="name">
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </FooterCreditsContainer>
  );
}

FooterCredits.propTypes = {
  boxes: PropTypes.arrayOf(
    PropTypes.shape({
      area: PropTypes.string.isRequired,
      names: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default FooterCredits;
