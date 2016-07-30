var images = new Array()
var toggleSide = 0;
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

$('.widgetSec .closeThis').on('click', function(){ 
        //$('.widgetSec').css('display','none');
        if(toggleSide == 0){
	        $('.widgetSec').css({
				'transform' : 'translate(-100%, 0px)'
			});
			$('.closeThis').css({
				'transform' : 'translate(13px, 0px)',
				'background' : 'none',
				'background-color': '#0078AA'
			});
			$('.closeThis p').text('>');
			toggleSide = 1;
		}
		else{
			 $('.widgetSec').css({
				'transform' : 'translate(0px, 0px)'
			});
			$('.closeThis').css({
				'transform' : 'translate(0px, 0px)',
				'background': 'linear-gradient(to top left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%), linear-gradient(to top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%)',
				'background-color': '#0078AA'
			});
			$('.closeThis p').text('');
			toggleSide = 0;
		}
});

smoothScroll.init({
	speed: 1000,
	easing: 'easeInOutQuad',
	updateURL: false,
	offset: 100,
});