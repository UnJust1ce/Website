dropdowns = document.querySelectorAll(".dropdown button")
for(i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function(e){
        e.preventDefault()
        this.parentElement.classList.toggle("expanded")
    });
}


document.querySelector("button.bars").addEventListener("click", function() {
  document.querySelector("header").classList.toggle("dropdowndisplay");
  if(document.querySelector("header").classList.contains("dropdowndisplay")){
    setTimeout(function(){
      document.querySelector(".nav-ul").classList.toggle("dropdowndisplay");
      document.querySelector(".nav").classList.toggle("dropdowndisplay");
    }, 50)
  } else {
    document.querySelector(".nav-ul").classList.toggle("dropdowndisplay");
    document.querySelector(".nav").classList.toggle("dropdowndisplay");
  }
});


function check(media) {
  if (media.matches) {
    document.body.children[0].classList.add("small")
    document.body.classList.add("small")
  } else {
   document.body.children[0].classList.remove("small")
   document.body.classList.remove("small")
  }
}
minSize = window.matchMedia("(max-width: 1002px)")
check(minSize)
minSize.addListener(check)

function browser() {
	u = navigator.userAgent;
	return u.indexOf("Firefox") > -1 ? "Firefox" : u.indexOf("OP") > -1 ? "Opera" : u.indexOf("Edg") > -1 ? "Edge" : u.indexOf("Chrome") > -1 ? "Chrome" : !!window.chrome ? "Chromium based browsers" : null
}

//add get fastforward for browser button
b = browser();
btn = document.querySelector("a.btn.ff");
switch (b) {
  case "Firefox":
    btn.classList.add("firefox");
    btn.innerText += " for Firefox";
    btn.href="https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/";
    break;
  case "Chrome":
    btn.classList.add("chrome");
    btn.innerText += " for Chrome";
    btn.href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe";
    break;
  case "Edge":
    btn.classList.add("edge");
    btn.innerText += " for Edge";
    btn.href="https://microsoftedge.microsoft.com/addons/detail/fastforward/ldcclmkclhomnpcnccgbgleikchbnecl";
    break;
  case "Opera":
    btn.classList.add("opera");
    btn.innerText += " for Opera";
    btn.href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe";
    break;
  case "Chromium based browsers":
    btn.classList.add("chromium");
    btn.innerText += " for Chromium based browsers";
    btn.href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe";
    break;
  default:
    btn.classList.add("default");
    btn.href="/install.html";
}