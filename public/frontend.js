$(function(){
//------------------------------------------------------
//Random Utility function



    var intFrameWidth = window.innerWidth;
    var intFrameHeight = window.innerHeight;


    setInterval(function(reload){

      $('audio').get(0).play(); //play audio file


        $('instaData').html(" "); ///clear the body
        $('.container').html(" "); ///clear the body


    function generateRandomWidth() {
      var num = Math.floor(Math.random() * intFrameWidth-150);
      return num;
    }
    function generateRandomHeight() {
      var num = Math.floor(Math.random() * intFrameHeight-150);
      return num;
    }


    function placeRandomly(selector){
      // var tweetDiv = $('.twitText');
      $(selector).each(function(){
        var left = generateRandomWidth();
        var top = generateRandomHeight();
        var depth = Math.round(Math.random() * 9999);
        // console.log(depth);
        // // data.statuses[thetweet];
        $(this).css({
          "position":"absolute",
          "top": top + "px",
          "left": left + "px",
          "z-index": depth
            });
          $('.workTitle').css({
            "position":"absolute",
            "top": Math.round(Math.random() * top) + "px",
            "left": Math.round(Math.random() * left) + "px",
            "z-index": depth
        });
      })
    }

//------------------------------------------------------
//Twitter

  $.get('/twitter',function(data){
    console.log('twitterData');
    console.log(data)

      data.statuses.forEach(function(tweet){ $('.container').append("<div class=twitText> '"+tweet.text+"' </div> ")

      placeRandomly('.twitText')
    })
  })

//------------------------------------------------------
//Insta

  $.get('/instaServerReq', function(instaData){
    console.log('instaData');
    console.log(instaData);

    instaData.data.forEach(function(eachImageData){
      // console.log(eachImageData.type);

      if(eachImageData.type == "video"){
        $('.container').append('<video src="'+eachImageData.videos.low_bandwidth.url+'" autoplay>')
      }else{
        $('.container').append('<img class="insta" src="'+eachImageData.images.standard_resolution.url+'">'
      )}

      placeRandomly('.insta')
      })
    })


}, 30000)




  })
