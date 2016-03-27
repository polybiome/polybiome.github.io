$(".navbar-nav a").mouseover(function(){
	$('.navbar-nav>.active>a').css({
		'box-shadow' : 'none'
	});
});
$(".navbar-nav a").mouseout(function(){
	$('.navbar-nav>.active>a').css({
		'box-shadow' : 'inset 0 3px 9px rgba(0,0,0,0.2)'
	});
});
$(window).scroll(function(){
	var topScroll = $(this).scrollTop();
	if (topScroll >=  $(window).height() - 0.5*$('#ribbon').height()){
		$('#ribbon').css({
			'transform' : 'translate(0px, '+ 0 +'px)'
		});
	};

	if(topScroll > $('.food').offset().top - ($(window).height() / 1.2)) {
		$('.food').each(function(i){
		  setTimeout(function(){
		    $('.food').eq(i).addClass('is-showing');
		  }, (700 * (Math.exp(i * 0.14))) - 700);
		});
	}

	if (topScroll >=  $(window).height() + 7*$('#mol1').height()){
		$('#mol1').css({
			'transform' : 'translate(0px, 0px)'
		});
		$('#mol2').css({
			'transform' : 'translate(0px, 0px)'
		});
	};
	if (topScroll >=  $(window).height() + 24*$('#logoIgem').height()){
		$('#logoIgem').css({
			'transform' : 'translate(0px, 0px)'
		});
		$('#logoDracBlue').css({
			'transform' : 'translate(0px, 0px)'
		});
	};
})