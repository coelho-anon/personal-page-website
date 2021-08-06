
$(document).ready(function(){

  $("#menu-about-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#about-section").offset().top}, 1000);

  });

  $("#mobile-menu-about-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#about-section").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);

  });
});