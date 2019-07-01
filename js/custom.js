$(function() {

//================== Down Arrow Start==================

$('.down-btn').on("click", function () {
    var h = $('#box-one').outerHeight();
    $('body,html').animate({
        scrollTop: h
    }, 700);
});

//================== Down Arrow End==================

$(window).ready(function(){
	$('.html').animate({width:'60%'},2000);
	$('.css').animate({width:'40%'},2000);
});

});





