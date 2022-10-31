/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const CharacteristicRating = ({ type, setFunc, widthRatings }) => {

  return (
  <div data-testid="characteristic-1" onChange={(e) => { setFunc(Number(e.target.value)); }}>
    <p style={{ display: 'inline-block' }}>{`Please rate the ${type}`}</p>
    <input required type="radio" value="1" name={type} />
    1
    <input type="radio" value="2" name={type} />
    2
    <input type="radio" value="3" name={type} />
    3
    <input type="radio" value="4" name={type} />
    4
    <input type="radio" value="5" name={type} />
    5
  </div>
  )
};

export default CharacteristicRating;
