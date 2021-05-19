const express = require('express');
const axios = require('axios');
const router = express.Router();

const db = require('../models');
const { response } = require('express');


// ************************ GET ROUTES **********************************



router.get('/', (req, res) => {
        db.Cryptocurrencies.find
        res.render('Currency/results');
    }); 

    router.get('/cryptosearch', (req, res) => {
// const cryptoUrl = `https://api.nomics.com/v1/currencies?key=${process.env.API_KEY}&ids=${req.query}`;
   const cryptoUrl = `https://www.worldcoinindex.com/apiservice/ticker?key=${process.env.Key}&label=${req.query}&fiat=${req.query}`;
  //This is how Im getting my data. It getting through this api
  axios.get(cryptoUrl)
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
  res.render('Currency/CryptoSearch'); //This shows allows the page to be seen on the local host because of res.render
  });

//1. CLARIFY ROUTES AND WHAT EVERYTHING IS DOING
//2. BE ABLE TO ADD THINGS TO MY DATABASE(able select all from db just had to do double quotes)
//3. BE ABLE TO PULL FROM DATABASE AND SHOW ON MY RESULTS EJS

//An array of objects is now printing and the array is called 'data'


router.post('/results', (req, res) => {
    db.cryptocurrency.create({
        name: req.body.name
    })
})





// router.get('/Mywatchlist', (req, res) => {


//     res.render('Mywatchlist.ejs');
// });


// router.get('/results', (req, res) => {
//     const Key = req.params.API_KEY
//     res.render('results.ejs')
// });

// router.get('/CryptoSearch/:id', (req, res) => {
//     const id = req.params.id
//         res.render('/CryptoSearch');
// })



// // ****************************POST ROUTES***********************************/

// router.post('/Cryptosearch', (req, res) => {

// })

// router.post('/Mywatchlist', (req, res) => {

// })

// router.post('/results', (req, res) => {

// })
module.exports = router