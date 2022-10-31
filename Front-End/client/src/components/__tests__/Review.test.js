/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Review from '../review/Review.jsx';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('should render ReviewList Component', () => {
  render(<Review productId={37311} productName={"Camo Onesie"}/>);
  const reviewElement = screen.getByTestId('review-1');
  expect(reviewElement).toBeInTheDocument();
});
