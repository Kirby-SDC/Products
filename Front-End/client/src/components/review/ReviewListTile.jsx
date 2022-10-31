/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import  checkMark   from '../../assets/checkmark.png'
import { parseISO, format } from 'date-fns';
import { GoVerified } from '@react-icons/all-files/go/GoVerified';
import ReviewListBody from './ReviewListBody.jsx';
import StarRatingStatic from './StarRatingStatic.jsx';
import Helpfulness from './Helpfulness.jsx';

const Container = styled.div`{
  test-align: center;
  border: solid;
  border-width: 1px;
  border-color: #62929E;
  padding: 20px;
  border-radius: 20px;
  margin: 32px;
  box-shadow: 5px 5px 10px;
}`;

const Summary = styled.p`{
  font-weight: bold;
}`;

const Response = styled.div`{
  border : solid;
  background-color: AliceBlue;
  border-radius: 20px;
  padding: 10px;
}`;

function ReviewListTile({ review, metaData }) {

  return (
    <Container data-testid="reviewlisttile-1">
      <StarRatingStatic style={{userSelect:"none"}} rating={review.rating} review={review} />
      <div style={{ textAlign:"right", whiteSpace: 'nowrap' }}>
        <GoVerified style={{color:"#62929E"}}/> <span style={{fontSize:"14px"}}><b>{review.reviewer_name}</b> <i>{`${format(parseISO(review.date), ' MMMM d, yyyy ')}`}</i></span>

      </div>
      <Summary>{review.summary.slice(0, 60)}</Summary>
      <ReviewListBody review={review} />
      {(review.recommend
        && (
        <p style={{fontSize:"14px"}}>
          Recommended
          <span><GoVerified style={{paddingLeft:"5px", color:"#62929E"}}/></span>
        </p>
        )
      )}
      {review.response !== null
      && (
      <Response>
        Response from seller:
        <p>{review.response}</p>
      </Response>
      )}
      <Helpfulness review={review} help={review.helpfulness} metaData={metaData} />
    </Container>
  );
}

export default ReviewListTile;
