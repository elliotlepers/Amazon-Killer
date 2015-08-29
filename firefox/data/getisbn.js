self.port.on("getIsbn", function(iconStoreUrl) {
	
  	var ISBNElement = $( ".content ul li:contains('ISBN-13')" ).text().split(':')[1];

  	var ISBN;
  	if (ISBNElement) {
  		ISBN = ISBNElement.replace(/[^0-9]/g, '');
		//On insert le bouton dans la page
	  	
	  	var placedeslibrairesButton = '<div class="a-button-stack">'+
		    '<a href="http://www.placedeslibraires.fr/dlivre.php?gencod='+ISBN+'&rid=" target="_blank">'+
		        '<span class="a-button a-spacing-small a-button-primary a-button-icon">'+
		            '<span class="a-button-inner">'+
		                '<i style="background-image:url('+iconStoreUrl+'); background-size:25px 25px; background-position: center;" class="a-icon a-icon-cart"></i>'+
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
		                '<i style="background-image:url('+iconStoreUrl+'); background-size:25px 25px; background-position: center;" class="a-icon a-icon-cart"></i>'+
		                '<span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">'+
		                	'Trouver sur lalibrairie.com'+
		                '</span>'+
		            '</span>'+
		        '</span>'+
		    '</a>'+
		'</div>';

		$('#bbop-sbbop-container').after(placedeslibrairesButton);
		$('#bbop-sbbop-container').after(lalibrairieButton);
	}
});