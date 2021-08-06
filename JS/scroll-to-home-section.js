
$(document).ready(function(){
  $("#menu-home-btn").on('click', function(event) {

      $('html, body').animate({scrollTop: $("#header-nav-right").offset().top}, 1000);

  });

   $("#mobile-menu-home-btn").on('click', function(event) {

      $('html, body').animate({scrollTop: $("#header-nav-right").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);

  });
});