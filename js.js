const hamburder = document.querySelector(".hamburger");
const nabMenu = document.querySelector(".nav-menu");
const bar = document.querySelectorAll(".bar");

hamburder.addEventListener("click", ()=>{
    // console.log("clicked");
    
    hamburder.classList.toggle("active");
    nabMenu.classList.toggle("active");
    bar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
    // console.log("clickeddddd");

    hamburder.classList.remove("active");
    nabMenu.classList.remove("active");
}))


let typed = new Typed(".auto-type", {
    strings: ["Divyansh verma", "Frontend developer", "Full Stack Developer", "Programmer"],
    typeSpeed: 100,
    backspeed: 200,
    loop: true
})