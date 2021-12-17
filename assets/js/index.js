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
  } else {
   document.body.children[0].classList.remove("small")
  }
}
minSize = window.matchMedia("(max-width: 1002px)")
check(minSize)
minSize.addListener(check)
