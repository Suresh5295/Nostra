// offer label close script
var offer =document.getElementById("offer")
var offerclose =document.getElementById("offerclose")
offerclose.addEventListener("click",function(){
    offer.style.display="none"
})

// image slider script

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        if (i === index) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

showSlide(currentSlide);

// new arrival behavior script//
var newarrivalbutton =document.getElementById("newarrivalbutton")
newarrivalbutton.addEventListener("click",function(){
    document.getElementById('newarrivalcontainer').scrollIntoView({ behavior: 'smooth', block:"start" });
})
// most wanted behavior script//
var mostwantedbutton=document.getElementById("mostwantedbutton")
mostwantedbutton.addEventListener("click",function(){
    document.getElementById('mostwantedcontainer').scrollIntoView({ behavior: 'smooth', block:"start" });
})

// most wanted scroll lock script//
const container = document.getElementById('mostwantedcontainer');

container.addEventListener('wheel', function(e) {
   
    e.preventDefault();

   
    const itemsContainer = document.getElementById('items-container');

    
    itemsContainer.scrollLeft += e.deltaY;
});

var sidebar=document.getElementById("sidebar")
var closex=document.getElementById("closex")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidebar.style.left=0
})

closex.addEventListener("click",function(){
    sidebar.style.left= "-50%"
})