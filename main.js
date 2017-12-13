$(document).ready(function() {

            var scroll = 0;
            $(document).scroll(function() {
                scroll = $(this).scrollTop();

                if (scroll > 130) {
                    $(".background-color").css({
                        "background-color": "rgba(0,0,0,0.8)",
                        "height":"60px"
                    });
                } else {
                    $(".background-color").css({
                        "background-color": "transparent",
                        "height":"108px"
                    });
                }
            });
 });