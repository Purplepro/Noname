require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const axios = require('axios');



const SECRET_SESSION = process.env.SECRET_SESSION;



app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: SECRET_SESSION,
  //cookie
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});


app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/profile', (req, res) => {
//   res.render('profile');
// });

app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render('profile', { id, name, email});
});

// app.get('/cryptosearch', (req, res) => {
// const cryptoUrl = `https://api.nomics.com/v1/markets?key=${process.env.API_KEY}`;
  
//   axios.get(cryptoUrl)
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error)
//   })
//   res.render('Currency/CryptoSearch');
//   }); 


  // app.get('/Mywatchlist', (req, res) => {
  //   res.render('./Currency/Mywatchlist');
  // });





app.use('/auth', require('./controllers/auth'));

app.use('/Currency', require('./controllers/CryptoCurrency'));



const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports =  server;

// module.exports = {
//   API_key:process.env.API_KEY
// }
