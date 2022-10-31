import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import axios from 'axios';
import Thumbnail from '../../overview/Thumbnail.jsx';
import App from '../../App.jsx';


axios.defaults.baseURL = 'http://127.0.0.1:3000';

var testData = [{
  "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
}]

var onClick = () => {};

afterEach(()=> {
  cleanup();
})

test('should render Thumbnail component', () => {
  render(<Thumbnail thumbnail={testData} selected={true} onClick={onClick}/>);
  const test = screen.getByTestId('thumbnail');
  expect(test).toBeInTheDocument();
});