var productTitle = document.getElementById("productTitle").innerHTML;
var ISBN = $( ".content ul li:contains('ISBN-13')" ).text().split(':')[1].replace(/[^0-9]/g, '');

var iconURL = chrome.extension.getURL("images/icon-store.png");

var button = '<div class="a-button-stack">'+
    '<a href="http://www.placedeslibraires.fr/dlivre.php?gencod='+ISBN+'&rid=" target="_blank">'+
        '<span class="a-button a-spacing-small a-button-primary a-button-icon">'+
            '<span class="a-button-inner">'+
                '<i style="background-image:url('+iconURL+'); background-size:25px 25px; background-position: center;" class="a-icon a-icon-cart"></i>'+
                '<span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">'+
                	'Acheter en librairie'+
                '</span>'+
            '</span>'+
        '</span>'+
    '</a>'+
'</div>';

$('#bbop-sbbop-container').after(button);

 
window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded", 
        data: {
			productTitle : ISBN
        }
    });
}, true);