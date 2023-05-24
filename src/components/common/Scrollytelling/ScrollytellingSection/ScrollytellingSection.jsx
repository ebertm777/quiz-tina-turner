import PropTypes from 'prop-types';
import React from 'react';

import { SectionContainer } from './styles.js';

function ScrollytellingSection({
  background,
  children,
  isFadeTransition,
  onSetSectionContentRef,
  stateSections,
  sectionIndex,
  contentPosition,
  backgroundMobile,
}) {
  return (
    <SectionContainer isFadeTransition={isFadeTransition}>
      <div
        className={`section-background ${
          stateSections[sectionIndex].isOnViewPort && 'section-background-fixed'
        } ${isFadeTransition && 'section-background-hidden'} ${
          backgroundMobile && 'section-background-desktop'
        }`}
        style={{
          top: stateSections[sectionIndex].backgroundTopPixels,
        }}
      >
        {background}
      </div>

      {backgroundMobile && (
        <div
          className={`section-background section-background-mobile ${
            stateSections[sectionIndex].isOnViewPort &&
            'section-background-fixed'
          } ${isFadeTransition && 'section-background-hidden'}`}
          style={{
            top: stateSections[sectionIndex].backgroundTopPixels,
          }}
        >
          {backgroundMobile}
        </div>
      )}

      <div
        className={`section-content ${
          contentPosition === 'left' && 'section-content--left'
        } ${contentPosition === 'right' && 'section-content--right'}`}
        ref={(sectionContentRef) =>
          onSetSectionContentRef(sectionContentRef, sectionIndex)
        }
      >
        {children}
      </div>
    </SectionContainer>
  );
}

ScrollytellingSection.propTypes = {
  background: PropTypes.node,
  children: PropTypes.node.isRequired,
  isFadeTransition: PropTypes.bool,
  onSetSectionContentRef: PropTypes.func,
  stateSections: PropTypes.arrayOf(
    PropTypes.shape({
      isOnViewPort: PropTypes.bool,
      backgroundTopPixels: PropTypes.number,
    }),
  ),
  sectionIndex: PropTypes.number,
  contentPosition: PropTypes.oneOf(['left', 'right']),
  backgroundMobile: PropTypes.node,
};

export default ScrollytellingSection;
