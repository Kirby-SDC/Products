import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types'
import styled from 'styled-components';
import StarRatingStaticSummary from '../shared_components/StarRatingStaticSummary.jsx';

const ProductInformation = ({ productData, currentStyle, average, reviews }) => {
  return (
    <div data-testid="product-info">
      {reviews > 0 ?
      <StarP>
        <StarRatingStaticSummary rating={average}/>
        <StyledLink href="#review">Read all {reviews} reviews</StyledLink>
      </StarP> : null}

      <p>{productData.category.toUpperCase()}</p>
      <h1>{productData.name}</h1>

      {currentStyle.sale_price ?
        <div><s>${currentStyle.original_price}</s> <StyledSalePrice className="price">${currentStyle.sale_price}</StyledSalePrice></div>
      : '$' + currentStyle.original_price}
    </div>
  )
}

ProductInformation.propTypes = {
  productData: PropTypes.object,
  currentStyle: PropTypes.object,
  average: PropTypes.string,
  reviews: PropTypes.number
}

const StyledSalePrice = styled.span`
  color: red;
`

const StyledLink = styled.a`
  text-decoration: none;

  &: hover {
    color: #62929E;
  };

  &: visited {
    color: #62929E;
  }
`

const StarP = styled.p`
  text-align: left;
`

export default ProductInformation;