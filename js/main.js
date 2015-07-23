/**
 * Created by Kristijan on 16.2.2015..
 */
var main = function(){
    /*$("#headline").show("drop",{direction: "up"}, 600);

    $('#iconDown').fadeIn('slow');*/

    setInterval(function(){
        $(".banner-background").fadeOut();
    }, 450);

  $.scrollIt();

  $('.btn.btn-default').click(function(){
    $('.btn.btn-default').removeClass('active');
    $(this).addClass('active');
  });

  /*$('.navbar li').click(function(){
    $('.btn.btn-default').removeClass('active');
    $('#btn1').addClass('active');    
  });*/
};

$(document).ready(main);