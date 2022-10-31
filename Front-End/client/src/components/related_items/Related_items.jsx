import React, { useState, useEffect } from 'react';
import RelatedBlock from './RelatedBlock.jsx';
import OutfitBlock from './OutfitBlock.jsx';
import {PropTypes} from 'prop-types'
import { RelatedModuleStyle } from './Assets/comparisonWidget.style.js';



const Related = function ({productId, setProductId}) {

  return (
    <div style={{width: "1100px"}} data-testid = "mainComponent" >
      <RelatedBlock productId={productId} setProductId={setProductId} />
      <OutfitBlock productId={productId} setProductId={setProductId} />
    </div>
  );
};

//please review this proptype
Related.propTypes = {

  productId: PropTypes.string,
  setProductId: PropTypes.func

}

export default Related;
