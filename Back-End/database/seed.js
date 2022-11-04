const fs = require('fs');
const {client} = require('./connectDB.js')

var sql = fs.readFileSync('/Users/zrendy/HackReactor/SDC/Back-End/database/schema.sql').toString();

client
.query(sql, [])
.then(result => console.log(result))
.catch(err => console.log(err))