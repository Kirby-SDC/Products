const db = require('./connectDB.js')

db.query(`SELECT * from Persons`, null, function(err, res){
  console.log('my result is' , res)
})