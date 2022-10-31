/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import DropDown from '../review/DropDown.jsx';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('should render ReviewList Component', () => {
  render(<DropDown />);
  const dropElement = screen.getByTestId('drop-1');
  expect(dropElement).toBeInTheDocument();
});
