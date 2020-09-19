/*--not working so well?-*/
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 50) {
        $('#title').fadeIn('2000');
    } else {
        $('#title').fadeOut(1000);
    }

});


/*--return to top--*/
$(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {        // If page is scrolled more than 
        $('#return-to-top').fadeIn(500);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(500);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('html,body').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 3000);
});


/*------*/

var $document = $(document),
   $element = $('.nav'),
   className = 'box-shadow';

 $document.scroll(function() {
   if ($document.scrollTop() >= 20) {
     // Change 50 to the value you require
     // for the event to trigger
     $element.addClass(className);
   } else {
     $element.removeClass(className);
   }
 });


$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
        $(".nav").addClass("box-shadow");
    }
    else {
        $(".nav").removeClass("box-shadow");
    }
});
