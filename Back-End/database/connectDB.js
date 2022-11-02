require('dotenv').config();
const { Client } = require('pg')
const client = new Client()
client.connect()

module.exports.query = function (queryStr, params, cb) {
  return client.query(queryStr, params, (err, res) => {
    console.log(err, res)
    client.end()
  })

}
