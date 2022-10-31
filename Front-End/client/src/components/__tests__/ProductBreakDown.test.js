


/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProductBreakDown from '../review/ProductBreakDown.jsx';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

const value = {
  "id": 125031,
  "value": "3.0749279538904899"
}

test('should render ReviewList Component', () => {
  render(<ProductBreakDown characteristic={'Length'} value={value}/>);
  const productBreakDownElement = screen.getByTestId('breakdown-1');
  expect(productBreakDownElement).toBeInTheDocument();
});


