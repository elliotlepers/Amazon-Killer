var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var ISBN;

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Amazon killer",
  icon: {
    "16": "./icon.png",
    "32": "./icon.png",
    "64": "./icon.png"
  },
  onClick: handleClick
});

pageMod.PageMod({
  include: "*.amazon.fr",
  contentScriptFile: [data.url("jquery.js"), data.url("getisbn.js")],
  onAttach: function(worker) {
    worker.port.emit("getIsbn", data.url("icon-store.png"));
    worker.port.on("gotIsbn", function(isbn) {
      ISBN = isbn;
    });
  }
});

function handleClick(state) {

	tabs.open("http://www.placedeslibraires.fr/dlivre.php?gencod=" + ISBN + "&rid=");
}

