var item = {
    "id": "replit",
    "title": "Try on repl.it",
    "contexts": ["selection"]
}

chrome.contextMenus.create(item);

var replLang = "";

chrome.storage.sync.get('replLang', function(result) {
  if(result){
    console.log(result)
    replLang = result.replLang;
  }
});


chrome.contextMenus.onClicked.addListener(function(data){
    if(data.menuItemId == "replit" && data.selectionText){
        chrome.tabs.executeScript( {
            code: "window.getSelection().toString();"
          }, function(selection) {
            var language = prompt("What language is this code in?", replLang).replace(/\s/g,'').toLowerCase();
            chrome.storage.sync.set({replLang: language}, function() {});
            var replLink = `https://repl.it/languages/${language}?code=${encodeURIComponent(selection)}`;
            chrome.tabs.create({ url: replLink });
          });
    }
})