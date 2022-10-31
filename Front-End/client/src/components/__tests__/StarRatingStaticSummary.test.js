/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import StarRatingStaticSummary from '../review/StarRatingStaticSummary.jsx';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

const image = {
  "id": 2456464,
  "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666661253/departed_ete3as.jpg"
}

test('should render ReviewList Component', () => {
  render(<StarRatingStaticSummary rating={3.4}/>);
  const starElement = screen.getByTestId('star-1');
  expect(starElement).toBeInTheDocument();
});
