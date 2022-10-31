import React from 'react';
import styled from 'styled-components';
import CarouselItem from './CarouselItem.jsx';
import { PropTypes } from 'prop-types'

const ImageCarousel = ( {styleImages, current, magnified} ) => {
  return (
    <>
        {styleImages.map((image, index) =>
          <div key={index}>
            {index === current && (
              <CarouselItem image={image} magnified={magnified} />
            )}
          </div>
        )}
    </>
  );
}

ImageCarousel.propTypes = {
  styleImages: PropTypes.array,
  current: PropTypes.number,
  magnified: PropTypes.bool
}

export default ImageCarousel;