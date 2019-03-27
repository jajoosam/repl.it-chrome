var item = {
    "id": "replit",
    "title": "Try on repl.it",
    "contexts": ["selection"]
}

chrome.contextMenus.create(item);

chrome.contextMenus.onClicked.addListener(function(data){
    if(data.menuItemId == "replit" && data.selectionText){
        chrome.tabs.executeScript( {
            code: "window.getSelection().toString();"
          }, function(selection) {
            var language = prompt("What language is this code in?").replace(/\s/g,'').toLowerCase();
            var replLink = `https://repl.it/languages/${language}?code=${encodeURIComponent(selection)}`;
            chrome.tabs.create({ url: replLink });
          });
          

    }
})