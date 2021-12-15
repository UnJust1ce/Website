dropdowns = document.querySelectorAll(".dropdown button")
for(i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function(e){
        e.preventDefault()
        this.parentElement.classList.toggle("expanded")
    });
}