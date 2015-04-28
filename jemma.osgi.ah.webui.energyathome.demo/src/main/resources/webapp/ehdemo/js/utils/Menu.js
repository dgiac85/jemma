var Menu = {
	MODULE : "Menu",
	tabIndex : 0,
	maxTabIndex : 0,
	MainW : -1, // width div menu principale
	MainH : -1, // height div menu principale
	MainHtml : null,
	ContentW : -1, // width div sub menu
	ContentH : -1, // height div sub menu
	ContentHtml : null,
	sfondoElImg : Define.menu["sfondoButton"],
	MainMenu : null,
	SubMenuHtml : null,
	timercheckObjService: null
}

var ctrl=false; //controllo per il primo accesso
var theWidth=1204;
var selected;
var numButtons;
var widthMenuButton;
var heightMenuButton;

/**
 * Inizializza il menu principale e i sottomenu I sottomenu vengono creati tutti
 * all'inizio e poi ne viene visualizzato uno solo per volta
 */
Menu.Init = function(mainDiv, contentDiv) {

	Menu.MainMenu = DefineMenu;
	
	var dim;
	var num = Menu.MainMenu.length;
	numButtons=num;

	Menu.MainW = $("#" + mainDiv).width();
	Menu.MainH = $("#" + mainDiv).height();

	MainMenuH = Math.round(Menu.MainH / num);
	MainMenuW = Math.round(Menu.MainW * 0.9);
	if (MainMenuH > MainMenuW)
		dim = MainMenuW;
	else
		dim = MainMenuH;
	dimImage = Math.round(dim * 0.6);
	dimImage = Math.round(dim * 0.6);

	Menu.ContentW = $("#" + contentDiv).width();
	Menu.ContentH = $("#" + contentDiv).height();

	dist = Math.round(((Menu.MainH - (dim * num)) / (num + 1)));
	
	if (Main.env == 0) console.log(80, "Menu", "Init: main = " + Menu.MainW + " " + Menu.MainH + " dim = " + dim + " dimImage = " + dimImage);
	
	hDiv = Math.round(dim * 0.9);
	extraTopOffset = Math.round(dim * 0.1);
	imgTopOffset = Math.round((hDiv - dimImage) / 4);
	imgLeftOffset = Math.round((dim - dimImage) / 2);
	hTitle = Math.round(hDiv * 0.1);
	topTitle = imgTopOffset + dimImage;

	topOffset = dist;
	// per spostare fuori bordo sx
	leftOffset = Math.round((Menu.MainW - MainMenuW) / 2) - (dim * 0.015); 

	Menu.MainHtml = "";
	
	for (i = 0; i < num; i++) {
		
		Menu.MainHtml = Menu.MainHtml + 
						//"<img id='MainElSfondo' src='"+ Menu.sfondoElImg + "' style='top:"+ topOffset + "px;left:" + leftOffset + "px' + width='" + dim+ "px' + height='" + dim + "px'/>"+
						"<div id='contMainEl"+ i +"' class='perCover'>" +							
							"<div class='MainMenuEl' id='MainEl" + i+ "' tabIndex='0' onClick='Menu.OnClickMainMenu("+i+")'>" + 
								"<div id='contImg1'>"+
									"  <img id='MainImg" + i + "' class='MainMenuImg' src='" + Menu.MainMenu[i].Image+ "'/>"+
								"</div>" +
								"<p id='NomeMain" + i + "' class='MainMenuTitle'>" + Menu.MainMenu[i].Nome+ "</p>"+
							"</div>" +
							//"<div id='CoverBis"+ i +"' class='CoverBis' style='position:relative; background:#202020;z-index:300'></div>" +
						"</div>";		
		
		topOffset = topOffset + dim + dist;
		
		
	}
	
	$("#" + mainDiv).html(Menu.MainHtml);
	
	
	
	

	
	
	//Per mostrare il contorno illuminato per l'elemento selezionato
	
	
	/*if($(window).height()<=480){
		$(".MainMenuImg").css("width","35%");
		$(".Cover").css("height","50px");
		$(".CoverBis").css("height","80px");
	}
	else{
		$(".Cover").css("height","90px");
		$(".CoverBis").css("height","100px");
	}*/
	
	


	// forzo dimensioni da css altrimenti il titolo ha dimensioni 0
	//$(".MainMenuEl").css("width", dim + "px");
	//$(".MainMenuEl").css("height", hDiv + "px");

	Menu.InitContentMenu(contentDiv);
	//Menu.OnClickMainMenu(0);
	if (Main.env == 0) console.log('CostiConsumi', CostiConsumi);
	CostiConsumi.Init();  
	
	//alert("w="+widthMenuButton);
	//alert("h="+heightMenuButton);
	
//	if($(window).width()<widthSmart){
//		console.log("header height="+$("#Header").height());
//		//$('#mobileMenu').css('height',$(window).height()-$("#Header").height());
//		//$('#ContentMenu').css('height',$(window).height()-$("#Header").height()-35);
//	}
	
	
	
	
	

}




Menu.OnClickMainMenu = function(val) {
	// richiamo funzione di Exit per l'elemento che lascio
	oldContent = $(".ContentMenuElSelected").attr("id");
	selected=val;
	
	//$("#mobileMenu").animate({"left":"-1000px"}, 500);
	if (Main.env == 0) console.log(80, "Menu", "OnClickMainMenu oldContent = " + oldContent);
	
	if (oldContent != undefined) {
		j = 2; // numero main dopo 'el', numero content dopo 'Content'
		k = oldContent.indexOf('Content');
		console.log("oldContent="+oldContent);
		iMain = parseInt(oldContent.substring(j, k));
		iContent = parseInt(oldContent.substring(k + 7));
	
		  
		if ($(window).width()>=theWidth){
			exitFunc = Menu.MainMenu[iMain].SubMenu[iContent].FuncExit;
			if ((exitFunc != undefined) && (exitFunc != null)) {
				Tracing.Trace(Menu.MainMenu[iMain].SubMenu[iContent].Section,Tracing.OUT, null, null);
				eval(exitFunc);
				
			}
			$("#img" + iMain + "Content" + iContent).attr("src",Menu.MainMenu[iMain].SubMenu[iContent].Image);
			$("#el" + iMain + "Content" + iContent).removeClass("ContentMenuElSelected");
		}
		// tolgo selezione a elemento content menu: cambio icona a immagine, cambio classe al div
		
	}
	// tolgo selezione a elemento main menu: cambio icona a immagine, cambio classe al div
	mainElId = $(".MainMenuElSelected").attr("id");
	if (mainElId != undefined) {
		ind = parseInt(mainElId.substr(6)); // MainEl e' lungo 6
		
		if (Main.env == 0) console.log(80, "Menu", "OnClickMainMenu : id = " + mainElId + " ind = " + parseInt(mainElId.substr(6)));
		
		$("#MainImg" + ind).attr("src", Menu.MainMenu[ind].Image);
		$("#" + mainElId).removeClass("MainMenuElSelected");
		
		
	}
	
		// seleziono nuovo elemento main e visualizzo nuova barra content menu
		$("#MainEl" + val).addClass("MainMenuElSelected");
		
	
	
	
	$("#MainImg" + val).attr("src", Menu.MainMenu[val].ImageSelected);

	$(".visibleDiv").addClass("invisibleDiv");
	$(".visibleDiv").removeClass("visibleDiv");
	$("#ContentMenu" + val).addClass("visibleDiv");
	$("#ContentMenu" + val).removeClass("invisibleDiv");
	// seleziono primo elemento del menu
	if($(window).width()>=theWidth){
		$("#el" + val + "Content0").addClass("ContentMenuElSelected");
		$("#img" + val + "Content0").attr("src", Menu.MainMenu[val].SubMenu[0].ImageSelected);		
	}
//	else{
//		$("#el0Content0").addClass("ContentMenuElSelected");
//		$("#img0Content0").attr("src", Menu.MainMenu[val].SubMenu[0].ImageSelected);	
//	}
	var func;
	
	//è sempre fotovoltaico la prima pagina
	if (!ctrl){		
			func = Menu.MainMenu[val].SubMenu[0].FuncEnter;
			ctrl=true;	
			$("#el0Content0").addClass("ContentMenuElSelected");
			$("#img0Content0").attr("src", Menu.MainMenu[val].SubMenu[0].ImageSelected);
		//	$("#Cover0").css("display","block");
			
	}
	
	if($(window).width()>=theWidth){
			func = Menu.MainMenu[val].SubMenu[0].FuncEnter;
			console.log("entra");		
	}
	
		if ((func != undefined) && (func != null)) {
			
			if (Main.env == 0) console.log(80, "Menu", "OnClickMainMenu enter = " + func);
			Tracing.Trace(Menu.MainMenu[val].SubMenu[0].Section, Tracing.IN, null, null);
			if (val>=0) {
		    	$("#ContentMain").css("display","block");
		    }
			
			eval(func);
			
			
			
		} else {
			if (Main.env == 0) console.log(80, "Menu", "OnClickMainMenu enter undefined");
			}
	//}
	
}

/**
 * Inizializza i sottomenu Ogni sottomenu e' un div. Ogni elemento del sottomenu
 * e' rettangolare con immagine a sinistra e nome a destra. Sono allineati a
 * sinistra e hanno dimensione fissa Li crea tutti ma non ne visualizza nessuno
 */
Menu.InitContentMenu = function(contentDiv) {
	var nMain = Menu.MainMenu.length;
	var num = 0;

	Menu.SubMenuHtml = "";
	wDiv = Math.round($("#ContentMenu").width() / 5.5); // max 5 elementi
	hDiv = $("#ContentMenu").height();
	dimImg = Math.round(hDiv * 0.4);

	for (i = 0; i < nMain; i++) {
		leftOffset = 0;
		num = Menu.MainMenu[i].SubMenu.length;
		Menu.SubMenuHtml = Menu.SubMenuHtml + "<div class='ContentMenuRow' id='ContentMenu" + i + "' >";

		// calcolo distanza tra gli elementi
		for (j = 0; j < num; j++) {
			Menu.SubMenuHtml = Menu.SubMenuHtml
					+ "<div tabindex='0' onClick='Menu.OnClickContentMenu(" + i + ", "
					+ j + ")' class='ContentMenuEl' id='el" + i + "Content" + j
					+ "'><div id='contImg'><img  id='img" + i + "Content" + j
					+ "' class='ContentMenuImg' src='"
					+ Menu.MainMenu[i].SubMenu[j].Image
					+ "'></div><div id='NomeContent" + i + "_" + j
					+ "' class='ContentMenuTitle'>"
					+ Menu.MainMenu[i].SubMenu[j].Nome + "</div></div>";
			leftOffset += wDiv + 2;
		}
		Menu.SubMenuHtml = Menu.SubMenuHtml + "</div>";
	}

	$("#" + contentDiv).html(Menu.SubMenuHtml);

	// tengo conto della lunghezza dei campi nome per la dimensione del div le icone restano a distanza costante

	maxW = 0;
	/*for (i = 0; i < nMain; i++) {
		num = Menu.MainMenu[i].SubMenu.length;
		for (j = 0; j < num; j++) {
			w = $("#img" + i + "Content" + j).width();
			$("#img" + i + "Content" + j).height(w);
		}
	}*/
	// rendo visibile il primo sottomenu
	$("#ContentMenu0").addClass("visibleDiv");
	for (i = 1; i < Menu.MainMenu.length; i++)
		$("#ContentMenu" + i).addClass("invisibleDiv");

}

Menu.OnClickContentMenu = function(valMain, valContent) {
	// richiamo funzione di Exit per l'elemento che lascio
	
	oldContent = $(".ContentMenuElSelected").attr("id");
	if (Main.env == 0) console.log(80, "Menu", "OnClickContentMenu oldContent = " + oldContent);
	
	if($(window).width()<theWidth){
	
		if ($(".toggleMobile").hasClass("active")){
			$(".toggleMobile").toggleClass("active");
			$("#mobileMenu").animate({"left":"-200%"}, 600);
		}
	}
	if (oldContent != undefined) {
		j = 2; // numero main dopo 'el', numero content dopo 'Content'
		k = oldContent.indexOf('Content');
		iMain = parseInt(oldContent.substring(j, k));
		iContent = parseInt(oldContent.substring(k + 7));
		exitFunc = Menu.MainMenu[iMain].SubMenu[iContent].FuncExit;
		
		if ((exitFunc != undefined) && (exitFunc != null)) {
			Tracing.Trace(Menu.MainMenu[iMain].SubMenu[iContent].Section,Tracing.OUT, null, null);
			eval(exitFunc);
			
		}
		
		// tolgo selezione a elemento content menu: cambio icona a immagine,
		// cambio classe al div
		$("#img" + iMain + "Content" + iContent).attr("src",Menu.MainMenu[iMain].SubMenu[iContent].Image);
		$("#el" + iMain + "Content" + iContent).removeClass("ContentMenuElSelected");
	}
	// seleziono nuovo elemento
	$("#el" + valMain + "Content" + valContent).addClass("ContentMenuElSelected");
	$("#img" + valMain + "Content" + valContent).attr("src",Menu.MainMenu[valMain].SubMenu[valContent].ImageSelected);

    func = Menu.MainMenu[valMain].SubMenu[valContent].FuncEnter;
	
    if ((valMain==0) && (valContent==1)){
		$("#Consigli").css("display","none");
		$("#CostoConsumoSintesi").css("height","98%");
    }	
	else{
		$("#Consigli").css("display","block");
		$("#CostoConsumoSintesi").css("height","70%");
    }
    
    if ((valMain==0) && (valContent==3)){
    	$("#ContentMain").css("display","none");
    }
    else{
    	$("#ContentMain").css("display","block");
    }
    
  
			
	if (Main.env == 0) console.log(80, "Menu", "valMain = " + valMain);
	if (Main.env == 0) console.log(80, "Menu", "valContent = " + valContent);
	if (Main.env == 0) console.log(80, "Menu", "Menu = ");
	if (Main.env == 0) console.log(80, "Menu", Menu);
	
	if ((func != undefined) && (func != null)) {
		
		if (Main.env == 0) console.log(80, "Menu", "OnClickContentMenu eval = " + func);
		
		Tracing.Trace(Menu.MainMenu[valMain].SubMenu[valContent].Section, Tracing.IN, null, null);
		eval(func);
		
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	} else {
		
		if (Main.env == 0) console.log(80, "Menu", "OnClickContentMenu func undefined");
	}
}



	
	
	