<<<<<<< HEAD
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

=======
var widthTab=951;
var width=1220;
var widthSmPh=480;
var widthTab2=854;


function goMobile(){
	$("#mobileMenu").css("display","block");		
	
	element=$('.perCover').detach();
	$('#mobileMenu').append(element);
	
	element=$('#ContentMenu').detach();
	$('#mobileMenu').append(element);
	
	$('#toggleUser').css('display','none');
	
	if(window.innerWidth<widthTab){
		goMobileSmart();
	}
		
	$('#toggleMenu').css('display','block');
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
	
		
	element2=$('#ContentMenu').detach();	
	$('#ContainerContentMenu').append(element2);
	
	$("#mobileMenu").css("display","none");
	
}

$(document).ready(function() {	

	console.log(window.innerWidth);
	if ( ($("#dataANDuser").css("display")==="block") && ($(".toggleMobile2").css("display")==="block") ) {	
		$("#ContainerLogo").css("display","block");
		$("#dataANDuser").css("display","none");	    		
		$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
	}
	console.log("FINESTRA"+$(window).innerWidth());	
	$("#mobileMenu").css("display","block");
	$("#mobileMenu").css("left","-250%");
	
	/*per ottenere la larghezza della finestra senza problemi. All'on resize invece persiste il problema della soglia forse*/
	if( window.innerWidth <= width){
		
		goMobile();	
	}
	
	if (window.innerWidth <= widthTab)  {
		goMobileSmart();
	
	}

	$(function ()
	{	  
		$("#ContentMain").click(function(event) {		    	
	    	if ((event.target.id!=="toggleMenu")&&(event.target.id!=="mobileMenu")&&(event.target.className!=="toggleMobile")&&(event.target.className!=="toggleMobile active")){
		    	if ($("#mobileMenu").css("left")==="0px"){    		
			       	$("#toggleMenu").toggleClass("active");
			    	$("#mobileMenu").animate({"left":"-250%"}, 600);
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
	    	    		$("#mobileMenu").animate({"left":"-250%"}, 600);
	    	    	}
	    	    	else{	    	
	    	    		$("#mobileMenu").animate({"left":"0px"}, 600);
	    	    	} 
	    	      	  	
	
	    });
	    
	    $("#toggleUser").click(function(){
	    	
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
	//l'ON RESIZE RICHIAMA SEMPRE I DATI?
	$(window).resize( function()
	{
		if ( ($("#dataANDuser").css("display")==="block") && ($(".toggleMobile2").css("display")==="block") ) {	
			$("#ContainerLogo").css("display","block");
			$("#dataANDuser").css("display","none");	    		
			$("#LogoImgUser").attr("src","./Resources/Images/menu/utente_bianco.png");	    		
		}
		
		//console.log("RESIZERESIZE\n");
		
		if (window.innerWidth >= widthTab)  {
						
			element=$('#dataANDuser').detach();
			element1=$('#HeaderSep').detach();
			
			$('#Header').append(element);
			$('#Header').append(element1);
			
			$('#dataANDuser').css('display','block');
			$('#datausersmartphoneToggle').css('display','none');
			
		}		
		
		if(window.innerWidth <= width)
		{				
			goMobile();	
			
		}
		if(window.innerWidth > width){			
			exitMobile();				
		}	

		if (window.innerWidth <= widthTab)  {
			goMobileSmart();
		}
			
		});		
	
	
	});
	
});



>>>>>>> 474a3d9fd37c94b5112bd77305bb2854c824481b
