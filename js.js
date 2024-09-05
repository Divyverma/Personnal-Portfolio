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


//cursor

const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    // cursorDot.style.left = `${posX}px`
    // cursorDot.style.top = `${posY}px`

    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration:500, fill:"forwards"})

})

// pre loader 
var loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    setTimeout(()=>{
        loader.style.display = 'none';
    }, 2000)
})