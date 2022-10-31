/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';

const Container = styled.div`{
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  width: 1000px;
}`;

const Title = styled.h2`{
  text-align: center
}`;


const Review = ({ reviews, setReviews, allReviews, setAllReviews, average, setAverage, productId, productName }) => {
  const [product, setProduct] = useState(tempProduct);
  const [metaData, setMetaData] = useState([]);

  const tempProduct = {
    id: productId,
    name: productName,
  };

  const getMetaData = () => {
    axios.get('/reviews/meta', { params: { product_id: productId} })
      .then(getMetaSuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getMetaData, [productId]);

  const getMetaSuccess = (response) => {
    setMetaData(response.data);
  };

  if (metaData) {
    return (
      <div id="review">
        <Title>Ratings & Reviews</Title>
        <Container data-testid="review-1">
          <RatingSummary
            average={average}
            setAverage={setAverage}
            reviews={reviews}
            setReviews={setReviews}
            setMetaData={setMetaData}
            metaData={metaData}
            product={tempProduct}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
            productId={productId}
          />
          <ReviewList
            productId={productId}
            reviews={reviews}
            setReviews={setReviews}
            metaData={metaData}
            product={tempProduct}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
          />
        </Container>
      </div>
    );
  }
}



export default Review;
