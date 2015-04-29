//per il cross-browsing //CI STA ANCORA UN PROBLEMA CON LA WIDTH a 750 per firefox
if (!client.engine.ie){
	var width=1200;
	var widthSmart=731;
}

if (client.engine.gecko){
	var width=1204;
	var widthSmart=735;
}
if (client.engine.webkit){
	var width=1200;
	var widthSmart=731;
}
if (client.engine.opera){
	var width=1200;
	var widthSmart=731;
}
if (client.browser.safari){
	var width=1200;
	var widthSmart=731;
}

var widthSmartPort=480;
var widthSmart2=854;

function goMobile(){
		
	element=$('.perCover').detach();
	$('#mobileMenu').append(element);
	
	element=$('#ContentMenu').detach();
	$('#mobileMenu').append(element);
	
	$('#datausersmartphoneToggle').css('display','none');

	$('#toggleUser').css('display','none');
	
	height=$("#Header").height();

	$('#mobileMenu').css('top',height);
	$('#ContentMain').css('top',height);
	
	
	if($(window).width()<widthSmart){
		goMobileSmart();
	}
	
	$('#toggleMenu').css('display','block');
	$('.Separators').css('display','block');
	$('#ContainerMenu').css('display','none');	

}

function goMobileSmart(){
		
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
	
	$("#mobileMenu").css("display","block");
	$("#mobileMenu").css("left","-200%");
	if($(window).width() < width){
		goMobile();	
		heightH=$("#Header").height();
		$("#ContentMain").css("height",$(window).height()-heightH);
		$("#ContainerLogo").css("top","0px");
	}
//	if($(window).width()<widthSmart){
//		height=$("#Header").height();
//		$("#dataANDuser").css("top",height*(-1));
//	}
	
	if( ($(window).width()<widthSmart2) && ($(window).height()<widthSmartPort) ){
		$("#ContentMain").css("height","auto");
	}
	
	if($(window).width()<widthSmartPort){
		$("#ContentMain").css("height","auto");
	}
	if($(window).width()>=width){
		heightContainerMenu=$("#ContainerMenu").height();	
		$("#ContentMain").css("height",heightContainerMenu);
		$("#Content").css("height",heightContainerMenu);
		exitMobile();
	}
	
	
	function ctrlHeightButtonMenu(){
		if (($(window).width()<width) && ($(window).width()>widthSmart-2) ){
				heightTop=(0.5 * (parseInt($('#mobileMenu').css('height'))))-parseInt($('.MainMenuEl').css('height'));
				$('.perCover').css("top", heightTop);
				
		}
		if($(window).width()<=widthSmart){
			heightTop=(0.4 * (parseInt($('#mobileMenu').css('height'))))-parseInt($('.MainMenuEl').css('height'));
			$('.perCover').css("top", heightTop);
			console.log("HT="+heightTop);
		}
		
		if ($(window).width()===736){ //particolarità per iPhone6Plus
			$('.perCover').css("top", "20px"); 
		} 
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
	    	
				element=$('.perCover').detach();
				$('#mobileMenu').append(element);
				
				ctrlHeightButtonMenu();
				
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
	    	
	    	
//	    	height=$("#Header").height();
//	    	if ($("#dataANDuser").css("top")==="0px"){
//	    		$("#ContainerLogo").animate({"top":"0px"}, 500);
//	    		$("#dataANDuser").animate({"top":height*(-1)}, 500);	    		
//	    		$("#dataANDuser").css("display","none");
//	    		$("#ContainerLogo").css("display","block");	    		
//	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
//	    	}
//	    	if ($("#ContainerLogo").css("top")==="0px"){	    		
//	    		$("#dataANDuser").animate({"top":"0px"}, 500);
//	    		$("#ContainerLogo").animate({"top":height*(-1)}, 500);
//	    		$("#ContainerLogo").css("display","none");
//	    		$("#dataANDuser").css("display","block");    		
//	    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_verde.png");	
//	    	}	    	
	 });
	    
	
	
	//funzione per il controllo dell'on resize
	$(window).on("resize", function()
	{
		
		
		if ($("#dataANDuser").css("display")==="block"){	
    		$("#ContainerLogo").css("display","block");
    		$("#dataANDuser").css("display","none");	    		
    		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
    	}
	
		ctrlHeightButtonMenu();
		console.log($("#Container").width());
		height=$("#Header").height();
		
		if ($(this).width()>=width){
			$('#datausersmartphoneToggle').css('display','none');
		}
		
		if ($(this).width() >= widthSmart) {
			
			console.log("entra");
			element=$('#dataANDuser').detach();
			element1=$('#HeaderSep').detach();
			
			$('#Header').append(element);
			$('#Header').append(element1);
			$('#dataANDuser').css('display','block');		

			height=$("#Header").height();
			$("#ContentMain").css("height",$(this).height()-height);
		}		
		
		if($(this).width() < width)
		{							
			$("#mobileMenu").css("display","block");			
			goMobile();		
			height=$("#Header").height();
			$("#ContentMain").css("height",$(window).height()-height);
			
			if ( (client.engine.webkit) || (client.engine.gecko) || (client.engine.ktml) || (client.engine.opera) ){
				$("#ContentMain").css("width","100%");
			}			
			
		}
		if($(this).width() >= width){			
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
		
		if( ($(window).width()<widthSmart2) && ($(window).height()<widthSmartPort) ){
			$("#ContentMain").css("height","auto");
		}
		
		if($(window).width()<widthSmartPort){
			$("#ContentMain").css("height","auto");
		}

		});		
	
	});
	
});

