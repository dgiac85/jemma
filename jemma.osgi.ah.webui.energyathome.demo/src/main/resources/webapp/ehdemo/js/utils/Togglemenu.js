
var width=1200;
var widthSmart=765;

function goMobile(){
	
	$('#datausersmartphoneToggle').css('display','none');

	$('#toggleUser').css('display','none');
	
	height=$("#Header").height();

	$('#mobileMenu').css('top',height);
	$('#ContentMain').css('top',height);
	
	
	if($(window).width()<=widthSmart){
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
//	if($(window).width()>widthSmart){
//		//exitMobileSmart();
//	}
	
	$('#ContainerMenu').css('display','block');
	$('#ContentMenu').css('display','block');
	
	element=$('#MainMenu').detach();
	$('#ContainerMenu').append(element);
	$('#toggleMenu').css('display','none');
	$('.Separators').css('display','none');		
	element2=$('#ContentMenu').detach();	
	$('#ContainerContentMenu').append(element2);	
	
			

}

//function exitMobileSmart(){
//	element=$('#dataANDuser').detach();
//	$('#logo').append(element);	
//	$('#datausersmartphoneToggle').css('display','none');
//}

$(document).ready(function() {	
	heightContainerMenu=$("#ContainerMenu").height();	
	$("#ContentMain").css("height",heightContainerMenu);
	
	$("#mobileMenu").css("display","block");

	$("#mobileMenu").css("left","-200%");
	if($(window).width()<width){
			//$("#ContentMain").css("width","100%"); DA VALUTARE
			$("#ContentMain").css("height","calc(100% - 70px)");
			$("#ContentMain").css("height","-moz-calc(100% - 70px)");
			$("#ContentMain").css("height","-webkit-calc(100% - 70px)");
		goMobile();			
	}
	else{
		exitMobile();
	}
	


	
	//successive ctrl of the screen resolution that can change in real-time
	//funzione anonima per il controllo degli eventi sui bottoni e sul body
	
	$(function ()
	{	  
		

		    $("#ContentMain").click(function(event) {		    	
		    	if ((event.target.id!=="toggleMenu")&&(event.target.id!=="mobileMenu")&&(event.target.className!=="toggleMobile")&&(event.target.className!=="toggleMobile active")){
			    	if ($("#mobileMenu").css("left")==="0px"){    		
				       	$("#toggleMenu").toggleClass("active");
				    	$("#mobileMenu").animate({"left":"-200%"}, 600);
			    	}
		    	}

	    	
			});
	    	
	    $("#toggleMenu").click(function(){
	    			
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
	    		$("#ContainerLogo").css("display","block");
	    		$("#ContainerLogo").animate({"top":"0px"}, 500);
	    		$("#dataANDuser").css("top",height*(-1));
	    		$("#dataANDuser").css("display","none");	    		
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	    	}
	    	else{	    		
	    		$("#dataANDuser").animate({"top":"0px"}, 500);
	    		$("#ContainerLogo").animate({"top":height*(-1)}, 500);
	    		
	    		$("#dataANDuser").css("display","block");	    		
	    		$("#ContainerLogo").css("display","none");
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_verde.png");	
	    	}
	    	
	    });
	    
	
	
	//funzione per il controllo dell'on resize
	$(window).on("resize", function()
	{

		//per la gestione dei bordini del menu una volta che si fa il resize
		//$(".Cover").css("height",$(".MainMenuEl").height());
		//$(".CoverBis").css("height",$(".MainMenuEl").height()+4);
		
		if($(this).width() >= widthSmart){
			element=$('#dataANDuser').detach();
			element1=$('#HeaderSep').detach();
			$('#Header').append(element);
			$('#Header').append(element1);
			$('#datausersmartphoneToggle').css('display','none');
			$('#dataANDuser').css('display','block');	
			//$("#ContentMain").css("width","100%"); DA VALUTARE
			$("#ContentMain").css("height","calc(100% - 70px)");
			$("#ContentMain").css("height","-moz-calc(100% - 70px)");
			$("#ContentMain").css("height","-webkit-calc(100% - 70px)");
		}
		else{
			if ($("#dataANDuser").css("top")==="0px"){		    		
	    		$("#dataANDuser").animate({"top":height*(-1)}, 500);
	    		$("#ContainerLogo").animate({"top":"0px"}, 500);
	    		$("#dataANDuser").css("display","none");
	    		$("#ContainerLogo").css("display","block");
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	    	}
			
		}

		if($(this).width() <= width)
		{	
			if ($("#mobileMenu").css("left")==="0px"){
				$("#toggleMenu").toggleClass("active");
				$("#mobileMenu").animate({"left":"-200%"}, 600);
			}	
			heightMenu=$("#ContainerMenu").css("height");
			$("#ContentMain").css("height",heightMenu);
			$("#ContentMain").css("width","100%");
			$("#ContentMain").css("height","calc(100% - 70px)");
			$("#ContentMain").css("height","-moz-calc(100% - 70px)");
			$("#ContentMain").css("height","-webkit-calc(100% - 70px)");
			$("#mobileMenu").css("display","block");			
			goMobile();		
		}
		if($(this).width() > width){
			exitMobile();
			heightMenu=$("#ContainerMenu").css("height");
			$("#ContentMain").css("height",heightMenu);
			$("#ContentMain").css("width","-webkit-calc(100% - 192px)");
			$("#ContentMain").css("width","-moz-calc(100% - 192px)");
			$("#ContentMain").css("width","-webkit-calc(100% - 192px)");
			
			$('#MobSep1').css('display','none');
			$("#mobileMenu").css("display","none");
				
		}	
		
		});		
	
	});
	
});

