import React, { useState, useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import ProductInformation from './ProductInformation.jsx';
import Description from './Description.jsx';
import ImageGallery from './imageGallery/ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = ({ productId, average, reviews }) => {
  const [styleData, setStyleData] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [productData, setProductData] = useState(null);
  const [defaultView, setDefaultView] = useState(true);
  const [expandedView, setExpandedView] = useState(false);
  const [styleId, setStyleId] = useState(null);


  useEffect(() => {
    axios.get(`/products/${productId}/styles`)
      .then((response) => {
        setStyleData(response.data.results)
        setCurrentStyle(response.data.results[0])
        setStyleId(response.data.results[0].style_id)

      })
      .catch((error) => {
        console.log('error, could not get styles from api. error: ', error)
      });
    axios.get(`products/${productId}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log('error, could not get current product data from api. error: ', error)
      });
  }, [productId]);

  const onStyleClick = (e, id) => {
    for (var i = 0; i < styleData.length; i++) {
      if (styleData[i].style_id === id) {
        setCurrentStyle(styleData[i]);
      }
    }
  }

  const changeView = () => {
    setDefaultView(!defaultView);
    setExpandedView(!expandedView);
  }

  return (
    <>
      <StyledContainer data-testid="overview" default={defaultView}>
        <StyledImageGallery default={defaultView}>
          {currentStyle && <ImageGallery styleImages={currentStyle.photos} defaultView={defaultView} expandedView={expandedView} changeView={changeView} />}
        </StyledImageGallery>

        {defaultView && <>
          <StyledProductInfo>
            {productData && currentStyle && (<ProductInformation productData={productData} productId={productId} currentStyle={currentStyle} average={average} reviews={reviews}/>)}
          </StyledProductInfo>
          <StyledStyleSelector>
            {styleData && currentStyle && (<StyleSelector styleData={styleData} currentStyle={currentStyle} onStyleClick={onStyleClick} styleId={styleId} setStyleId={setStyleId} />)}
            </StyledStyleSelector>
          <StyledAddToCart>
            {currentStyle && <AddToCart currentStyleSkus={currentStyle.skus} />}
          </StyledAddToCart>
        </>}
          <StyledDescription>
            {productData && (<Description productData={productData} default={defaultView}/>)}
          </StyledDescription>

      </StyledContainer>
    </>
  );
}

Overview.propTypes = {
  productId: PropTypes.number,
  average: PropTypes.number,
  reviews: PropTypes.number
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.default ? '650px auto' : 'auto'};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.default ?
    `"left1 right1"
    "left1 right2"
    "left1 right3"
    "bottom bottom"` :
    `"left1"
    "bottom"`};
  column-gap: 10px;
  // min-width: 1100px;
`

const StyledImageGallery = styled.div`
  grid-area: left1;
  // margin-left: 100px;
  margin-left: ${props => props.default ? 'none' : '20%'};
  margin-right: ${props => props.default ? 'none' : '30%'};
`

const StyledProductInfo = styled.div`
  grid-area: right1;
`
const StyledDescription = styled.div`
  grid-area: bottom;
  margin-left: 100px;
`

const StyledStyleSelector = styled.div`
  grid-area: right2;
`
const StyledAddToCart = styled.div`
  grid-area: right3;
`

export default Overview;
