const axios = require('axios');
const config = require('../../config.js')

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const requestConfig = {
  headers: {'Authorization': config.TOKEN}
}
const noCompressionConfig = {
  headers: {'Authorization': config.TOKEN, 'x-no-compression': true}
}

const getAllProducts = (req, res) => {
  axios.get(`${api}/products`, requestConfig)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500);
    });
}

const getProduct = (req, res) => {
  let itemId = req.params.product_id;
  axios.get(`${api}/products/${itemId}`, requestConfig)
    .then((productInfo) => {
      res.send(productInfo.data);
    })
    .catch((error) => {
      res.status(500);
    });
}

const getProductStyles = (req, res) => {
  let itemId = req.params.product_id;
  axios.get(`${api}/products/${itemId}/styles`, requestConfig)
    .then((styles) => {
      res.send(styles.data);
    })
    .catch((error) => {
      res.status(500);
    });
}

const addToCart = (req, res) => {
  var id = req.body.sku_id;
  axios.post(`${api}/cart`, {sku_id: id}, noCompressionConfig)
    .then((response)=> {
      res.sendStatus(response.status);
    })
    .catch((err)=>{
      console.log('Error, cannot post to cart. Error: ', err)
    })
}

module.exports = {
  getAllProducts: getAllProducts,
  getProduct: getProduct,
  getProductStyles, getProductStyles,
  addToCart: addToCart
};