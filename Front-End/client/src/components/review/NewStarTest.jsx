/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
// import './Rater.css';

const NewStarTest = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [value] = useState(100);
  const [iconValue, setIconValue] = useState(5);
  const size = 25;

  return (
    <div id="start-wrap">
      <svg className="linear-gradient-template">
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="25%" style={{ stopColor: 'rgb(255, 193, 7)' }} />
          <stop offset="25%" style={{ stopColor: 'rgb(228, 229, 233)' }} />
        </linearGradient>
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="75%" style={{ stopColor: 'rgb(255, 193, 7)' }} />
          <stop offset="75%" style={{ stopColor: 'rgb(228, 229, 233)' }} />
        </linearGradient>
      </svg>
      {[...Array(5)].map((icon, i) => {
        const value = i + 1;
        return (
          <label key={i}>
            <FaStar
              key={i}
              className="star"
              color={value <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={size}
              onMouseEnter={(e) => setHover(value)}
              onMouseLeave={() => {
                const svgDom = document.getElementsByClassName('star')[i];
                const pathDom = svgDom.children[0];
                pathDom.style.fill = '';
                setHover(value);
              }}
              onMouseMove={(e) => {
                const svgDom = document.getElementsByClassName('star')[i];
                const pathDom = svgDom.children[0];
                if (e.pageX - svgDom.getBoundingClientRect().left <= size / 2) {
                  pathDom.style.fill = 'url(#orange_red)';
                } else {
                  pathDom.style.fill = '';
                }
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default NewStarTest;
