import React, { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types'
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';

const AddToCart = ({ currentStyleSkus }) => {
  const [size, setSize] = useState('');
  const [sizeSelected, setSizeSelected] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const dropdownRef = useRef(null);
  const messageRef = useRef(null);

  var mappedQtyOptions;

  var mappedSizeOptions = Object.keys(currentStyleSkus).map((sku, index) => {
    if (currentStyleSkus[sku].quantity > 0) {
      return <option key={index}>{currentStyleSkus[sku].size}</option>}
    }
  );

  useEffect(() => {
    Object.keys(currentStyleSkus).forEach((sku, index) =>
      {if (currentStyleSkus[sku].size === size) {
        setMaxQuantity(currentStyleSkus[sku].quantity)
      }
    });
  }, [size]);

  useEffect(()=> {
    setTimeout(() => {
      setCartMessage(false);
    }, 3000);
  }, [buttonClicked])

  if (maxQuantity > 0) {
    var max = maxQuantity > 15 ? 15 : maxQuantity;
    var quantityOptions = [];
    for (let i = 2; i < max + 1; i++) {
      quantityOptions.push(i);
    }
    mappedQtyOptions = quantityOptions.map((num, i) =>
      <option key={i}>{num}</option>
    );
  }

  const onButtonClick = () => {
    var sku_id;
    if (!sizeSelected) {
      $(messageRef.current).text('Please select a size');
      $(dropdownRef.current).attr('size', mappedSizeOptions.length);
      $(dropdownRef.current).on('change',function () {
        $(messageRef.current).text('');
        $(dropdownRef.current).attr('size', 1);
      });
    }

    if (sizeSelected) {
      Object.keys(currentStyleSkus).forEach((sku, index) => {
        if (currentStyleSkus[sku].quantity >= quantity && currentStyleSkus[sku].size === size) {
          sku_id = sku;
        }
      });
      axios.post('/cart', {sku_id: sku_id})
        .then((response) => {
          console.log('Item added to cart!');
        })
        .catch((error) => {
          console.log('error, could not add item to cart. error: ', error);
        });
      setButtonClicked(true);
      setCartMessage(true);
    }
  }

  return (
    <> {mappedSizeOptions[0] ?
        <AddToCartContainer data-testid="addtocart">
          <div ref={messageRef}></div>
          <select ref={dropdownRef} value={size} name="size" onChange={(e) => {
            setSize(e.target.value);
            setSizeSelected(true);
          }}>
            <option value="select">select size</option>
            {mappedSizeOptions}
          </select>

          <select name="quantity" onChange={(e) => {
            setQuantity(e.target.value);
          }}>
            { sizeSelected && maxQuantity > 0 ? <> <option value="select">1</option> {mappedQtyOptions} </> : <option value="select">-</option> }
          </select>
          <p>
            {maxQuantity > 0 && <AddToCartButton data-testid="expand-button" onClick={onButtonClick}>ADD TO BAG +</AddToCartButton>}
          </p>

          {cartMessage && <p>Added to cart!</p>}
        </AddToCartContainer> : <div>OUT OF STOCK</div> }
    </>
  )
}

AddToCart.propTypes = {
  currentStyleSkus: PropTypes.object,
}

const AddToCartButton = styled.button`
  background-color: white;
  font-family: monospace;
  border: 1px solid black;
  &:hover {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.24),0 5px 10px 0 rgba(0,0,0,0.19);
  }
`

const AddToCartContainer = styled.div`
  width: 200px;
`

export default AddToCart;