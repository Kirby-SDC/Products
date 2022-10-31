/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ImagePopUp from '../review/ImagePopUp.jsx';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

const image = {
  "id": 2456464,
  "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666661253/departed_ete3as.jpg"
}

test('should render ReviewList Component', () => {
  render(<ImagePopUp image={image}/>);
  const imageElement = screen.getByTestId('image-1');
  expect(imageElement).toBeInTheDocument();
});
