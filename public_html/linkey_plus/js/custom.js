$(".mobile-menu-icon-hp").click(function() {
	$(".menu-toggle-btn").toggleClass("open");
	$(this).toggleClass("open");
	if($(".menu-toggle-btn").hasClass("open") == true){
		$(".menu-text-hp").text("CLOSE");	
	}
	else
	{
		$(".menu-text-hp").text("MENU");	
	}
	$(".navigation").slideToggle();
	$(".overlay-mobile-menu-hp").fadeToggle();
});

$('#gototop'). click(function() {
	$('html, body'). animate({
		scrollTop: 0
	}, 1000);
});

$('#mybtn_chara'). click(function() {
	$('html, body'). animate({
		scrollTop: $("#my_chara").offset().top
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});

$('#mybtn_overview'). click(function() {
	$('html, body'). animate({
		scrollTop: $("#my_overview").offset().top
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});

$('#mybtn_app'). click(function() {
	$('html, body'). animate({
		scrollTop: $("#my_app").offset().top
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});
$('#mybtn_install'). click(function() {
	$('html, body'). animate({
		scrollTop: $("#my_install").offset().top
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});
$('#mybtn_scenes'). click(function() {
	$('html, body'). animate({
		scrollTop: $("#my_scenes").offset().top
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});
$('#mybtn_features'). click(function() {
	$('html, body'). animate({
		scrollTop: $("#my_features").offset().top
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});
$('.mybtn_top'). click(function() {
	$('html, body'). animate({
		scrollTop: 0
	}, 1000);
	
	$(".navbar-collapse").collapse("hide");
});


function scrollFunc() {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("gototop").style.display = "flex";
    }else {
        document.getElementById("gototop").style.display = "none";
    }
}
window.onscroll = function() {scrollFunc()};


$(".open1").click(function() {
	if($(this).hasClass("active") == false)
	{
		$(".nova-middle-right-in-cp a").removeClass("active");
		$(this).addClass("active");
		$(".modal-info-cp").css("display","none");
		$("#open1_1").fadeIn();
	}
	else
	{
		//$(this).removeClass("active");
		//$("#open1_1").fadeOut();
	}
});

$(".open2").click(function() {
	if($(this).hasClass("active") == false)
	{
		$(".nova-middle-right-in-cp a").removeClass("active");
		$(this).addClass("active");
		$(".modal-info-cp").css("display","none");
		$("#open1_2").fadeIn();
	}
	else
	{
		//$(this).removeClass("active");
		//$("#open1_2").fadeOut();
	}
});

$(".open3").click(function() {
	if($(this).hasClass("active") == false)
	{
		$(".nova-middle-right-in-cp a").removeClass("active");
		$(this).addClass("active");
		$(".modal-info-cp").css("display","none");
		$("#open1_3").fadeIn();
	}
	else
	{
		//$(this).removeClass("active");
		//$("#open1_3").fadeOut();
	}
});

$(".open4").click(function() {
	if($(this).hasClass("active") == false)
	{
		$(".nova-middle-right-in-cp a").removeClass("active");
		$(this).addClass("active");
		$(".modal-info-cp").css("display","none");
		$("#open1_4").fadeIn();
	}
	else
	{
		//$(this).removeClass("active");
		//$("#open1_4").fadeOut();
	}
});

$(".open5").click(function() {
	if($(this).hasClass("active") == false)
	{
		$(".nova-middle-right-in-cp a").removeClass("active");
		$(this).addClass("active");
		$(".modal-info-cp").css("display","none");
		$("#open1_5").fadeIn();
	}
	else
	{
		//$(this).removeClass("active");
		//$("#open1_5").fadeOut();
	}
});

$(".open6").click(function() {
	if($(this).hasClass("active") == false)
	{
		$(".nova-middle-right-in-cp a").removeClass("active");
		$(this).addClass("active");
		$(".modal-info-cp").css("display","none");
		$("#open1_6").fadeIn();
	}
	else
	{
		//$(this).removeClass("active");
		//$("#open1_6").fadeOut();
	}
});

$('body').css('padding-top', $('.navbar').outerHeight() + 'px');

if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
