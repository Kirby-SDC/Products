import React from 'react';
import {PropTypes} from 'prop-types'
import { RelatedCardGraphic, TextOnCard, ImageOnCard, AddCardBtn, OutfitCardGraphic, BtnContainer, OuterBtnDiv, StarsContainer, CloseActnBtn } from './Assets/comparisonWidget.style.js';
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar';
import StarRatingStaticSummary from '../shared_components/StarRatingStaticSummary.jsx';

const OutfitInfo = function ({ data, productRating, outfitData, setOutfitData }) {
  const deleteCard = () => {
    let copyOutfitData = outfitData.slice();
    for(let i = 0; i < copyOutfitData.length; i++) {
      if(copyOutfitData[i].id === data.id) {
        copyOutfitData.splice([i], 1)
      }
    }
    setOutfitData(copyOutfitData);
  };


  return (
  <OutfitCardGraphic data-testid="cardOne">
    <CloseActnBtn onClick={deleteCard} />
    <ImageOnCard image={data.url} />
    <TextOnCard  >
      <p style={{color: "#F4F4F9"}} >
        {data.category}
        {' '}
        <br />
        {data.name}
        {' '}
        <br />
        ${data.price}
        {' '}
        <br />
        <StarsContainer>
            <StarRatingStaticSummary rating={productRating.ratingAvg}/>
        </StarsContainer>
      </p>
    </TextOnCard>
  </OutfitCardGraphic>
)
};

//please review this proptype
OutfitInfo.propTypes = {

  data: PropTypes.object,

}

export default OutfitInfo;
