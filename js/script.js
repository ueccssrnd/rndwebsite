$(document).ready(function(){	
	$.stellar();
	$('#works-slideshow-pictures a').nivoLightbox({
    
		effect: 'fadeScale'
	
	});
	
	$('.navbar-inner li a').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 800);
    return false;
});

    $('.up-down').mouseover(function(){
        $(this).find('.default').stop().animate({
            height: 0    
        }, 200);                        
    }).mouseout(function(){
        $(this).find('.default').stop().animate({
            height: '100%' 
        }, 200)    
    });
		
		$(".icon").each(function(i,e) {
		
				
				setTimeout(function(){
					$(e).css({'visibility':'visible'});
				},(i+1)*400);
				
				
			});
			
	
			

	$('.members').mouseover(function(){
       
		$(this).find('.member-default').stop().animate({
            height: 0    
        }, 200);       
        
    }).mouseout(function(){
	
        $(this).find('.member-onhover').stop().animate({
            height: '100px' 
        }, 200)    
    });
	
	

});