/* eslint-disable arrow-body-style */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  RelatedBlockContainer, LeftArrow, RightArrow,
} from './Assets/comparisonWidget.style.js';
import RelatedInfo from './RelatedInfo.jsx';
import RelatedCard from './RelatedCard.jsx';
import staticData from '../../example_data/relatedProductStyles.json';
import exampleOfProducts from '../../example_data/relatedProductStyles.json';
import {PropTypes} from 'prop-types';
import './Assets/myStyle.css';

const RelatedBlock = function ({ productId, setProductId }) {
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const mySlider = useRef(null);
  const [relatedArray, setRelatedArray] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState([]);
  const [ratingInfo, setRatingInfo] = useState([]);
  const [dataCompiled, setDataCompiled] = useState([]);

  useEffect(() => {
    const farRight = document.getElementById('slider').scrollWidth - document.getElementById('slider').clientWidth;
    setRightArrow(farRight);
  }, [productInfo]);


  useEffect(() => {
    // fetchData();
    let arrayOfRelated = [];
    axios.get(`/products/${productId}/related`)
      .then((results) => {
        arrayOfRelated = results.data;
        // setRelatedArray(results.data);
        return Promise.all(
          [
            Promise.all(arrayOfRelated.map((id) => {
              return axios.get(`/products/${id}`)
            })),
            Promise.all(arrayOfRelated.map((id) => {
              return axios.get(`/products/${id}/styles`)
            })),
            Promise.all(arrayOfRelated.map((id) => {
              return axios.get('/reviews/meta', { params: { product_id: id } })
            }))
          ]
        )
      })
      .then(([products, styles, ratings]) => {
        ratings = ratings.map((response) => {
          let ratingData = {};
          let obj = response.data.ratings;
          let numOfReviews = 0;
          let weightedFactor = 0;
          for(let key in obj) {
            weightedFactor += Number(key) * Number(obj[key]);
            numOfReviews += Number(obj[key]);
          }
          let ratingAverage = weightedFactor / numOfReviews;
          ratingData.id = response.data.product_id;
          ratingData.ratingAvg = ratingAverage;
          return ratingData;
        })
        products = products.map((response) => {
          return response.data
        })
        styles = styles.map((response) => {
          return response.data
        })

        setProductInfo(products);
        setStyleInfo(styles);
        setRatingInfo(ratings);
      })
  }, [productId]);


  const slideLeft = function () {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 250;
    setLeftArrow(slider.scrollLeft);
  };

  const slideRight = function () {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 250;
    setLeftArrow(slider.scrollLeft);
  };

  return (
    <div data-testid = "outerBlock">
      <h2>Related Products</h2>
      <RelatedBlockContainer>
        {scrollValue === 0 ? <></> : <LeftArrow onClick={slideLeft} />}
        <div id="slider" ref={mySlider} onScroll={(e) => {
          setScrollValue(e.target.scrollLeft);
          }}>
          <RelatedInfo dataCompiled={dataCompiled} setDataCompiled={setDataCompiled} productId={productId} setProductId={setProductId} productInfo={productInfo} styleInfo={styleInfo} ratingInfo={ratingInfo} />
        </div>
        {scrollValue === rightArrow ? <></> : <RightArrow onClick={slideRight} />}
      </RelatedBlockContainer>
      </div>
  );
};

//please review this proptype
RelatedBlock.propTypes = {

  productId: PropTypes.string,
  setProductId: PropTypes.func

}

export default RelatedBlock;

