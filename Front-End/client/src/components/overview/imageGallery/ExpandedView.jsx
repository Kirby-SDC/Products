import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { StyledLeftArrowExpand, StyledRightArrowExpand, StyledUpArrowExpand, StyledDownArrowExpand, StyledBackButton } from '../styledIcons.js';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';

const ExpandedView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, length, start, end, changeView} ) => {
  const [magnified, setMagnified] = useState(false);
  var onClickMagnify = (e) => {
    e.stopPropagation();
    setMagnified(!magnified);
  }

  return (
    <>
      <StyledCarousel>
        <StyledHorizontalButtons>
          {!magnified && current !== length-1 && <StyledRightArrowExpand onClick={nextSlide} />}
          {!magnified && current !== 0 && <StyledLeftArrowExpand onClick={prevSlide} />}
        </StyledHorizontalButtons>

        <StyledThumbnailAlign>
          <StyledButtonDiv>
            <StyledBackButton onClick={changeView}></StyledBackButton>
            {!magnified && verticalScroll && start !== 0 && <StyledUpArrowExpand onClick={upSlide} />}
            {!magnified && verticalScroll && end !== length && <StyledDownArrowExpand onClick={downSlide} />}
          </StyledButtonDiv>

            <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} start={start} />
        </StyledThumbnailAlign>

        <StyledCarouselImageSize onClick={onClickMagnify}>
          <ImageCarousel styleImages={styleImages} current={current} magnified={magnified} />
        </StyledCarouselImageSize>
      </StyledCarousel>
    </>
  );
}

ExpandedView.propTypes = {
  styleImages: PropTypes.array,
  activeThumbnails: PropTypes.array,
  current: PropTypes.number,
  setCurrent: PropTypes.func,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
  verticalScroll: PropTypes.bool,
  upSlide: PropTypes.func,
  downSlide: PropTypes.func,
  length: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
  changeView: PropTypes.func
}

const StyledCarousel = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  position: relative;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
  &:hover {
    cursor:crosshair;
  }
`

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

const StyledHorizontalButtons = styled.div`
  display: flex;
  align-content: center;
`

export default ExpandedView;