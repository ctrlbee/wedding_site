	//
	//
	//countdown timer
	//
	//
	var i = window.setInterval(function(){
		var currentDate = new Date(); 
		var days = 24*60*60*1000; 
		var weddingDate = new Date("2014/06/21"); 
		var daysDiff = Math.abs(currentDate - weddingDate)/days; 
		var hoursDiff = 24 - Math.abs((daysDiff - Math.floor(daysDiff))*24); 
		var minsDiff =  60 - Math.abs((hoursDiff - Math.floor(hoursDiff))*60);  
		var secsDiff = Math.abs((minsDiff - Math.floor(minsDiff))*60);  
		//console.log(daysDiff);

		$('#clock').html(Math.floor(daysDiff)+" Days "+Math.floor(hoursDiff)+" Hours " +Math.floor(minsDiff) + " Minutes "+ Math.floor(secsDiff)+" Seconds");
	}, 1000); 


$(document).ready(function() {
	//
	//
	//nav 
	//
	//

	$('.scroller').click(function(e){
		e.preventDefault(); 
		var href = $(this).attr("href"); 
		$('html, body').animate({scrollTop:$(href).position().top-40}, 'slow'); 
		//$('li').removeAttr("class"); 
		//$(this).parent().attr("class","active"); 	
	}); 

  	
    //
	//
	//img rollover
	//
	//

	$('.regImg1').mouseenter(function() {
		$(this).attr("src","assets/tj_color.png"); 	
	}); 
	$('.regImg1').mouseleave(function() {
		$(this).attr("src","assets/tj_bw.png"); 	
	});

	$('.regImg3').mouseenter(function() {
		$(this).attr("src","assets/amazon_color.jpg"); 	
	}); 
	$('.regImg3').mouseleave(function() {
		$(this).attr("src","assets/amazon_bw.jpg"); 	
	});


	//
	//
	//ajax request stuff 
	//
	//
	$('#songrequest').submit(function(e){
		e.preventDefault(); 
		var values = $(this).serialize(); 

		$.ajax({
			url: "/songrequests", 
			method: "POST", 
			data: values, 
			success: function() {
				alert('saved!!'); 
				$('input[type=text]').val(''); 
			},
			error: function(){
				alert('fail!'); 
			}
		}); 
	});


	$.ajax({
		url:"songrequests.json", 
		method:"GET", 
		dataType: "JSON", 
		success: function(data){
			//alert("got it!"); 
			for(i=0;i<data.length;i++){
				$('#ajaxlist').append("<p>"+data[i].title+"</p>"); 
			}

		},	
		error: function(){
			alert("failed to get it");
		}

	});


	$.getJSON("songrequests.json",function(songs){
		$.each(songs, function(s, song){
			$('#ajaxlist2').append("<p>"+song.title+"</p>"); 
		})
	});
	

	//
	//
	//hover stuff 
	//
	//
	var popupHalfHeight; 
	var popupTop; 
	var popID; 

	$("[id^=pop]").mouseover(function(){

		if ($(this).attr("id").split("")[5] != null){
			popID = eval($(this).attr("id").split("")[4] + $(this).attr("id").split("")[5]);  
		}
		else {
			popID = $(this).attr("id").split("")[4]; 
		}
		
		var leftright = $(this).attr("id").split("")[3];  		
		var popupText = eval("popupText"+popID); 

		$(this).append('<div class="popupBox">'+ popupText +'</div>');
		var position = $(this).position();  
		var width = $(this).width(); 
		var height = $(this).height(); 
		var halfHeight = $(this).height()*.5;
		popupHalfHeight = $('.popupBox').height()*.5;
		popupWidth = $('.popupBox').width(); 
		popupTop = (position.top+halfHeight) - popupHalfHeight; 

		if (leftright =="R"){
			$('.popupBox').css('top', popupTop).css('left', position.left+width+20);
		}

		else if (leftright =="L"){
			$('.popupBox').css('top', popupTop).css('left', position.left-popupWidth-110);
		}

	    console.log("top:"+position.top, "left:"+position.left);
	    console.log(popupWidth); 

	}); 

	$("[id^=pop]").mouseout(function(){
		$('.popupBox').remove(); 
	}); 

}); 


	//
	//
	//page scroll stuff 
	//
	//

$(window).scroll(function() {
	//alert($(window).scrollTop()); 

	var scrollPos = $(window).scrollTop()+41; 
	var sec0Pos = $('#sec0').offset().top; 
	var sec1Pos = $('#sec1').offset().top; 
	var sec2Pos = $('#sec2').offset().top; 
	var sec3Pos = $('#sec3').offset().top; 
	var sec4Pos = $('#sec4').offset().top; 
	var sec5Pos = $('#sec5').offset().top; 
	var sec6Pos = $('#sec6').offset().top; 
	var sec7Pos = $('#sec7').offset().top; 
	var secFPos = $('#footer').offset().top; 

	//alert(scrollPos +'||'+ sec1Pos); 
	if(scrollPos >= sec0Pos && scrollPos < sec1Pos)
	{
		$('li').removeAttr("class"); 	
	}
	if(scrollPos >= sec1Pos && scrollPos < sec2Pos)
	{
		navUpdater('.sec1a');
	}
	if(scrollPos >= sec2Pos && scrollPos < sec3Pos)
	{	
		navUpdater('.sec2a');
	}
	if(scrollPos >= sec3Pos && scrollPos < sec4Pos)
	{
		navUpdater('.sec3a');
	}
	if(scrollPos >= sec4Pos && scrollPos < sec5Pos)
	{
		navUpdater('.sec4a');
	}
	if(scrollPos >= sec5Pos && scrollPos < sec6Pos)
	{
		navUpdater('.sec5a');
	}
	if(scrollPos >= sec6Pos && scrollPos < sec7Pos)
	{
		navUpdater('.sec6a');
	}
	if(scrollPos >= sec7Pos && scrollPos < secFPos)
	{
		navUpdater('.sec7a');
	}

	function navUpdater(classID) 
	{
		$('li').removeAttr("class"); 	
		$(classID).parent().attr("class", "active"); 
	}
}); 




