function clickMenu() {
    if (options.style.display == "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
        navbar.style.background = "#EDC4F2";      
    }
}

window.addEventListener("scroll", () => {
    let home = document.querySelector("#home");
    if (window.scrollY > 100) {
        home.style.display = "block";
    } else {
        home.style.display = "none";
    }
})

home.addEventListener("click", () => {
    window.scrollTo(0,0);
})