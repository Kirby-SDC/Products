const axios = require('axios');
const config = require('../../config.js')

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const requestConfig = {
  headers: {'Authorization': config.TOKEN}
}
const noCompressionConfig = {
  headers: {'Authorization': config.TOKEN, 'x-no-compression': true}
}

const getRelatedProducts = (req, res) => {
  let itemId = req.params.product_id;
  axios.get(`${api}/products/${itemId}/related`, requestConfig)
    .then((relatedItems) => {
      res.send(relatedItems.data);
    })
    .catch((error) => {
      res.status(500);
    });
}

module.exports = getRelatedProducts;