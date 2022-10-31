import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaPinterest } from '@react-icons/all-files/fa/FaPinterest';
import StarRatingStaticSummary from '../shared_components/StarRatingStaticSummary.jsx';

const Description = ({ productData, defaultView }) => {
  let featuresMapped;

  if (productData) {
    featuresMapped = productData.features.map((element, index) => {
      return (
      <div key={index}>{element.feature}: {element.value}</div>)}
  )}

  return (
    <>
      <StyledContainer>

        {productData.description && <StyledDescription>
            <h2>{productData.slogan}</h2>
            <p>{productData.description}</p>
          </StyledDescription>
        }
        <StyledHR></StyledHR>

        {productData && <StyledFeatures>
          <h3>Features</h3>
          {featuresMapped}
        </StyledFeatures>}

        <StyledHR></StyledHR>

        <StyledSocials>
          <h3>Share On Social Media</h3>
          <a target="blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F&amp;src=sdkpreparse"}>
          <FaTwitter size={20}/></a>
          <a target="blank" href={"https://www.pinterest.com/pin/99360735500167749/"}><FaPinterest size={20}/></a>
          <a target="blank" href={"https://twitter.com/intent/tweet?text=Hello%20world"}><FaFacebook size={20}/></a>
        </StyledSocials>

      </StyledContainer>
    </>
  )
}

Description.propTypes = {
  productData: PropTypes.object,
  defaultView: PropTypes.bool
}

const StyledSocials = styled.div`
  display: table-cell;
  padding-left: 35px;

  > a {
    margin: 5px;
    padding: 5px;
    color: #546A7B;
    &: hover {
      color: #62929E;
    };
  }
`
const StyledContainer = styled.div`
  display: table;
  width: 100%;
  padding: 10px;
`
const StyledDescription = styled.div`
  width: 40%;
  display: table-cell;
  // padding-right: 50px;
`
const StyledFeatures = styled.div`
  padding-left: 35px;
  display: table-cell;
  width: 25%;
`

const StyledHR = styled.div`
  display: table-cell;
  height: 60%;
  width: 1px;
  background-color: #62929E;
`

export default Description;