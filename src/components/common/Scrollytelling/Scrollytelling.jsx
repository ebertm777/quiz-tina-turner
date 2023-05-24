import PropTypes from 'prop-types';
import React, {
  Children,
  cloneElement,
  createRef,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';

import innerHeight from '!/utils/ios-inner-height';

import { BackgroundContainer, ScrollytellingContainer } from './styles';

function Scrollytelling({ children, isFadeTransition }) {
  const refScrollytelling = useRef(null);
  const refSectionsContent = useRef(Children.map(children, () => createRef()));

  const [stateScrollytelling, setStateScrollytelling] = useState({
    currentSection: 0,
    isInsideScrollytelling: false,
    fixedBackgroundsTopPixels: 0,
  });

  const [stateSections, setStateSections] = useState(
    Children.map(children, () => ({
      isOnViewPort: false,
      backgroundTopPixels: 0,
    })),
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = innerHeight()();
      const windowScrollTop = window.pageYOffset;
      const windowScrollBottom = windowHeight + windowScrollTop;

      const scrollytellingSizeAndPosition =
        refScrollytelling.current.getBoundingClientRect();

      const scrollytellingDetails = {
        distanceFromTop: scrollytellingSizeAndPosition.top,
        top: windowScrollTop + scrollytellingSizeAndPosition.top,
        height: scrollytellingSizeAndPosition.height,
        endPosition:
          scrollytellingSizeAndPosition.height +
          windowScrollTop +
          scrollytellingSizeAndPosition.top,
      };

      const scrollytellingIsAboveWindowScroll =
        windowScrollBottom > scrollytellingDetails.endPosition;

      if (
        scrollytellingDetails.distanceFromTop < 0 &&
        windowScrollBottom < scrollytellingDetails.endPosition
      ) {
        setStateScrollytelling((prevState) => ({
          ...prevState,
          isInsideScrollytelling: true,
          fixedBackgroundsTopPixels: 0,
        }));
      } else {
        setStateScrollytelling((prevState) => ({
          ...prevState,
          isInsideScrollytelling: false,
          fixedBackgroundsTopPixels: scrollytellingIsAboveWindowScroll
            ? scrollytellingDetails.height - windowHeight
            : 0,
        }));
      }

      refSectionsContent.current.forEach((sectionContent, sectionIndex) => {
        const sectionSizeAndPosition = sectionContent.getBoundingClientRect();

        const sectionDetails = {
          top: windowScrollTop + sectionSizeAndPosition.top,
          height: sectionSizeAndPosition.height,
          bottom:
            windowScrollTop +
            sectionSizeAndPosition.top +
            sectionSizeAndPosition.height,
        };

        const isSectionContentVisible =
          windowScrollBottom > sectionDetails.top &&
          windowScrollBottom < sectionDetails.bottom + windowHeight;

        if (isSectionContentVisible) {
          setStateSections((prevStateSections) => {
            const stateSectionsCopy = [...prevStateSections];
            const newStateSection = {
              ...stateSectionsCopy[sectionIndex],
              isOnViewPort: true,
              backgroundTopPixels: 0,
            };

            return [
              ...stateSectionsCopy.slice(0, sectionIndex),
              newStateSection,
              ...stateSectionsCopy.slice(sectionIndex + 1),
            ];
          });

          setStateScrollytelling((prevState) => ({
            ...prevState,
            currentSection: sectionIndex,
          }));
        } else {
          const sectionContentIsAboveWindowScroll =
            windowScrollBottom > sectionDetails.bottom + windowHeight;

          setStateSections((prevStateSections) => {
            const stateSectionsCopy = [...prevStateSections];
            const newStateSection = {
              ...stateSectionsCopy[sectionIndex],
              isOnViewPort: false,
              backgroundTopPixels: sectionContentIsAboveWindowScroll
                ? sectionDetails.height + windowHeight
                : 0,
            };

            return [
              ...stateSectionsCopy.slice(0, sectionIndex),
              newStateSection,
              ...stateSectionsCopy.slice(sectionIndex + 1),
            ];
          });
        }
      });
    };

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setSectionContentRef = (refSectionContent, index) => {
    refSectionsContent.current[index] = refSectionContent;
  };

  const sectionBackgrounds = [];

  const childrenWithProps = Children.map(children, (child, index) => {
    sectionBackgrounds.push({
      background: child.props.background,
      backgroundMobile: child.props.backgroundMobile,
    });

    return cloneElement(child, {
      stateSections,
      sectionIndex: index,
      onSetSectionContentRef: setSectionContentRef,
      isFadeTransition,
    });
  });

  return (
    <ScrollytellingContainer ref={refScrollytelling}>
      {isFadeTransition && (
        <BackgroundContainer
          backgroundsContainerFixed={stateScrollytelling.isInsideScrollytelling}
          style={{
            top: stateScrollytelling.fixedBackgroundsTopPixels,
          }}
        >
          {sectionBackgrounds.map((sectionBackground, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={`background-container ${
                    sectionBackground.backgroundMobile && 'show-desktop'
                  }`}
                  style={{
                    zIndex: 500 - index,
                    opacity: index < stateScrollytelling.currentSection ? 0 : 1,
                  }}
                >
                  {sectionBackground.background}
                </div>

                {sectionBackground.backgroundMobile && (
                  <div
                    className="background-container show-mobile"
                    style={{
                      zIndex: 500 - index,
                      opacity:
                        index < stateScrollytelling.currentSection ? 0 : 1,
                    }}
                  >
                    {sectionBackground.backgroundMobile}
                  </div>
                )}
              </Fragment>
            );
          })}
        </BackgroundContainer>
      )}

      {childrenWithProps}
    </ScrollytellingContainer>
  );
}

Scrollytelling.propTypes = {
  children: PropTypes.node.isRequired,
  isFadeTransition: PropTypes.bool,
};

export default Scrollytelling;
