/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from "prop-types";

const StyleBar = styled.div`
width: ${(props) =>  (props.rating / props.sum) * 100}%;
height: 10px;
background-color: #5F8575;
border-radius: 20px;
`;

const OuterBar = styled.div`
background-color: grey;
height: 10px;
border-radius: 20px;
width: auto;
&:hover {
  background-color: #353433
}
`;

const Bar = ({
  rating, sum, toggle, star, color, width
}) => (

  <div data-testid="bar-1" style={{width:"100%"}}>
    <OuterBar >
      <StyleBar rating={rating} sum={sum}/>
      </OuterBar>
      <span>
        {`(${rating}) - ${Math.round((rating / sum) * 100)}%`}
        {' '}
      </span>
      {toggle
        && <p>{`Filtered by ${star} stars`}</p>}
  </div>
);

export default Bar;
