
$(document).ready(function(){
  $("#menu-portfolio-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#portifolio-section").offset().top}, 1000);

  });

  $("#mobile-menu-portfolio-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#portifolio-section").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);
  });
});