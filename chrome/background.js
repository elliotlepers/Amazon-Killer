chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "dom-loaded":
        	var productTitle = request.data.productTitle;
        	chrome.browserAction.onClicked.addListener(function(tab) { 
				var newURL = "http://www.placedeslibraires.fr/dlivre.php?gencod="+productTitle+"&rid=";
    		    chrome.tabs.create({ url: newURL });
        	});
        	
        break;
    }
    return true;
});

