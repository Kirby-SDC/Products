const axios = require('axios');
const config = require('../../config.js')

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const requestConfig = {
  headers: {'Authorization': config.TOKEN}
}
const noCompressionConfig = {
  headers: {'Authorization': config.TOKEN, 'x-no-compression': true}
}

const getAllQuestions = (req, res) => {
  const newRequestConfig = {
    params: req.query,
    headers: {'Authorization': config.TOKEN}
  }
  axios.get(`${api}/qa/questions`, newRequestConfig)
    .then((response)=> {
      res.json(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
}

// Answers List
// Returns answers for a given question. This list does not include any reported answers.
const getAnswers = (req, res) => {
  axios.get(`${api}/qa/questions/${req.params.question_id}/answers`, requestConfig )
    .then((response)=>{
      res.send(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
}

// Add a Question
// Adds a question for the given product
const addQuestion = (req, res) => {
  axios.post(`${api}/qa/questions`, req.body, noCompressionConfig)
    .then((response)=> {
      res.sendStatus(response.status)
    })
    .catch((err)=>{
      console.log('WE ARE HAVING SOME ISSUES!', err)
    })
}

// Add an Answer
// Adds an answer for the given question
const addAnswer = (req, res) => {
  let id = parseInt(req.query.question_id)

  axios.post(`${api}/qa/questions/${id}/answers`, req.body, noCompressionConfig)
    .then((response)=> {
      res.sendStatus(response.status)
    })
    .catch((err)=>{
      console.log('WE ARE HAVING SOME ISSUES!', err)
    })
}


// Mark Question as Helpful
// Updates a question to show it was found helpful.
const markQuestionHelpful = (req, res) => {
  // {params: {question_id: id}}
  let number = req.query.question_id

  axios.put(`${api}/qa/questions/${number}/helpful`, {}, noCompressionConfig)
    .then((success) => {
      console.log('succesfully put route for helpful questions')
      res.end()
    })
    .catch((error) => {
      console.log('error in put route for helpful questions', error)
    })
}

// Report Question
// Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
const reportQuestion = (req, res) => {
  let number = req.query.question_id

  axios.put(`${api}/qa/questions/${number}/report`, {}, noCompressionConfig)
    .then((success) => {
      console.log('succesfully put route for report questions')
      res.end()
    })
    .catch((error) => {
      console.log('error in put route for report questions', error)
    })
}

// Mark Answer as Helpful
// Updates an answer to show it was found helpful.
const markAnswerHelpful = (req, res) => {
  let number = req.query.answer_id

  axios.put(`${api}/qa/answers/${number}/helpful`, {}, noCompressionConfig)
    .then((success) => {
      console.log('succesfully put route for helpful answers')
      res.end()
    })
    .catch((error) => {
      console.log('error in put route for helpful answers', error)
    })
}


// Report Answer
// Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.
const reportAnswer = (req, res) => {
  let number = req.query.answer_id

  axios.put(`${api}/qa/answers/${number}/report`, {}, noCompressionConfig)
    .then((success) => {
      console.log('successfully put route for report answer')
      res.end()
    })
    .catch((error) => {
      console.log('error in put route for report answer', error)
    })
}

module.exports = {
  getAllQuestions: getAllQuestions,
  getAnswers: getAnswers,
  addQuestion: addQuestion,
  addAnswer: addAnswer,
  reportQuestion, reportQuestion,
  markQuestionHelpful: markQuestionHelpful,
  markAnswerHelpful: markAnswerHelpful,
  reportAnswer: reportAnswer
}