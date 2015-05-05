//PER GESTIRE L'ON RESIZE CON IL CROSS BROWSING
if (client.engine.gecko){
var widthO=1203;
}
if (client.engine.webkit){
	var widthO=1199;
}


if (client.engine.gecko){
	var widthSmartO=935;
}
if (client.engine.webkit){
	var widthSmartO=931;
}

var widthSmart=951;
var width=1220;
var widthSmartPort=460;
var widthSmart2=854;


function goMobile(){
		
	element=$('.perCover').detach();
	$('#mobileMenu').append(element);
	
	element=$('#ContentMenu').detach();
	$('#mobileMenu').append(element);
	
	$('#datausersmartphoneToggle').css('display','none');

	$('#toggleUser').css('display','none');
	
	//height=$("#Header").height();
	//$('#mobileMenu').css('top',height);
	
	if($(window).width()<widthSmartO){
		goMobileSmart();
	}
	
	
	$('#toggleMenu').css('display','block');
	$('.Separators').css('display','block');
	$('#ContainerMenu').css('display','none');	

}

function goMobileSmart(){
		
		$('#toggleUser').css('display','block');
		$('#dataANDuser').css('display','block');
		$('#datausersmartphoneToggle').css('display','block');

		element=$('#dataANDuser').detach();
		$('#logo').append(element);
		$('#dataANDuser').css('display','none');
		

}

function exitMobile(){

	$('#toggleMenu').css('display','none');
	$('#ContainerMenu').css('display','block');
	$('#ContentMenu').css('display','block');
	
	element=$('.perCover').detach();
	$('#MainMenu').append(element);
	
	$('.Separators').css('display','none');		
	element2=$('#ContentMenu').detach();	
	$('#ContainerContentMenu').append(element2);	
	
}

$(document).ready(function() {	

	if ( ($("#dataANDuser").css("display")==="block") && ($(".toggleMobile2").css("display")==="block") ) {	
		$("#ContainerLogo").css("display","block");
		$("#dataANDuser").css("display","none");	    		
		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	}
	console.log("FINESTRA"+$(window).innerWidth());	
	$("#mobileMenu").css("display","block");
	$("#mobileMenu").css("left","-200%");

	
	/*per ottenere la larghezza della finestra senza problemi. All'on resize invece persiste il problema della soglia forse*/
	if( ($(window).innerWidth() <= width) ){
		goMobile();	
		heightH=$("#Header").height();
		$("#ContentMain").css("height",$(window).height()-heightH);
		$("#ContainerLogo").css("top","0px");
	}
	
	if ($(window).innerWidth() < widthSmart)  {
		goMobileSmart();
	}

	if ($(window).width()<widthSmart2) {
		$("#ContentMain").css("height","auto");
	}
	
	if($(window).width()<=widthSmartPort){
		$("#ContentMain").css("height","auto");
	}	
	
//	function ctrlHeightButtonMenu(){
//		if (($(window).width()<=width) && ($(window).width()>=widthSmartO)){
//				heightTop=(0.47 * (parseInt($('#mobileMenu').css('height'))))-parseInt($('.MainMenuEl').css('height'));
//				$('.perCover').css("top", heightTop);
//				
//		}
//		if($(window).width()<widthSmartO){
//			heightTop=(0.45 * (parseInt($('#mobileMenu').css('height'))))-parseInt($('.MainMenuEl').css('height'));
//			$('.perCover').css("top", heightTop);
//			console.log("HT2="+heightTop);
//		}
//		
//		/*QUI GESTIRE CASI PARTICOLARI PER SMARTPHONE*/
// 
//	}
		
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
	    	
				element=$('.perCover').detach();
				$('#mobileMenu').append(element);
				
				
				
				element=$('#ContentMenu').detach();
				$('#mobileMenu').append(element);
				
				
				
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
	    	if ($("#dataANDuser").css("display")==="block"){	
	    		$("#ContainerLogo").css("display","block");
	    		$("#dataANDuser").css("display","none");	    		
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	    	}
	    	else{	    	    		
	    		$("#dataANDuser").css("display","block");	    		
	    		$("#ContainerLogo").css("display","none");
	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_verde.png");	
	    	}
	 	
    	
	 });
	    
	
	
	//funzione per il controllo dell'on resize
	$(window).resize( function()
	{
		
		
		if ( ($("#dataANDuser").css("display")==="block") && ($(".toggleMobile2").css("display")==="block") ) {	
    		$("#ContainerLogo").css("display","block");
    		$("#dataANDuser").css("display","none");	    		
    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
    	}
		else{
			$("#dataANDuser").css("display","block");
		}
	
		
		height=$("#Header").height();
		
		if ($(window).width()>widthO){
			$('#datausersmartphoneToggle').css('display','none');
		}
		
				
		if ($(window).width() >= widthSmartO)  {
			height=$("#Header").height();
						
			element=$('#dataANDuser').detach();
			element1=$('#HeaderSep').detach();
			
			$('#Header').append(element);
			$('#Header').append(element1);
					

			height=$("#Header").height();
			$("#ContentMain").css("height",$(this).height()-height);
		}		
		
		if($(window).width() <= widthO)
		{							
			$("#mobileMenu").css("display","block");			
			goMobile();		
					
			if ( (client.engine.webkit) || (client.engine.gecko) || (client.engine.ktml) || (client.engine.opera) ){
				if($(window).width() > widthSmart2){ //risolto il problema su browser google
					height=$("#Header").height();
					$("#ContentMain").css("height",$(window).height()-height);
				}
			}

			$("#ContentMain").css("width","100%");
			
			
		}
		if($(window).width() > widthO){			
			exitMobile();
			heightMenu=$("#ContainerMenu").css("height");
			$("#ContentMain").css("height",heightMenu);
			$("#Content").css("height",heightMenu);
			
			$("#ContentMain").css("width","-webkit-calc(100% - 192px)");
			$("#ContentMain").css("width","-moz-calc(100% - 192px)");
			$("#ContentMain").css("width","calc(100% - 192px)");
			
			$("#Content").css("width","-webkit-calc(100% - 192px)");
			$("#Content").css("width","-moz-calc(100% - 192px)");
			$("#Content").css("width","calc(100% - 192px)");
			
			$("#mobileMenu").css("display","none");
				
		}	

			if ($(window).width() < widthSmartO)  {
				goMobileSmart();
				$("#ContentMain").css("height","auto");
			}
	
						

		});		
	
	});
	
});



