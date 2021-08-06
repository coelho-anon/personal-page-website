
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#menu-blog-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#blog-section").offset().top}, 1000);

  });

  $("#mobile-menu-blog-btn").on('click', function(event) {

    $('html, body').animate({scrollTop: $("#blog-section").offset().top}, 1000);

    //close menu mobile when click in one menu button
    $("#mobile-list-menu").slideToggle(300);
    
  });
});