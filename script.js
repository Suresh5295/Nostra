var offer =document.getElementById("offer")
var offerclose =document.getElementById("offerclose")
offerclose.addEventListener("click",function(){
    offer.style.display="none"
})

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

/////
  // JavaScript code to scroll up and stop at the "New Arrivals" section when the button is clicked
//   document.getElementById('newArrivalButton').addEventListener('click', function() {
//     let newArrivalSection = document.getElementById('newarrivalcontainer');
//     let yOffset = newArrivalSection.getBoundingClientRect().top + window.pageYOffset;
//     window.scrollTo({ top: yOffset, behavior: 'smooth' });
// });
var newarrivalbutton =document.getElementById("newarrivalbutton")
newarrivalbutton.addEventListener("click",function(){
    document.getElementById('newarrivalcontainer').scrollIntoView({ behavior: 'smooth', block:"start" });
})

var mostwantedbutton=document.getElementById("mostwantedbutton")
mostwantedbutton.addEventListener("click",function(){
    document.getElementById('mostwantedcontainer').scrollIntoView({ behavior: 'smooth', block:"start" });
})



// document.getElementById('mostwantedcontainer').addEventListener('wheel', function(e) {
//     const container = document.getElementById('items-container');
//     container.scrollLeft += e.deltaY;
//     e.preventDefault();
// });

// Get the container and attach the wheel event listener to it
const container = document.getElementById('mostwantedcontainer');

container.addEventListener('wheel', function(e) {
    // Prevent the default scroll behavior
    e.preventDefault();

    // Get the items-container
    const itemsContainer = document.getElementById('items-container');

    // Scroll horizontally based on the wheel delta
    itemsContainer.scrollLeft += e.deltaY;
});

