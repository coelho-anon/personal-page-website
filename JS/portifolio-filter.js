$(document).ready(function(){

	$("#btn-all-portifolio").click(function(){

		$(".portifolio-category-btn").css("color", "inherit");

    $("#btn-all-portifolio").css("color", "#007bff");

    $( ".portifolio-itens").hide();
    $(".portifolio-itens").show(500);

  });

  $("#btn-brand-portifolio").click(function(){

  	$(".portifolio-category-btn").css("color", "inherit");

    if (document.getElementById("btn-brand-portifolio").style.color == "rgb(0, 123, 255)") {
    	$("#btn-brand-portifolio").css("color", "inherit");
    }

    else {
    	$("#btn-brand-portifolio").css("color", "#007bff");
    }

    $( ".portifolio-itens").hide();
    $( ".portifolio-itens:nth-child(2)").show(500);
    $( ".portifolio-itens:nth-child(4)").show(500);
    $( ".portifolio-itens:nth-child(5)").show(500);
  });

  $("#btn-design-portifolio").click(function(){

  	$(".portifolio-category-btn").css("color", "inherit");

    if (document.getElementById("btn-design-portifolio").style.color == "rgb(0, 123, 255)") {
    	$("#btn-design-portifolio").css("color", "inherit");
    }

    else {
    	$("#btn-design-portifolio").css("color", "#007bff");
    }

    $( ".portifolio-itens").hide();
    $( ".portifolio-itens:nth-child(1)").show(500);
    $( ".portifolio-itens:nth-child(6)").show(500);
  });

  $("#btn-photos-portifolio").click(function(){

  	$(".portifolio-category-btn").css("color", "inherit");

    if (document.getElementById("btn-photos-portifolio").style.color == "rgb(0, 123, 255)") {
    	$("#btn-photos-portifolio").css("color", "inherit");
    }

    else {
    	$("#btn-photos-portifolio").css("color", "#007bff");
    }

    $( ".portifolio-itens").hide();
    $( ".portifolio-itens:nth-child(3)").show(500);
  });
});