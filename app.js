const express = require('express');
const app = express();
const Instagram = require('node-instagram').default;
var server = require('http').Server( app )
var io = require('socket.io')(server)
var request = require('request');
var OAuth = require('oauth');
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: '905985786964623361-k9pipbiScCgeR5V2O7jk8EutZ2qyT1c',
  consumer_secret: 'VrXUHOWbh7ayOkkPZKepIylf4Yg7M9TtCAZGIrfLKcCNB',
  access_token_key: 'FROnFxYGrgXGgGpOz6mq6q2zG',
  access_token_secret: '1whbtDgKElVC1hGORGVb4cziEHWVjPPYCnV4eyFfQYjLDKzOjX'
});
//jcopel1111
const instaAuthOne = new Instagram({
  clientId: '961c35338db84337987c232f4dc476ab',
  clientSecret: 'ad7bbe78b9f04271804d652a0a39c261',
  accessToken: '6284667505.961c353.bbb9637e75064912a6ed4baeb79e26ef',
});
//jcopel2222 needs fixing
const instaAuthTwo = new Instagram({
  clientId: '961c35338db84337987c232f4dc476ab',
  clientSecret: 'ad7bbe78b9f04271804d652a0a39c261',
  accessToken: '6285059758.961c353.935b3b1d002445a3b384ee422c87e7d0',
});
//jcopel333
const instaAuthThree = new Instagram({
  clientId: '961c35338db84337987c232f4dc476ab',
  clientSecret: 'ad7bbe78b9f04271804d652a0a39c261',
  accessToken: '6285296041.961c353.7e85aa93e588417fb4c54b006ef71f91',
});
//jcopel444
// const instaAuthFour = new Instagram({
//   clientId: '961c35338db84337987c232f4dc476ab',
//   clientSecret: 'ad7bbe78b9f04271804d652a0a39c261',
//   accessToken: '6284205463.961c353.43b3bc03d765490ab72b23218cb30f1c',
// });

// use this for multiple accounts
// instaAuthOne.get('users/self', (err, data) => {
//   if (err) {
//     // an error occured
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
app.use(express.static('public')) //server out the public files statically!


// twitter ------------------------------------------>

app.get('/twitter',function(req,res){

  var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'FROnFxYGrgXGgGpOz6mq6q2zG',
  '1whbtDgKElVC1hGORGVb4cziEHWVjPPYCnV4eyFfQYjLDKzOjX',
  '1.0A',
  null,
  'HMAC-SHA1'
  );

  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=gayculture&src=typd&count="'+Math.round(Math.random()*10)+'"',
    '905985786964623361-k9pipbiScCgeR5V2O7jk8EutZ2qyT1c', //test user token
    'VrXUHOWbh7ayOkkPZKepIylf4Yg7M9TtCAZGIrfLKcCNB', //test user secret
    function (e, data, response){
      // if (e) console.error(e);
      console.log( JSON.parse(data) );
      res.send(JSON.parse(data))

    })
})

// instagram ----------------------------------------->

app.get('/instaServerReq', function(req, res){

instaAuthOne.get('users/self/media/recent',{ count: Math.round(Math.random()*15)}).then(function(data){
  console.log(data);
  // res.send(JSON.parse(data)) //this is already json we dont need you....
  res.send(data)
  })

  instaAuthTwo.get('users/self/media/recent',{ count: Math.round(Math.random()*15)}).then(function(data){
    console.log(data);
    // res.send(JSON.parse(data)) //this is already json we dont need you....
    res.send(data)
    })
  instaAuthThree.get('users/self/media/recent',{ count: Math.round(Math.random()*15)}).then(function(data){
      console.log(data);
      // res.send(JSON.parse(data)) //this is already json we dont need you....
      res.send(data)
      })
  // instaAuthFour.get('users/self/media/recent',{ count: Math.round(Math.random()*20) }).then(function(data){
  //         console.log(data);
  //         // res.send(JSON.parse(data)) //this is already json we dont need you....
  //         res.send(data)
  //         })
  // instaAuthFive.get('users/self/media/recent',{ count: Math.round(Math.random()*20) }).then(function(data){
  //         console.log(data);
  //         // res.send(JSON.parse(data)) //this is already json we dont need you....
  //         res.send(data)
  //         })
  // instaAuthSix.get('users/self/media/recent',{ count: Math.round(Math.random()*20) }).then(function(data){
  //         console.log(data);
  //         // res.send(JSON.parse(data)) //this is already json we dont need you....
  //         res.send(data)
  //         })
})

//------------------------------------------------------->

var port = process.env.PORT || 3000
server.listen(port, function(){
  console.log("app listening on port" + port + "!")
})
