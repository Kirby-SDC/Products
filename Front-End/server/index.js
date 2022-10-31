const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const axios = require('axios');
const config = require('../config.js');
const { getAllProducts, getProduct, getProductStyles, addToCart } = require('./controllers/overview.js');
const getRelatedProducts = require('./controllers/related.js');
const { getAllQuestions, getAnswers, addQuestion, addAnswer, reportQuestion, markQuestionHelpful, markAnswerHelpful, reportAnswer } = require('./controllers/qa.js');
const { getReviews, getReviewsMeta, addReview, markReviewHelpful, reportReview } = require('./controllers/reviews.js');

const requestConfig = {
  headers: {'Authorization': config.TOKEN}
}
const noCompressionConfig = {
  headers: {'Authorization': config.TOKEN, 'x-no-compression': true}
}

const filterGzip = () => {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.use(compression({level:6, threshold: 0}))
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.listen(3000);

// overview routes
app.get('/products', getAllProducts);
app.get('/products/:product_id', getProduct);
app.get('/products/:product_id/styles', getProductStyles);
app.post('/cart', addToCart)

// related routes
app.get('/products/:product_id/related', getRelatedProducts);

// qa routes
app.get('/qa/questions', getAllQuestions);
app.get('/qa/questions/:question_id/answers', getAnswers);
app.post('/qa/questions/', addQuestion);
app.post('/qa/questions/:question_id/answers', addAnswer);
app.put('/qa/questions/:question_id/helpful', markQuestionHelpful);
app.put('/qa/questions/:question_id/report', reportQuestion);
app.put('/qa/answers/:answer_id/helpful', markAnswerHelpful);
app.put('/qa/answers/:answer_id/report', reportAnswer);

// review routes
app.get('/reviews/', getReviews);
app.get('/reviews/meta', getReviewsMeta);
app.post('/reviews', addReview);
app.put('/reviews', markReviewHelpful);
app.put('reviews/:review_id/report/', reportReview);

// data tracker
app.post('/interactions', (req, res) => {
  axios.post(`${api}/interactions`, req.body, requestConfig)
    .then((response) => {
      res.sendStatus(response.status);
    })
    .catch((error) => {
      console.log('Error posting to API');
    });
})

console.log("Starting server");
