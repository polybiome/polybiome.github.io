var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
preload(
	'img/rue.jpg',
	'img/nil.jpg',
	'img/atun.jpg',
	'img/ari.jpg',
	'img/david.jpg',
	'img/maria.jpg',
 	'img/wil.jpg',
	'img/nuria.jpg',
	'img/laura.jpg',
	'img/carmen.jpg'
)
// $(".navbar-nav a").mouseover(function(){
// 	$('.navbar-nav>.active>a').css({
// 		'box-shadow' : 'none'
// 	});
// });
// $(".navbar-nav a").mouseout(function(){
// 	$('.navbar-nav>.active>a').css({
// 		'box-shadow' : 'inset 0 3px 9px rgba(0,0,0,0.2)'
// 	});
// });
$(window).scroll(function(){
	var topScroll = $(this).scrollTop();
	if (topScroll >= $('.main').height()){
		$(".navbar-default .navbar-collapse").addClass('navbarEffect');
	} else{
		$(".navbar-default .navbar-collapse").removeClass('navbarEffect');
	};
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

$(function() {
    $('.nav .dropdown-menu a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});
})

smoothScroll.init({
	speed: 1000,
	easing: 'easeInOutQuad',
	updateURL: false,
	offset: 100,
});