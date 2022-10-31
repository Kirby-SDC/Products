import React from 'react';
import { PropTypes } from 'prop-types'
import Thumbnail from './Thumbnail.jsx';

const ImageSidebar = ( {activeThumbnails, current, setCurrent, start, end} ) => {
  return (
    <>
      {activeThumbnails.map((thumbnail, index) =>
        <Thumbnail thumbnail={thumbnail} key={index} selected={index + start === current} onClick={(e) => {
          e.stopPropagation();
          setCurrent(index + start)}} />
      )}
    </>
  );
}

ImageSidebar.propTypes = {
  activeThumbnails: PropTypes.array,
  current: PropTypes.number,
  setCurrent: PropTypes.func,
  start: PropTypes.number,
  end: PropTypes.number
}

export default ImageSidebar;