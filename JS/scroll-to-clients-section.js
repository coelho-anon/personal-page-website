
$(document).ready(function(){

  $("#menu-clients-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#testimonials-section").offset().top}, 1000);

  });

  $("#mobile-menu-clients-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#testimonials-section").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);
  });
});