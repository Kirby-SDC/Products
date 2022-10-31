import React, { useState, useEffect } from 'react';

function StarRatingStatic({rating},{product}) {
  const [avgRating, setRating] = useState(rating);

  const getAverageRating = (product) => {
    let sum = 0;
    product.results.forEach((review) => {
      sum += review.rating;
    });
    const average = sum / product.results.length;
    setRating(average);
  };

  useEffect(() => {
    if (!rating) {
      getAverageRating(product);
    }
  }, []);

  return (
    <div style={{fontSize:"25px"}}className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            type="button"
            key={index}
            className={index <= avgRating ? 'on' : 'off'}
          >
            <span className="star">&#9733;</span>
          </span>
        );
      })}
    </div>
  );
}

export default StarRatingStatic;
