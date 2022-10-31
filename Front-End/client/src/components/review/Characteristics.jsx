/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import CharacteristicRating from './CharacteristicRating.jsx';

const Characteristics = ({
  metaData, width, comfort, quality, length, size, fit,
  setWidth, setComfort, setQuality, setLength, setSize, setFit,
}) => {
  const [widthRatings, setWidthRatings] = useState(['none selected', 'Too Narrow', 'Slightly Narrow', 'Perfect', 'Slightly Wide', 'Too Wide']);
  const [comfortRatings, setComfortRatings] = useState(['none selected', 'Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect']);
  const [qualityRatings, setQualityRatings] = useState(['none selected', 'Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect']);
  const [lengthRatings, setLengthRatings] = useState(['none selected', 'Runs Short', 'Runs Slightly Short', 'Perfect', 'Runs Slightly Long', 'Runs Long']);
  const [sizeRatings, setSizeRatings] = useState(['none selected', 'A Size Too Small', '1/2 a Size Too Small', 'Perfect', '1/2 a Size Too Big', 'A Size Too Wide']);
  const [fitRatings, setFitRatings] = useState(['none selected', 'Runs Tight', 'Runs Slightly Tight', 'Perfect', 'Runs Slightly Long', 'Runs Long']);

  console.log(width, comfort, quality, length, size, fit)

  return (
    <>
      {(metaData.characteristics.Width)
      && (
      <>
        <p data-id="characteristic-1">{`${widthRatings[width]}`}</p>
        <CharacteristicRating type="Width" setFunc={setWidth} />
      </>
      )}
      {(metaData.characteristics.Comfort)
    && (
    <>
      <p>{`${comfortRatings[comfort]}`}</p>
      <CharacteristicRating type="Comfort" setFunc={setComfort} />
    </>
    )}
      {(metaData.characteristics.Quality) && (
      <>
        <p>{`${qualityRatings[quality]}`}</p>
        <CharacteristicRating type="Quality" setFunc={setQuality} />
      </>
      )}
      {(metaData.characteristics.Length) && (
      <>
        <p>{`${lengthRatings[length]}`}</p>
        <CharacteristicRating type="Length" setFunc={setLength} />
      </>
      )}
      {(metaData.characteristics.Size) && (
      <>
        <p>{`${sizeRatings[size]}`}</p>
        <CharacteristicRating type="Size" setFunc={setSize} />
      </>
      )}
      {(metaData.characteristics.Fit) && (
      <>
        <p>{`${fitRatings[fit]}`}</p>
        <CharacteristicRating type="Fit" setFunc={setFit} />
      </>
      )}
    </>
  );
};

export default Characteristics;
