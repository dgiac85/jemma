/**
 *The script manages the appearence of toggle menu and the relative content menu in the mobile visualization version.
  Moreover, if the resolution width of screen is greater than 1224px and the height is > than 900px, the toggle menu disappears and return the normal Content Menu  
 */
var width=1240;
var height=900;
var widthSmartPort=640;
var heightSmartThreshold=1024;

function goMobile(){
	
	$('#datausersmartphoneToggle').css('display','none');
	//$('#datausercontent').css('display','none');
	$('#toggleUser').css('display','none');
	
	height=$("#Header").height();
	$('#mobileMenu').css('top',height);
	$('#ContentMain').css('top',height);
	
	
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
	
	$("#dataANDuser").css("top","-100%");
	$('#toggleUser').css('display','block');
	$('#dataANDuser').css('display','none');
	$('#datausersmartphoneToggle').css('display','block');
	//$('#datausercontent').css('display','block');
	
	element=$('#dataANDuser').detach();
	$('#logo').append(element);
	
	heightHeader=$("#Header").height();
	$('#mobileMenu').css('top',heightHeader);
	$('#ContentMain').css('top',heightHeader);

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
	$('#logo').append(element);	
	$('#datausersmartphoneToggle').css('display','none');
}

$(document).ready(function() {	
	
	heightMenu=$("#ContainerMenu").height();	
	$("#ContentMain").css("height",heightMenu);
	var whatbro=client.engine;
	console.log(whatbro);		

	//initial ctrl about the situation of screen resolution at the moment in which document is ready
	//$('#ContentMenu').css('display','none');
	$("#mobileMenu").css("display","block");


	//$(".MainMenuEl").css("width", dim + "px");

	$("#mobileMenu").css("left","-200%");
	if($(window).width()<=width){
		if ($(window).width()>widthSmartPort){
			$("#ContentMain").css("height","calc(100% - 70px)");
			$("#ContentMain").css("height","-moz-calc(100% - 70px)");
			$("#ContentMain").css("height","-webkit-calc(100% - 70px)");
		}		
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
		
		if($(window).width()>widthSmartPort){
		    $(document).click(function(event) {		    	
		    	if ((event.target.id!=="toggleMenu")&&(event.target.id!=="mobileMenu")&&(event.target.className!=="toggleMobile")&&(event.target.className!=="toggleMobile active")){
			    	if ($("#mobileMenu").css("left")==="0px"){    		
				       	$("#toggleMenu").toggleClass("active");
				    	$("#mobileMenu").animate({"left":"-200%"}, 600);
			    	}
		    	}
		    });
		}
	    	
	  
	    	
	    $("#toggleMenu").click(function(){
	    			
	    			//$(this).effect("highlight", {}, 500);
	    	    	$(this).toggleClass("active");
	    	    	var hasClass = this.classList.contains('active');
	    	    	if (!hasClass){
	    	    		$("#mobileMenu").animate({"left":"-200%"}, 600);
	    	    	}
	    	    	else{	    	
	    	    		$("#mobileMenu").animate({"left":"0px"}, 600);
	    	    	} 
	    	      	  	
	
	    });
	    
	    $("#toggleUser").click(function(){
	    	
	    	height=$("#Header").height();
	    	if ($("#dataANDuser").css("top")==="0px"){		    		
	    		$("#dataANDuser").animate({"top":height*(-1)}, 500);
	    		$("#ContainerLogo").animate({"top":"0px"}, 500);
	    		$("#dataANDuser").css("display","none");
	    		$("#ContainerLogo").css("display","block");
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	    	}
	    	else{
	    		
	    		$("#dataANDuser").animate({"top":"0px"}, 500);
	    		$("#ContainerLogo").animate({"top":height*(-1)}, 500);
	    		$("#dataANDuser").css("display","block");	    		
	    		$("#ContainerLogo").css("display","none");
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_verde.png");	
//	    		$("#Timestamp").effect("highlight", {}, 500);
//				$("#userID").effect("highlight", {}, 500);
	    	}
	    	
	    });
	    
	});
	
	//funzione per il controllo dell'on resize
	$(window).on("resize", function()
	{
		//controllo per alzare il form di inserimento credenziali DA RIVEDERE
		if($(this).height()<=393){
			$('form').animate({"top":"10px"}, 600);
			
		}
		
		//da valutare
		if($(window).width()>widthSmartPort){
			element=$('#dataANDuser').detach();
			element1=$('#HeaderSep').detach();
			$('#Header').append(element);
			$('#Header').append(element1);
			$('#datausersmartphoneToggle').css('display','none');
			$('#dataANDuser').css('display','block');	
			
			$("#ContentMain").css("height","calc(100% - 70px)");
			$("#ContentMain").css("height","-moz-calc(100% - 70px)");
			$("#ContentMain").css("height","-webkit-calc(100% - 70px)");

		}
		
		var misura=$(this).width();
		if($(this).width() <= width)
		{	
			if ($("#mobileMenu").css("left")==="0px"){
				$("#toggleMenu").toggleClass("active");
				$("#mobileMenu").animate({"left":"-200%"}, 600);
			}
			
			$("#mobileMenu").css("display","block");			
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

