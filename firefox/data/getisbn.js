self.port.on("getIsbn", function(iconLaLibrairie, iconPlacedeslibraires) {
	
  	var ISBNElement = $( ".content ul li:contains('ISBN-13')" ).text().split(':')[1];

  	var ISBN;
  	if (ISBNElement) {
  		ISBN = ISBNElement.replace(/[^0-9]/g, '');
	  	
	  	var cadre = document.createElement("div");
	  	cadre.style.border = "solid 1px #008A00";
		cadre.style.padding = "5px 5px 0px 5px";
		cadre.style['margin-bottom'] = "10px";
		cadre.style['border-radius'] = "9px";

		var header = '<div style="text-align: center;color: #008A00;font-family: Arial;font-weight: bold;">Acheter localement</div>';

	  	var placedeslibrairesButton = '<div class="a-button-stack">'+
		    '<a href="http://www.placedeslibraires.fr/dlivre.php?gencod='+ISBN+'&rid=" target="_blank">'+
		        '<span class="a-button a-spacing-small a-button-primary a-button-icon">'+
		            '<span class="a-button-inner">'+
		                '<i style="background-image:url('+iconPlacedeslibraires+'); background-size:25px 25px; background-position: center;" class="a-icon a-icon-cart"></i>'+
		                '<span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">'+
		                	'Trouver sur placedeslibraires.fr'+
		                '</span>'+
		            '</span>'+
		        '</span>'+
		    '</a>'+
		'</div>';

		var lalibrairieButton = '<div class="a-button-stack">'+
		    '<a href="http://www.lalibrairie.com/tous-les-livres/liste.html?recherche='+ISBN+'&searchLang=fra&rapidSearch=1" target="_blank">'+
		        '<span class="a-button a-spacing-small a-button-primary a-button-icon">'+
		            '<span class="a-button-inner">'+
		                '<i style="background-image:url('+iconLaLibrairie+'); background-size:25px 25px; background-position: center;" class="a-icon a-icon-cart"></i>'+
		                '<span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">'+
		                	'Trouver sur lalibrairie.com'+
		                '</span>'+
		            '</span>'+
		        '</span>'+
		    '</a>'+
		'</div>';

		cadre.innerHTML = header + placedeslibrairesButton + lalibrairieButton;

		//Le premier bouton avec cette classe (et le seul) est le bouton du panier
		$('.a-button-stack').first().before(cadre);
	}
});