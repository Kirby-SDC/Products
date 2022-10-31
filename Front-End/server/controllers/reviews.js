const axios = require('axios');
const config = require('../../config.js')

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const requestConfig = {
  headers: {'Authorization': config.TOKEN}
}
const noCompressionConfig = {
  headers: {'Authorization': config.TOKEN, 'x-no-compression': true}
}

const getReviews = (req, res) => {
  axios.get(`${api}/reviews`, { params: { product_id: req.query.product_id, sort: req.query.sort, count: 5000 }, headers: { Authorization: config.TOKEN } })
  .then((response) => {
    res.json(response.data);
  });
}

const getReviewsMeta = (req, res) => {
  axios.get(`${api}/reviews/meta`, { params: { product_id: req.query.product_id }, headers: { Authorization: config.TOKEN } })
    .then((response) => {
      res.json(response.data);
    });
}

const addReview = (req, res) => {
  axios.post(`${api}/reviews`, req.body, requestConfig)
  .then((response) => {
  })
  .catch((error) => {
    console.log(error);
  });
}

const markReviewHelpful = (req, res) => {
  axios.put(`${api}/reviews/1275306/helpful`, requestConfig)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

const reportReview = (req, res) => {
}

module.exports = {
  getReviews: getReviews,
  getReviewsMeta: getReviewsMeta,
  addReview: addReview,
  markReviewHelpful: markReviewHelpful,
  reportReview: reportReview
}
