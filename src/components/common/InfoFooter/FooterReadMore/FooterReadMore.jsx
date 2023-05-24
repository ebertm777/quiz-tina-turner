import PropTypes from 'prop-types';
import React from 'react';

import vejaMais1 from '!/assets/images/veja-mais-1.jpg';
import vejaMais2 from '!/assets/images/veja-mais-2.jpg';
import vejaMais3 from '!/assets/images/veja-mais-3.jpg';

import { FooterReadMoreComponent } from './styles';

function FooterReadMore({ boxes }) {
  const loadImage = (index) => {
    if (index === 0) return vejaMais1;
    if (index === 1) return vejaMais2;
    if (index === 2) return vejaMais3;
  };

  return (
    <FooterReadMoreComponent>
      <div className="box">
        {boxes.map((box, index) => (
          <a
            href={box.href}
            key={index}
            rel="noopener noreferrer"
            className="item"
            target="_blank"
          >
            <img
              alt={box.linkTitle}
              src={loadImage(index)}
              className="item-image"
            />
            <span className="item-title">{box.linkTitle}</span>
          </a>
        ))}
      </div>
    </FooterReadMoreComponent>
  );
}

FooterReadMore.propTypes = {
  boxes: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      linkTitle: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FooterReadMore;
