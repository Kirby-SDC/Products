/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReviewList from '../review/ReviewList.jsx';
import '@testing-library/jest-dom';

const metaData = {
  "product_id": "37315",
  "ratings": {
      "1": "33",
      "2": "7",
      "3": "20",
      "4": "14",
      "5": "20"
  },
  "recommended": {
      "false": "40",
      "true": "54"
  },
  "characteristics": {
      "Size": {
          "id": 125044,
          "value": "2.7375000000000000"
      },
      "Width": {
          "id": 125045,
          "value": "2.6790123456790123"
      },
      "Comfort": {
          "id": 125046,
          "value": "3.0131578947368421"
      },
      "Quality": {
          "id": 125047,
          "value": "2.9210526315789474"
      }
  }
}

const allReviews = [
  {
      "review_id": 1175958,
      "rating": 5,
      "summary": "",
      "recommend": false,
      "response": null,
      "body": "I wore this to a paintball tournament and nobody could see me with this amazing camouflage. When we were boarding the bus, they didn't see me at the end of the line and the driver closed the doors in my face. They left without me. I am alone.",
      "date": "2022-04-10T00:00:00.000Z",
      "reviewer_name": "paint",
      "helpfulness": 14,
      "photos": []
  },
  {
      "review_id": 1277038,
      "rating": 1,
      "summary": "There and back again",
      "recommend": false,
      "response": null,
      "body": "A \"no\" on recommendation should change the metadata I get back",
      "date": "2022-10-22T00:00:00.000Z",
      "reviewer_name": "frodo",
      "helpfulness": 12,
      "photos": []
  },
  {
      "review_id": 1276959,
      "rating": 5,
      "summary": "here we go",
      "recommend": false,
      "response": null,
      "body": "here i go again on my own going down the only road ive ever known",
      "date": "2022-10-21T00:00:00.000Z",
      "reviewer_name": "frodo",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2456380,
              "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666361582/departed_aoswy6.jpg"
          }
      ]
  }
];

const reviews =   [{
  "review_id": 1175958,
  "rating": 5,
  "summary": "",
  "recommend": false,
  "response": null,
  "body": "I wore this to a paintball tournament and nobody could see me with this amazing camouflage. When we were boarding the bus, they didn't see me at the end of the line and the driver closed the doors in my face. They left without me. I am alone.",
  "date": "2022-04-10T00:00:00.000Z",
  "reviewer_name": "paint",
  "helpfulness": 14,
  "photos": []
},
{
  "review_id": 1277038,
  "rating": 1,
  "summary": "There and back again",
  "recommend": false,
  "response": null,
  "body": "A \"no\" on recommendation should change the metadata I get back",
  "date": "2022-10-22T00:00:00.000Z",
  "reviewer_name": "frodo",
  "helpfulness": 12,
  "photos": []
},
{
  "review_id": 1276959,
  "rating": 5,
  "summary": "here we go",
  "recommend": false,
  "response": null,
  "body": "here i go again on my own going down the only road ive ever known",
  "date": "2022-10-21T00:00:00.000Z",
  "reviewer_name": "frodo",
  "helpfulness": 0,
  "photos": [
      {
          "id": 2456380,
          "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666361582/departed_aoswy6.jpg"
      }
  ]
}
];

const product = {
  "id": 37311,
  "name": "Camo Onesie"
};

afterEach(() => {
  cleanup();
});

test('should render ReviewList Component', () => {
  render(<ReviewList product={product} reviews={reviews} allReviews={allReviews} metaData = {metaData}/>);
  const reviewListElement = screen.getByTestId('reviewlist-1');
  expect(reviewListElement).toBeInTheDocument();
});
