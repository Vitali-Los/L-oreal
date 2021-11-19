$(document).ready(function() {
	$('.filter__title').click(function(event) {
		if($('.content__filter').hasClass('one')){
			$('.filter__title').not($(this)).removeClass('active');
			$('.subtitle__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});