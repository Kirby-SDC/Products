import React from 'react';
import { PropTypes } from 'prop-types'
import styled from 'styled-components';

const Thumbnail = ( {thumbnail, selected, onClick} ) => {
  return (
    <div data-testid="thumbnail">
      <StyledThumbnailDiv selected={selected}>
        <StyledThumbnail src={thumbnail.thumbnail_url} onClick={onClick} />
      </StyledThumbnailDiv>
    </div>
  )
}

Thumbnail.propTypes = {
  thumbnail: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

const StyledThumbnail = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform: scale(1.5);
  margin-top: 11px;
  object-fit: cover;
`

const StyledThumbnailDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 65px;
  height: 65px;
  overflow: hidden;
  position: relative;
  margin: 5px;
  border: ${props => props.selected ? '3px solid #62929E' : 'none'};
  &:hover {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.24),0 5px 10px 0 rgba(0,0,0,0.19);
  }
`

export default Thumbnail;