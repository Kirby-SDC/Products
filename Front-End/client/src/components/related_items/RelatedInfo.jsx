import React from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedInfo = function ({ dataCompiled, setDataCompiled, productId, setProductId, productInfo, styleInfo, ratingInfo }) {

  const mappedData = productInfo.map((dataObj, idx) => {
    let styleProduct = styleInfo.find((obj) => dataObj.id.toString() === obj.product_id.toString());
    let productRating = ratingInfo.find((obj) => dataObj.id.toString() === obj.id.toString());
    let category = dataObj.category;
    let productName = dataObj.name;
    let price = styleProduct.results[0].original_price //dataObj.styles.results[0].original_price;
    let image = styleProduct.results[0].photos[0].thumbnail_url;
    let salePrice = styleProduct.results[0].sale_price;
    let features = dataObj.features;
    let currentId = dataObj.id;
    let starRating = productRating.ratingAvg;

    return <RelatedCard category={category} productName={productName} price={price} image={image} salePrice={salePrice} features={features} currentId={currentId} productId={productId} setProductId={setProductId} starRating={starRating} key={idx} />;
  });

  return (
    <div>
      {mappedData}
    </div>
  )
};

export default RelatedInfo;
