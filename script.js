let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelector(".nav-links");
let icon = document.querySelector("#nav-icon");
let links = document.querySelectorAll(".nav-links a");
let body = document.querySelector("body");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    icon.classList.toggle("fa-bars"); // when clicked this removed
    icon.classList.toggle("fa-xmark"); // this added 
});

links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });

body.addEventListener("click", (e) => {
    if(!navToggle.contains(e.target) && !navLinks.contains(e.target)){ // only do below things when user navtoggle and navlinks par click naa kare 
        navLinks.classList.remove("active");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");}
});

    
