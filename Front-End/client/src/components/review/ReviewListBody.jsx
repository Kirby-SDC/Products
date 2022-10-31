/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ImagePopUp from './ImagePopUp.jsx';

const BodyStyle = styled.p`{
  max-width: 450px;
}`;

function ReviewListBody({ review }) {
  const [body, setBody] = useState(review.body.slice(0, 250));
  const [toggleBody, setToggleBody] = useState(false);
  const [imageId, setImageId] = useState(0);

  const showBody = () => {
    if (review.body.length > 250) {
      setToggleBody(!toggleBody);
    }
  };

  useEffect(() => {
    showBody(review.body);
  }, []);

  const handleClick = () => {
    setBody(review.body);
    setToggleBody(!toggleBody);
  };

  return (
    <>
      <BodyStyle style={{fontSize:"14px", wordWrap:"break-word"}}>{body}</BodyStyle>
      {toggleBody
        && <p onClick={() => { handleClick(); }} style={{ textDecoration: 'underline', color: '#62929E' }}>Show More...</p>}
      {review.photos.map((image, index) => (
        <ImagePopUp key={index} image={image} />
      ))}
    </>
  );
}

export default ReviewListBody;
