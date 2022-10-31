/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/function-component-definition */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import StarRatingStaticSummary from '../shared_components/StarRatingStaticSummary.jsx';
import Bar from './Bar.jsx';
import ProductBreakDown from './ProductBreakDown.jsx';
// import NewStarTest from './NewStarTest.jsx';

const Container = styled.div`{
  padding: 10px;
}`;

const SummaryContainer = styled.div`{

  border-radius: 20px;
  padding: 10px;
}`;

const BreakDown = styled.div`{

  border-radius: 20px;
  padding: 10px;
}`;

const RatingSummary = ({
  productId, product, allReviews, setAllReviews, reviews, setReviews, metaData, setMetaData, average, setAverage
}) => {
  // need to pass data down for overall rating - will update this with axios call in reviews
  // const [average, setAverage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const [toggleFilter, setToggleFilter] = useState({
    1: false, 2: false, 3: false, 4: false, 5: false,
  });
  const [clearFilters, setClearFilters] = useState(false);

  const calculateAverage = () => {
    let { ratings } = metaData;
    let sum = 0;
    let sumFormula = 0;
    for (const rating in ratings) {
      sumFormula += rating * ratings[rating];
      sum += Number(ratings[rating]);
    }
    setTotalReviews(sum);
    const calculatedAverage = (sumFormula / sum);
    setAverage(calculatedAverage.toFixed(1));
  };

  useEffect(() => {
    calculateAverage();
  }, [metaData]);

  const handleFilter = (rating) => {
    let reset = true;
    let chop = false;
    // if all of the filters are false then clear reviews
    for (const rating in toggleFilter) {
      if (toggleFilter[rating]) {
        reset = false;
      }
    }
    if (reset) {
      var copy = reviews.slice();
      copy.splice(0, 2);
      chop = true;
    }

    const tempObj = { ...toggleFilter };
    tempObj[rating] = !tempObj[rating];
    if (tempObj[rating]) {
      setClearFilters(true);
      if (!chop) {
        copy = [...reviews];
      }
      const resultsFiltered = allReviews.filter((review) =>
      JSON.stringify(review.rating) === rating);
      const results = [...resultsFiltered, ...copy];
      const withoutDuplicates = [... new Set(results)]
      setReviews(withoutDuplicates);
    }
    if (!tempObj[rating]) {
      setClearFilters(false);
      const results = reviews.filter((review) => JSON.stringify(review.rating) !== rating);
      setReviews(results);
    }
    setToggleFilter(tempObj);
  };

  useEffect(() => {
    for (const rating in toggleFilter) {
      if (toggleFilter[rating]) {
        setClearFilters(true);
      }
    }
  }, [toggleFilter]);

  const resetFilters = () => {
    console.log('click');
    setToggleFilter({
      1: false, 2: false, 3: false, 4: false, 5: false,
    });
    setReviews(allReviews);
    setClearFilters(!clearFilters);
  };

  if (metaData.length === 0) {
    return null;
  }
  if (average === 0) {
    return null;
  }

  return (
    <Container>
      <div style={{display:"flex", alignItems:"center"}}>
      <h1 style={{width:"auto"}}>
        {' '}
        {average}
      </h1>
      <StarRatingStaticSummary rating={average} />
      </div>
      <p>{`Based on a total of ${totalReviews} star clicks!`}</p>
      <h2 style={{textAlign:"center"}}>Rating Summary</h2>
      {clearFilters
      && <button onClick={() => { resetFilters(); }} style={{ color: '#62929E', textDecoration: 'underline' }}>Click to clear all filters.</button>}
      <SummaryContainer>
        {Object.keys(metaData.ratings).sort().reverse().map((rating, index) => (
          <div key={index} onClick={() => { handleFilter(rating); }} style={{ marginTop:"10px", textAlign:"center", fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            {`${rating} STARS`}
            <div style={{height:"10px"}}></div>
            <Bar star={rating} toggle={toggleFilter[rating]} sum={totalReviews} rating={metaData.ratings[rating]} />
          </div>
        ))}
      </SummaryContainer>
      <h2 style={{textAlign:"center"}}>Product Breakdown</h2>
      <BreakDown>
        {Object.keys(metaData.characteristics).map((characteristic, index) => (
          <div key={index}>
            <ProductBreakDown
              characteristic={characteristic}
              value={metaData.characteristics[characteristic]}
            />
          </div>
        ))}
      </BreakDown>
    </Container>
  );
};

export default RatingSummary;
