require('dotenv').config();

const { Client } = require('pg')
const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST
})
client.connect()

module.exports.client=client;




