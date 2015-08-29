var tabs = require("sdk/tabs");

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.amazon.fr",
  contentScriptFile: [data.url("jquery.js"), data.url("getisbn.js")],
  onAttach: function(worker) {
    worker.port.emit("getIsbn", data.url("icon-store.png"));
  }
});
