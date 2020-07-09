// Scroll top Animation
$('.scroll').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 90
    }, 900);
});

// Fixed Element
$(function(scrollFixed){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.element-fixed').addClass('scroll-fixed');
        } else {
            $('.element-fixed').removeClass('scroll-fixed');
        }
    });    
});


