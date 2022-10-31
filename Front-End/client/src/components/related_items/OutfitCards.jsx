import React from 'react';
import { RelatedCardGraphic, TextOnCard, ImageOnCard, AddCardBtn, OutfitCardGraphic, BtnContainer, OuterBtnDiv } from './Assets/comparisonWidget.style.js';

const OutfitCards = function ({clickHandler}) {
  return (
    <OutfitCardGraphic data-testid="cardOne">
      <OuterBtnDiv>
        <BtnContainer>
          <AddCardBtn onClick={clickHandler}></AddCardBtn>
        </BtnContainer>
      </OuterBtnDiv>
  </OutfitCardGraphic>
  )
};

export default OutfitCards;