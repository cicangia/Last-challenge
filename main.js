$(document).ready(function () {

    var scroll = 0;
    $(document).scroll(function () {
        scroll = $(this).scrollTop();

        if (scroll > 130) {
            $(".background-color").css({
                "background-color": "rgba(0,0,0,0.8)",
                "height": "60px"
            });
        } else {
            $(".background-color").css({
                "background-color": "transparent",
                "height": "108px"
            });
        }
    });

    $('body').scrollspy({
        target: '#mynav'
    });

//    $(document).on('click', 'a[href^="#"]', function (event) {
//        event.preventDefault();
//
//        $('html, body').animate({
//            scrollTop: $($.attr(this, 'href')).offset().top
//        }, 1000);
//    });
});