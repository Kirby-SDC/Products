import React, { useState, useEffect } from 'react';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
import styled, { css } from 'styled-components';

const Gradient = styled.linearGradient`{
  width: 0;
  height: 0;
}`;

function StarRatingStaticSummary({rating}) {

  let average = Number(rating);
  if (rating === 'NaN') {
    average = 1;
  }
  let whole = Math.floor(average);
  let fraction = average % whole;
  let empty = 5 - whole;
  if (fraction > 0 ) {
    empty = empty - 1;
  }

  return (
    <div style={{width:"125px", height:"57px", marginLeft:"10px"}}key={7} data-testid="star-1" className="star-rating">
    <svg key={6} style={{height:"0px"}} className="linear-gradient-template">
    <Gradient key={1} id="half" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{stopColor: "#393939"}}></stop>
        <stop offset="50%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
    </Gradient>
    <Gradient key={2} id="quarter" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="33%" style={{stopColor: "#393939"}}></stop>
        <stop offset="33%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
    </Gradient>
    <Gradient key={3} id="threeQuarter" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="66%" style={{stopColor: "#393939"}}></stop>
        <stop offset="66%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
    </Gradient>
    <Gradient key={4} id="empty" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor: "rgb(255, 193, 7)"}}></stop>
        <stop offset="0%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
    </Gradient>
    <Gradient key={5} id="full" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="100%" style={{stopColor: "#393939"}}></stop>
        <stop offset="100%" style={{stopColor: "#393939"}}></stop>
    </Gradient>
</svg>

      {[...Array(whole)].map((star, index) => {
        return ( <svg  key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="100" height="100" width="25" xmlns="http://www.w3.org/2000/svg" style={{height:"20px", color: "rgb(255, 193, 7)"}}>
        <path key={index} style={{fill: "url(#full)"}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
       </svg>)
      })}
      {[...Array(1)].map((star, index) => {
        if (fraction === 0) {
          return (<></>)
        }
        if (fraction >= .125 && fraction <=.375){
          return (<svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="100" height="100" width="25" xmlns="http://www.w3.org/2000/svg" style={{height:"20px", color: "rgb(255, 193, 7)"}}>
          <path key={index} style={{fill: "url(#quarter)"}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
         </svg>)
        }
        if (fraction > .375 && fraction <=.625){
          return (<svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="100" height="100" width="25" xmlns="http://www.w3.org/2000/svg" style={{height:"20px", color: "rgb(255, 193, 7)"}}>
          <path key={index} style={{fill: "url(#half)"}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
         </svg>)
        }
        if (fraction > .625 && fraction <=.875){
          return (<svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="100" height="100" width="25" xmlns="http://www.w3.org/2000/svg" style={{height:"20px", color: "rgb(255, 193, 7)"}}>
          <path key={index} style={{fill: "url(#threeQuarter)"}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
         </svg>)
        }
      })}
      {[...Array(empty)].map((star, index) => {
        return ( <svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="100" height="100" width="25" xmlns="http://www.w3.org/2000/svg" style={{height:"20px", color: "rgb(255, 193, 7)"}}>
        <path key={index} style={{fill: "url(#empty)"}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
       </svg>)
      })}
    </div>
  );
}

export default StarRatingStaticSummary;
