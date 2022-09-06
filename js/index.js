const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const fades= document.querySelectorAll(".fade-in");
const toggleNavbar = ()=>{
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click",()=> toggleNavbar());

const appearOption={};
const appearOnScroll = new IntersectionObserver(
    function(entries,appearOnScroll){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        })
},appearOption);

fades.forEach(fader=>{
    appearOnScroll.observe(fader);
});