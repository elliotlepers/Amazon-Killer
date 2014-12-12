var productTitle = document.getElementById("productTitle").innerHTML;
var ISBN = $( ".content ul li:contains('ISBN-13')" ).text().split(':')[1].replace(/[^0-9]/g, '');

window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded", 
        data: {
			productTitle : ISBN
        }
    });
}, true);