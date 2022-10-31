import React from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';
import { PropTypes } from 'prop-types';
import { StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand } from '../styledIcons.js';

const DefaultView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, length, start, end} ) => {
  return (
    <>
      <StyledCarousel>
          <StyledHorizontalButtons>
            {current !== length-1 && <StyledRightArrow onClick={nextSlide} />}
            {current !== 0 && <StyledLeftArrow onClick={prevSlide} />}
          </StyledHorizontalButtons>
        <StyledCarouselImageSize>
          <ImageCarousel styleImages={styleImages} current={current} />
        </StyledCarouselImageSize>

        <StyledThumbnailAlign>
          <StyledVerticalButtons>
            {verticalScroll && start !== 0 && <StyledUpArrow onClick={upSlide} />}
            {verticalScroll && end !== length && <StyledDownArrow onClick={downSlide} />}
          </StyledVerticalButtons>
          <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} start={start} end={end} />
        </StyledThumbnailAlign>
      </StyledCarousel>
    </>
  );
}

DefaultView.propTypes = {
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
  end: PropTypes.number
}

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  text-align: left;
  position: absolute;
  margin-left: 10px;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
`

const StyledVerticalButtons = styled.div`
  display: flex;
  justify-content: center;
`
const StyledHorizontalButtons = styled.div`
  display: flex;
  align-content: center;
`

export default DefaultView;