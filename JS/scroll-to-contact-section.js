
$(document).ready(function(){
  
  $("#menu-contact-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#contact-section").offset().top}, 1000);

  });

  $("#mobile-menu-contact-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#contact-section").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);

  });
});