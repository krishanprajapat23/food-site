AOS.init();


function addClass(){
    const nav = document.querySelector("header .navbar");
    nav.classList.toggle("active");
    console.log('active')
}

document.querySelector("#toggle").addEventListener("click", addClass)