
$(document).ready(function(){
  $("#menu-services-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#services-section").offset().top}, 1000);

  });

  $("#mobile-menu-services-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#services-section").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);
  });
});