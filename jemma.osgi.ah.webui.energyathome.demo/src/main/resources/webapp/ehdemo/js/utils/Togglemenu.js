/**
 *The script manages the appearence of toggle menu and the relative content menu in the mobile visualization version.
  Moreover, if the resolution width of screen is greater than 1275px and the height is > than 900px, the toggle menu disappears and return the normal Content Menu  
 */
width=1275;
height=900;

function vaiMobile(){
	$('.toggleMobile').css('display','block');
	element=$('#ContentMenu').detach();
	$('#mobileMenu').append(element);
	$('#ContentMenu').css('display','block');	
}

function togliMobile(){
	$(".toggleMobile").removeClass("active");
	$('.toggleMobile').css('display','none');
	element=$('#ContentMenu').detach();
	$("#mobileMenu").hide();				
	$('#ContainerContentMenu').append(element);
	$('#ContentMenu').css('display','block');
}

$(document).ready(function() {
	
	//initial ctrl about the situation of screen resolution at the moment in which document is ready
	$('#ContentMenu').css('display','none');

	if($(window).width()<width){
		vaiMobile();
	}
	else{
		if  ($(window).height()<height){
			vaiMobile();
		}
		else{;
			togliMobile();
		}
	}
	
	//successive ctrl of the screen resolution that can change in real-time
	$(function ()
	{
	    $("#mobileMenu").hide();
	    $(".toggleMobile").click(function()
	    {
	    	$(this).toggleClass("active");
	        $("#mobileMenu").slideToggle(500);
	    });
	});
	$(window).on("resize", function()
	{
		if($(this).width() < width)
		{
			vaiMobile();			
		}
		else{
			if ($(this).height() > height){
				togliMobile();
			}
			else{
				vaiMobile();
			}		
		}
	});		
	
});

