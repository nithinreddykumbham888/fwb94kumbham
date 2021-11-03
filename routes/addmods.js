var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = req.query 
console.log(`rows ${query.rows}`) 
console.log(`cols ${query.cols}`) 
res.render('addmods', { title: 'Add Mods', query: query });
});

module.exports = router;



// 7) Express makes it easy to get any query parameters that were added to the url. If req is 
// the request argument and you are looking for the parameter foo, you can get the value 
// of the parameter or some null like response by doing req.query.foo 
// 8) Inside the get router for addmods do the following to report the query values   let query = req.query 
// console.log(`rows ${query.rows}`) 
// console.log(`cols ${query.cols}`) 
 
// And then to pass the query object into the pug engine, use   { title: ‘Addmods’, query: query}  
// As the second argument of the render. 
// 9) Restart the local heroku server and verify that the new endpoint works.  Try it with 
// ?rows=10&cols=3 as an example and see if the console records the correct values. 
// 10) Add, Commit and Push to origin main. 