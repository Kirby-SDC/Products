import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import axios from 'axios';
import AddToCart from '../../overview/AddToCart.jsx';

axios.defaults.baseURL = 'http://127.0.0.1:3000';

var testData =
  {
    "1281032": {
        "quantity": 8,
        "size": "XS"
    },
    "1281033": {
        "quantity": 16,
        "size": "S"
    },
    "1281034": {
        "quantity": 17,
        "size": "M"
    },
    "1281035": {
        "quantity": 10,
        "size": "L"
    },
    "1281036": {
        "quantity": 15,
        "size": "XL"
    },
    "1281037": {
        "quantity": 4,
        "size": "XL"
    }
}

afterEach(()=> {
    cleanup();
})

test('should render AddToCart component', () => {
    render(
        <AddToCart currentStyleSkus={testData}/>
    );
    const test = screen.getByTestId('addtocart');
    expect(test).toBeInTheDocument();
})