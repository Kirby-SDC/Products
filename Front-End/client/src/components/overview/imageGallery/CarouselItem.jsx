import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ReactImageZoom from 'react-image-zoom';

const CarouselItem = ({ image, magnified }) => {
  const zoomProps =  {width: 600, height: 600, zoomWidth: 600, img: image.url, zoomPosition: 'original'};

  return (
    <>
      <StyledCarouselImageDiv>
        {magnified &&
          <StyledReactZoomImage>
            <ReactImageZoom {...zoomProps} />
          </StyledReactZoomImage>}
        {!magnified && <StyledCarouselImage src={image.url} />}
      </StyledCarouselImageDiv>
    </>
  )
}

CarouselItem.propTypes = {
  image: PropTypes.object,
  magnified: PropTypes.bool
}

const StyledCarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const StyledCarouselImageDiv = styled.div`
  width: 600px;
  height: 600px;
  overflow: hidden;
  position: relative;
  margin: 5px;
  display: flex;
  justify-content: center;
`

const StyledReactZoomImage = styled.div`
  &:hover {
    cursor:zoom-out;
}
`

export default CarouselItem;