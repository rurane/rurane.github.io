$(function(){
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		if(winTop >= 10){
			$(".custom-header").addClass("sticky-header");
		}else{
			$(".custom-header").removeClass("sticky-header");
		}//if-else
	});//win func.
});//ready func.