
	$(document).ready(function(){
	  var HeightScreen = $(window).height();

	  $(window).scroll(function () {
	    if (HeightScreen/2<$(document).scrollTop()){
	      if ($(".toTop").css("display")=="none"){
	        $(".toTop").fadeIn("slow");
	      }
	    }else{
	      if ($(".toTop").css("display")=="block"){
	        $(".toTop").fadeOut("slow");
	      }
	    }
	  });
	});