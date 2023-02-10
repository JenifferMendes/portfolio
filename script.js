function clickMenu() {
    if (window.matchMedia("(max-width: 1200px)").matches){
        if (options.style.display == "block") {
            options.style.display = "none";
        } else {
            options.style.display = "block";
            navbar.style.background = "#EDC4F2";      
        }
    } 
}

window.addEventListener("scroll", () => {
    let home = document.querySelector("#homeButton");
    if (window.scrollY > 100) {
        homeButton.style.display = "block";
    } else {
        homeButton.style.display = "none";
    }
})

homeButton.addEventListener("click", () => {
    window.scrollTo(0,0);
})
