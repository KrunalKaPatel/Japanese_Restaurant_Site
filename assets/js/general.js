$(document).ready(function(){

	$( ".fa-times" ).hide();
    $( ".nav-menu" ).hide();
    jQuery('.fa-bars').click(function(){
        jQuery('.nav-menu').slideToggle(function() {
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
          });
    });

    jQuery(".fa-times" ).click(function() {
        jQuery( ".nav-menu" ).slideToggle(function() {
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });
    });

    $(".fa-bars").click(function(){
        $("body").addClass("stop-scroll");
    });
    $(".fa-times").click(function(){
    	$("body").removeClass("stop-scroll");
	});



	new WOW().init();
	
	/* Java Script for Three-dots Section*/
	let x = document.querySelectorAll(".dots-direction figure");
	let count = 1;
	for(let i = 0; i < x.length; i++)
	{
		x[i].style.width = (27 * count) + "px";
		count += 1;
	}

	/**/
	/*$('.card-slider').slick({
  		infinite: true,
 	 	slidesToShow: 3,
  		slidesToScroll: 3
	});*/
	
	/* Slider for Our-New-Menu-2 Section*/
	$('.card-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
/*
			{
				breakpoint: 620,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			},*/
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});