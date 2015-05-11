$(window).scroll( function(){ 
    var topWindow = $(window).scrollTop();
    if(topWindow < 50) {
        $(".nav").show();
    } else {
        $(".nav").hide();
    } 
})

jQuery(function($){
    	     $( '.hamburger-cross' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand')
    	     $(this).toggleClass("open");})
        })