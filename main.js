var typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
});

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


//  BEER JOKE / FACT GENERATOR
 $(document).ready(function() {

   $.getJSON("facts.json", function(json){

      $("#fact").html(JSON.stringify(json.facts[0])) //Start with the same fact this way
    });

  $("#getFact").on("click", function() {
    $.getJSON("facts.json", function(json){

      var j = Math.floor(Math.random() * 10) - 1; // * 10 is number of jokes in the array, -1 is for the first item array (0)

      $("#fact").html(JSON.stringify(json.facts[j])) //number in array needs to be randomized
    });
  });
});
