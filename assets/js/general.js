$(document).ready(function(){

	/**/
	let x = document.querySelectorAll(".dots-direction figure");
	let count = 1;
	for(let i = 0; i < x.length; i++)
	{
		x[i].style.width = (27 * count) + "px";
		count += 1;
	}
});