$(document).ready(function() {
	$('.menu__collapse').click(function () {
		$('.header .menu').css("display", "block");
	});

	$('.menu__close').click(function() {
		$('.header .menu').css("display", "none");
	});
});