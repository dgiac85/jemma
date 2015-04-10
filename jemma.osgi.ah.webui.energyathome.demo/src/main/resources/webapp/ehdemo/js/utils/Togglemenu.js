/**
 *The script manages the appearence of toggle menu and the relative content menu in the mobile visualization version.
  Moreover, if the resolution width of screen is greater than 1224px and the height is > than 900px, the toggle menu disappears and return the normal Content Menu  
 */
var width=1240;
var height=900;
var widthSmartPort=540;

function goMobile(){
	
	$('#datausersmartphoneToggle').css('display','none');
	$('#datausercontent').css('display','none');
	$('#toggleUser').css('display','none');
	
	if($(window).width()<=widthSmartPort){
		goMobileSmart();
	}
	
	$('#toggleMenu').css('display','block');
	$('.Separators').css('display','block');

	element=$('#MainMenu').detach();
	$('#mobileMenu').append(element);

	
	element=$('#ContentMenu').detach();
	$('#mobileMenu').append(element);

	
	$('#ContentMenu').css('display','block');
	$('#ContainerMenu').css('display','none');
	
	element=$('#MobSep2').detach();
	$('#mobileMenu').append(element);
	
	


}

function goMobileSmart(){
	
	$("#ContentMain").css("height","1080px");
	$("#ContentMain").css("top","65px");	
	
	$("#datausercontent").css("top","-100%");
	$('#toggleUser').css('display','block');
	$('#datausersmartphoneToggle').css('display','block');
	$('#datausercontent').css('display','block');
	
	element=$('#dataANDuser').detach();
	$('#datausercontent').append(element);
}

function exitMobile(){
	$('#ContainerMenu').css('display','block');
	$('#ContentMenu').css('display','block');
	
	element2=$('#MainMenu').detach();
	$('#toggleMenu').css('display','none');
	$('.Separators').css('display','none');		
	element=$('#ContentMenu').detach();
	
	
	$('#ContainerContentMenu').append(element);	
	$('#ContainerMenu').append(element2);
	
			

}

function exitMobileSmart(){
	element=$('#dataANDuser').detach();
	$('#datausercontent').append(element);
	
	$('#datausersmartphoneToggle').css('display','none');
}

$(document).ready(function() {	
	
	heightMenu=$("#ContainerMenu").height();
	
	$("#ContentMain").css("height",heightMenu);
	//initial ctrl about the situation of screen resolution at the moment in which document is ready
	//$('#ContentMenu').css('display','none');
	$("#mobileMenu").css("display","block");


	//$(".MainMenuEl").css("width", dim + "px");

	$("#mobileMenu").css("left","-200%");
	if($(window).width()<=width){
		$("#ContentMain").css("height","calc(100% - 70px)");
		$("#ContentMain").css("height","-moz-calc(100% - 70px)");
		$("#ContentMain").css("height","-webkit-calc(100% - 70px)");
	
		
			goMobile();	
		
	}
	else{
//		if  ($(window).height()<height){
//			goMobile();
//		}
//		else{;
//			exitMobile();
//		}
		exitMobile();
	}
	


	
	//successive ctrl of the screen resolution that can change in real-time
	//funzione anonima per il controllo degli eventi sui bottoni e sul body
	
	$(function ()
	{	    
	    $('html').click(function() {
	    	//alert("punto toccato="+event.target.className);
	    	if ($("#mobileMenu").css("left")==="0px"){
	    		
		       	$("#toggleMenu").toggleClass("active");
		    	$("#mobileMenu").animate({"left":"-200%"}, 600);
	    	}
	    });
	    
	    
	  	$('#mobileMenu').click(function(){
	  		//if($(window).width()>widthSmartPort)
	  			event.stopPropagation(); //fermo la propagazione dell'evento relativo al click o a qualche altro evento
    	    
    	});
	  	
	  
	    	
	    $("#toggleMenu").click(function(){
	    			
	    			$(this).effect("highlight", {}, 500);
	    	    	$(this).toggleClass("active");
	    	    	var hasClass = this.classList.contains('active');
	    	    	if (!hasClass){
	    	    		$("#mobileMenu").animate({"left":"-200%"}, 600);
	    	    	}
	    	    	else{	    	
	    	    		$("#mobileMenu").animate({"left":"0px"}, 600);
	    	    	}
	    	    	
	    	    	event.stopPropagation();   
	    	    	
	
	    });
	    
	    $("#toggleUser").click(function(){
	    	$(this).effect("highlight", {}, 500);
	    	height=$("#Header").height();
	    	if ($("#datausercontent").css("top")==="0px"){		    		
	    		$("#datausercontent").animate({"top":height*(-1)}, 500);
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	    	}
	    	else{	    	
	    		$("#datausercontent").animate({"top":"0px"}, 200);	    		
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_verde.png");	
	    		$("#datausercontent").effect("highlight", {}, 500);
	    	}
	    	event.stopPropagation(); 
	    	
	    });
	    
	});
	
	//funzione per il controllo dell'on resize
	$(window).on("resize", function()
	{
		
		//da valutare
		if($(window).width()>widthSmartPort){
			element=$('#dataANDuser').detach();
			element1=$('#HeaderSep').detach();
			$('#Header').append(element);
			$('#Header').append(element1);
			$('#datausersmartphoneToggle').css('display','none');
		}
		
		var misura=$(this).width();
		if($(this).width() <= width)
		{	
			if ($("#mobileMenu").css("left")==="0px"){
				$("#toggleMenu").toggleClass("active");
				$("#mobileMenu").animate({"left":"-200%"}, 600);
			}
			
			$("#mobileMenu").css("display","block");		
			$("#ContentMain").css("height","calc(100% - 70px)");
			$("#ContentMain").css("height","-moz-calc(100% - 70px)");
			$("#ContentMain").css("height","-webkit-calc(100% - 70px)");
			
			
				goMobile();	
		
			
			
		}
		else{
			exitMobile();
			heightMenu=$("#ContainerMenu").css("height");
			$("#ContentMain").css("height",heightMenu);
			$('#MobSep1').css('display','none');
			$("#mobileMenu").css("display","none");
			
//			if ($(this).height() > height){
//				exitMobile();
//			}
//			else{
//				goMobile();
//			}		
		}		
		
			
			
		
		
	});		
	
});

