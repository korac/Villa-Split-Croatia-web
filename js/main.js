/**
 * Created by Kristijan on 16.2.2015..
 */
var main = function(){
    $("#startingCont h1").show("drop",{direction: "up"}, 1200);

    setInterval(function(){
        $("#introButton").fadeIn();
    }, 700);

    $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

};

$(document).ready(main);