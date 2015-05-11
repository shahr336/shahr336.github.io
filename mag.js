var duration = 22; 
var fadeAmount = 0.3; 

$(document).ready(function (){
      var images = $("#slideshow img");
      var numImages = images.size();
      var durationMs = duration * 1000;
      var imageTime = durationMs / numImages; 
      var fadeTime = imageTime * fadeAmount; 
      var visibleTime = imageTime  - (imageTime * fadeAmount * 2);
      var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2); 
    
      images.each( function( index, element ){
        if(index != 0){
          $(element).css("opacity","0");
          setTimeout(function(){
            doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
          },
            visibleTime*index + fadeTime*(index-1));
          } 
          else{
            setTimeout(function(){
                $(element).animate({opacity:0},fadeTime, function(){
              setTimeout (function(){
                doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
              },animDelay )
            });
          }
        ,visibleTime);
        }
      });
    
    $("#content-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 2000);
});
    
    });

function doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime){
  fadeInOut(element,fadeInTime, visibleTime, fadeOutTime ,function(){
    setTimeout(function(){
      doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime);
    },pauseTime);
  });
}

function fadeInOut (element, fadeIn, visible, fadeOut, onComplete){
  return $(element).animate( {opacity:1}, fadeIn ).delay( visible ).animate(                {opacity:0}, fadeOut, onComplete);
};

jQuery(function($){
    	     $( '.hamburger-cross' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand')
    	     $(this).toggleClass("open");})
        })

$(window).scroll( function(){

  var topWindow = $(window).scrollTop();
 
  var topWindow = topWindow * 1.5;
  
  var windowHeight = $(window).height();
      
  var position = topWindow / windowHeight;
  
  position = 1 - position;

  $('.arrow-wrap').css('opacity', position);
    

});

$(window).scroll( function(){ 
    var topWindow = $(window).scrollTop();
    if(topWindow < 850) {
        $(".nav").show();
    } else {
        $(".nav").hide();
    }
 
})


