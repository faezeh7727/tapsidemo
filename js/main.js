const toggler=document.querySelector(".nav-toggler");
const nav=document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
    nav.classList.toggle('nav-expanded');
})