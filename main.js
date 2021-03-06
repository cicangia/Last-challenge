
$(document).ready(function () {


    $('div.hidden').fadeIn(2500).removeClass('hidden');

    var scroll = 0;
    $(document).scroll(function () {
        scroll = $(this).scrollTop();

        if (scroll > 130) {
            $(".background-color").css({
                "background-color": "rgba(0,0,0,0.8)",
                "padding": "0px"
            });

        } else {
            $(".background-color").css({
                "background-color": "transparent",
                "padding": "40px"
            });
        }
    });


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $('#picturewiebe').hover(function(){
    $(this).attr('src', "img/wiebebeer.jpg");
    }, function(){
    $(this).attr('src', "img/profile.jpg");
    });

    $('#picturejulian').hover(function(){
    $(this).attr('src', "img/julianbeer.jpg");
    }, function(){
    $(this).attr('src', "img/julianformal.jpg");
    });

    $('#picturebob').hover(function(){
    $(this).attr('src', "img/bobbeer.jpg");
    }, function(){
    $(this).attr('src', "img/bobformal.jpg");
    });

    $('#pictureciro').hover(function(){
    $(this).attr('src', "img/ciroinformal.jpg");
    }, function(){
    $(this).attr('src', "img/ciroformal.jpg");
    });


});
// random beer generater
$(document).ready(function () {
        $.ajax({url: "https://api.punkapi.com/v2/beers/random",
          success: function (result) {
            result.forEach(function(part) {
              var name = part.name;
              document.getElementById("beer_name").innerHTML = name;
              var abv = part.abv;
              document.getElementById("beer_abv").innerHTML = abv;
              var ibu = part.ibu;
              document.getElementById("beer_ibu").innerHTML = ibu;
              var ebu = part.ebc;
              var color_id =0;
              if(ebu <= 4){
                color_id = '#F8F753';
              } else if (ebu <= 6) {
                color_id = '#F6F513';
              } else if (ebu <= 8) {
                color_id = '#ECE61A';
              } else if (ebu <= 12) {
                color_id = '#D5BC26';
              } else if (ebu <= 16) {
                color_id = '#BF923B';
              } else if (ebu <= 20) {
                color_id = '#BF813A';
              } else if (ebu <= 26) {
                color_id = '#BC6733';
              } else if (ebu <= 33) {
                color_id = '#8D4C32';
              } else if (ebu <= 39) {
                color_id = '#5D341A';
              } else if (ebu <= 47) {
                color_id = '#261716';
              } else {
                color_id = '#080707';
              } ;
              document.getElementById("beer_color").style.backgroundColor = color_id;
              document.getElementById("beer_color").innerHTML = ebu;
              var description = part.description;
              document.getElementById("beer_description").innerHTML = description;

              var url = part.image_url;
              var image = $(document.createElement('img'));
              image.attr('src', url)
              image.appendTo('#photo')

              var food = part.food_pairing;
              document.getElementById("beer_food").innerHTML = food;
            })
        }});
});
// reload beer
$(document).ready(function(){
    $("#new_beer").on( "click", function() {
        location.reload(true);
    });
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
