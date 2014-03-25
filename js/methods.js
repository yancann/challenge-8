// initialize jQuery command after all page elements load
	    			
$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide(1000);
	});
		
	//show
	$("#b2").click(function(){
		$("#p1").show(500);
	});	
			
	//toggle
	$("#b3").click(function(){
		$("#p1").toggle();
	});
		
	//css
	$("#b4").click(function(){
		$("#p2").css("color","red");
	});
	
		
	//css (multiple property changes)
	$("#b5").click(function(){
		$("#p2").css({"background":"blue","padding":"10px","font-family":"serif","font-size":"36px",});
	});


	//html
	$("#b6").click(function(){
		$("#p3").html('<img src="http://24.media.tumblr.com/317e62aed2c8ce41d053185bc8e27894/tumblr_n2tj4qc6MK1s9tzxdo3_250.gif">');
	});
		
	//prepend
	$("#b7").click(function(){
		$("#p3").prepend('<img src="http://25.media.tumblr.com/341b24e13ddb847fdc53543561b274c3/tumblr_n2tj4qc6MK1s9tzxdo2_250.gif">');
	});	
		 
	//append
	$("#b8").click(function(){
		$("#p3").append('<img src="http://25.media.tumblr.com/3c696567277912dd0c84d4a99bf4af39/tumblr_n2tj4qc6MK1s9tzxdo1_250.gif">');
	});
	
		 
	//before
	$("#b9").click(function(){
		$("#p4").before("<h1>A.M.</h1>");
	});
		 
	//after
	$("#b10").click(function(){
		$("#p4").after("<h1>P.M.</h1>");
	});	
		 
	//wrap
	$("#b11").click(function(){
		$("#p5").wrap("<div class='goofy'>!</div>");
	});
	
		 
	//addClass
	$("#b12").click(function(){
		$("#p5").addClass("doofy");
	});	
		 
	//clone
	$("#b13").click(function(){
		$("li").clone().appendTo("li");
	});
		 
	//fadeOut
	$("#b14").click(function(){
		$("#p6").fadeOut(200);
	});
		 
	//fadeIn
	$("#b15").click(function(){
		$("#p6").fadeIn(200);
	});	
		  
	//fadeToggle
	$("#b16").click(function(){
		$("#p6").fadeToggle(200);
	});	
		  
	//slideUp
	$("#b17").click(function(){
		$(".box-content").slideUp(200);
	});		
		 
	//slideDown
	$("#b18").click(function(){
		$(".box-content").slideDown(200);
	});		

	 //slideToggle
	$(".box-header").click(function(){
		$(".box-content").slideToggle(200);
	});			 
		  
	//animate
	$("#b19").click(function(){
		$(".box-animate").animate({width: "90%"},1000);
	});		
		 
});