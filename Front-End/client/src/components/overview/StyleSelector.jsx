import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types'
import styled from 'styled-components';

const StyleSelector = ( {styleData, currentStyle, onStyleClick, styleId, setStyleId} ) => {
  return (
    <>
      <p>
        <b>STYLE &gt; </b>
        <span>{currentStyle.name}</span>
      </p>
      <br></br>
      <StyledIconsDiv data-testid="style">
        {styleData.map((style, index) =>
          <StyledIconDiv id={`styleselector${index}`} key={index} onClick={(e) => {
            onStyleClick(e, style.style_id);
            setStyleId(style.style_id);
            }}>
            <StyledIconImage src={style.photos[0].thumbnail_url}/>
            {styleId === style.style_id && <StyledOverlay className="overlay">✓</StyledOverlay>}
          </StyledIconDiv>
        )}
      </StyledIconsDiv>
    </>
  )
}

StyleSelector.propTypes = {
  styleData: PropTypes.array,
  currentStyle: PropTypes.object,
  onStyleClick: PropTypes.func,
  styleId: PropTypes.number,
  setStyleId: PropTypes.func
}

const StyledIconImage = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  transform: scale(1.5);
  margin-top: 12px;
`

const StyledIconDiv = styled.div`
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 5px;
  border: 1px solid #62929E;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.24),0 5px 10px 0 rgba(0,0,0,0.19);
  }
`

const StyledIconsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`

const StyledOverlay = styled.div`
  position: absolute;
  bottom: 0px;
  right: 8px;
  font-size: 45px;
  user-select: none;
`

export default StyleSelector;

