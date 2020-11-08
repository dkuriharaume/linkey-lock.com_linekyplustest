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

$('#mngbtn'). click(function() {
	$('html, body'). animate({
		scrollTop: document.getElementById("mng_test").getBoundingClientRect().top
	}, 1000);
});

// $(document).on('click','#gototop',function(){
//     // document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// });

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