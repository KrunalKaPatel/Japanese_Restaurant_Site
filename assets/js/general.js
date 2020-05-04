$(document).ready(function(){

	/**/
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

	$('.card-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 840,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 620,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});