/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {VscTriangleDown} from '@react-icons/all-files/vsc/VscTriangleDown'


const OuterBar = styled.div`
background-color: grey;
height: 10px;
border-radius: 20px;
width: auto
`;

const WhiteBar = styled.div`
background-color: white;
width:10px;
`;

const Triangle = styled.div`
display:flex;
border-left: solid;
border-left-color: transparent;
border-width: ${(props) => (`${props.value}px`)};
`;

const ProductBreakDown = ({ characteristic, value }) => {
  const Width = ['none selected', 'Too Narrow', 'Slightly Narrow', 'Perfect', 'Slightly Wide', 'Too Wide'];
  const Comfort = ['none selected', 'Uncomfortable', 'Slightly Uncomfortable', 'Okay     ', 'Comfortable', 'Perfect'];
  const Quality = ['none selected', 'Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect'];
  const Length = ['none selected', 'Runs Short', 'Runs Slightly Short', 'Perfect', 'Runs Slightly Long', 'Runs Long'];
  const Size = ['none selected', 'A Size Too Small', '1/2 a Size Too Small', 'Perfect', '1/2 a Size Too Big', 'A Size Too Wide'];
  const Fit = ['none selected', 'Runs Tight', 'Runs Slightly Tight', 'Perfect', 'Runs Slightly Long', 'Runs Long'];
  const [characteristicArray, setCharacteristicArray] = useState([]);

  useEffect(() => {
    if (characteristic === 'Fit') {
      setCharacteristicArray(Fit);
    }
    if (characteristic === 'Width') {
      setCharacteristicArray(Width);
    }
    if (characteristic === 'Comfort') {
      setCharacteristicArray(Comfort);
    }
    if (characteristic === 'Quality') {
      setCharacteristicArray(Quality);
    }
    if (characteristic === 'Length') {
      setCharacteristicArray(Length);
    }
    if (characteristic === 'Size') {
      setCharacteristicArray(Size);
    }
  }, []);

  return (
    <>
      <div data-testid='breakdown-1' style={{textAlign:"center", fontWeight:"bold"}}>{characteristic.toUpperCase()}</div>
      <div style={{textAling:"center", width:"auto"}}>
      <Triangle value={(value.value/5)*300}>
        <VscTriangleDown/>
      </Triangle>
      <OuterBar style={{display:"inline-block", width:"33.3%"}}></OuterBar>
      <OuterBar style={{display:"inline-block", width:"33.3%"}}></OuterBar>
      <OuterBar style={{display:"inline-block", width:"33.3%"}}></OuterBar>
      </div>
      {/* <Bar list="tickmarks" name="char" min="0" max="100" value={value.value * 10} step="0" type="range" /> */}
      <div style={{width:"auto", display:"flex", justifyContent:"space-between"}}>
      <span>{`${characteristicArray[1]}`}</span>
      <span>{`${characteristicArray[3]}`}</span>
      <span>{`${characteristicArray[5]}`}</span>
      </div>
    </>
  );
};

export default ProductBreakDown;
