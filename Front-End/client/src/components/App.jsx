import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AppStyle } from '../assets/styles.js';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme.js";
import { StyledBanner, StyledFooter, StyledLogo, StyledToggler, Logo, StyledShoppingCart } from '../assets/AppStyles.js';
import logo from '../assets/logo-white-black-transparent.png';
import Overview from './overview/Overview.jsx';
import Related from './related_items/Related_items.jsx';
import Review from './review/Review.jsx';
import QA from './QA/QA.jsx';
import Toggler from './Toggler.jsx';

//data-tracker
const postInteraction = (element, widget, time) => {
  let dataObj = {
    element: element,
    widget: widget,
    time: time
  }

  axios.post('/interactions', dataObj)
    .then((success) => {
      console.log('Successfully posted to database!')
    })
    .catch((error) => {
      console.log('Error posting interaction data')
    })
}

function App() {
  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState('');
  const [average, setAverage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
}

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        // set default data to first product
        setProductId(parseInt(response.data[0].id));
        setProductName(response.data[0].name);
      })
      .catch((error) => {
        console.log('error, could not get products from api. error: ', error)
      });
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <StyledBanner className="banner">
        <StyledLogo><Logo src={logo}></Logo></StyledLogo>
        <StyledShoppingCart/>
        <StyledToggler>
          <Toggler theme={theme} toggleTheme={themeToggler}/>
        </StyledToggler>
      </StyledBanner>
      <AppStyle/>

      <div className="app">
        {productId && <Overview className='Overview' productId={productId} average={average} reviews={allReviews.length}></Overview>}
        {productId && <Related productId={productId} setProductId={setProductId} />}
        {productId && <QA className='QA' productID={productId} />}
        {productId && <Review reviews={reviews} setReviews={setReviews} allReviews={allReviews} setAllReviews={setAllReviews} average={average} setAverage={setAverage} productName={productName} productId={productId} className='Review'/>}
      </div>
      <StyledFooter className="banner">
        <ul style={{listStyle: 'none', padding: '40px'}}>
          <li style={{marginBottom: '10px'}}>Shop</li>
          <li style={{marginBottom: '10px'}}>About</li>
          <li style={{marginBottom: '10px'}}>Help</li>
        </ul>
        <div style={{marginLeft: 'auto', padding: '50px'}}>© Baratheon</div>
      </StyledFooter>
      </>
    </ThemeProvider>
  );
}

export const interactionContext = createContext(postInteraction);
export default App;
