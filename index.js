if (window.location.hostname == `gist.github.com`) {
  function repl() {
    fetch(`https://api.github.com/gists/${window.location.href.split(`/`)[4]}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var files = data.files;
        var file = files[Object.keys(files)[0]];
        console.log(
          `https://repl.it/languages/${file.language.toLowerCase()}?code=${encodeURIComponent(
            file.content
          )}`
        );
        window.open(
          `https://repl.it/languages/${file.language.toLowerCase()}?code=${encodeURIComponent(
            file.content
          )}`,
          `_blank`
        );
      });
  }
  document.querySelector(`.file-actions`).innerHTML =
    '<a id="run" href="#" class="btn btn-sm replit-btn"><span class="txt">Try on repl.it</span><div class="img" style="display: inline-block; position: relative; top: 3px; margin-left: 5px; width: 14px; height: 14px; background-image: url(https://avatars2.githubusercontent.com/u/983194?v=3&s=100); background-size: 100% 100%; background-repeat: no-repeat;"></div></a>' +
    document.querySelector(`.file-actions`).innerHTML;
  document.querySelector(`#run`).onclick = repl;
}

if (window.location.hostname == `www.npmjs.com`) {
  var code = document.querySelector(`.js`).innerText;
  document.querySelector(`._4R-16`).innerHTML =
    `<a href="https://repl.it/languages/nodejs?code=${encodeURIComponent(
      code
    )}"><img src="https://repl.it/badge/github/jajoosam/kron"></a>` +
    document.querySelector(`._4R-16`).innerHTML;
}

if (window.location.hostname == `github.com`) {
  if (!window.location.href.includes("compare")) {
    document.querySelector(`.BtnGroup-item`).parentElement.innerHTML =
      `<a href="https://repl.it/github/${window.location.href
        .split("/")
        .slice(3)
        .join(
          "/"
        )}" target="_blank"<button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…"> Edit on repl.it <div class="img" style="display: inline-block; position: relative; top: 3px; margin-left: 5px; width: 14px; height: 14px; background-image: url(https://avatars2.githubusercontent.com/u/983194?v=3&amp;s=100); background-size: 100% 100%; background-repeat: no-repeat;"></div> </button></a>` +
      document.querySelector(`.BtnGroup-item`).parentElement.innerHTML;
  }
}
