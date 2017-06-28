var express = require('express');
var session = require('express-session');
var mustache = require('mustache-express');

var app = express
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('/'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitalized: true

}));
//**middleware -
app.use(function(req, res, next) {
  req.session.users = {
    Edwin: {
      password: 'bacon1',
      loggedIn: false
    },

    Jon: {
      password: 'cheese',
      loggedIn: false
    },

    Josh: {
      password: 'apples',
      logeqgedIn: false
    }
  };

});
//**callback
next();

});

app.get('/', function(req, res, next) {
  res.render('user');

});

app.get('/', function(req, res, next) {
  if (req.session.username) {
    res.send('Hello' + req.session.username)
  } else {
    res.redirect('login')

  }
})

//**boolean expression
app.post('/login', function(req, res, next) {
  if (res.session.users[req.body.username] === req.boby.password) {
    req.session.username = req.body.username;

  }
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('validation')


})
