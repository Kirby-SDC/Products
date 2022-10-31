import React, {useEffect, useState} from 'react';
import {
  OutfitBlockContainer, LeftArrow, RightArrow, LeftAOutfit, RightAOutfit
} from './Assets/comparisonWidget.style.js';
import RelatedCard from './RelatedCard.jsx';
import OutfitCards from './OutfitCards.jsx';
import OutfitInfo from './OutfitInfo.jsx';
import './Assets/myStyle.css';
import axios from 'axios';

const OutfitBlock = function ({ productId }) {
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [outfitData, setOutfitData] = useState([]);
  const [productRating, setProductRating] = useState({});

  useEffect(() => {
    let displayedData = {};
    axios.get(`products/${productId}`)
      .then((response) => {
        displayedData.id = response.data.id;
        displayedData.name = response.data.name;
        displayedData.category = response.data.category;
        displayedData.price = response.data.default_price;
      })
      .catch((error) => {
        console.log('error, could not get current product data from api. error: ', error)
      });
    axios.get(`/products/${productId}/styles`)
      .then((response) => {
        displayedData.url = response.data.results[0].photos[0].url;
      })
      .catch((error) => {
        console.log('error, could not get styles from api. error: ', error)
      });
    axios.get('/reviews/meta', { params: { product_id: productId } })
      .then((response) => {
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
          setProductRating(ratingData);
      })

    setCurrentProduct(displayedData);
    }, [productId])

  useEffect (() => {
    const farRight = document.getElementById('slider-two').scrollWidth - document.getElementById('slider-two').clientWidth;
    setRightArrow(farRight);
  }, [scrollValue]);


  const slideLeft = function () {
    const slider = document.getElementById('slider-two');
    slider.scrollLeft -= 250;
    setLeftArrow(slider.scrollLeft);
  };

  const slideRight = function () {
    const slider = document.getElementById('slider-two');
    slider.scrollLeft += 250;
    setLeftArrow(slider.scrollLeft);
  };

  const onClick = () => {

    let flag = false;
    for(let i = 0; i < outfitData.length; i++) {

      if (outfitData[i].id === productId) {
        flag = true;
        break;
    }
      }
    let copy = outfitData.slice();
    // let joinedData = [...currentProduct, ...copy]
    if (flag === false) {
      copy.push(currentProduct);
      setOutfitData(copy);
    }
  }


  let mapped = outfitData.map((item, index) => {
    return <OutfitInfo data={item} productRating={productRating} outfitData={outfitData} setOutfitData={setOutfitData} key={index}/>;
  });

  return (
    <div data-testid = "outfitOuter">
      <h2>Your Outfit</h2>
      <OutfitBlockContainer>
        {scrollValue === 0 ? <></> : <LeftAOutfit onClick={slideLeft} />}
        <div id="slider-two" onScroll={(e) => {setScrollValue(e.target.scrollLeft)}}>
          <span><OutfitCards clickHandler={onClick}/></span>
          <span>{currentProduct ? mapped : null}</span>
        </div>
        {scrollValue === rightArrow ? <></> : <RightAOutfit onClick={slideRight} />}
      </OutfitBlockContainer>
    </div>
  )

};

export default OutfitBlock;
