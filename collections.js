// collection checkbox filter js code


function filterImages() {
    const selectedOccasions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
    const clothingItems = document.querySelectorAll('#clothingGrid > div');
  
    clothingItems.forEach(item => {
      const itemName = item.querySelector('h2').textContent.toLowerCase();
      const isVisible = selectedOccasions.some(occasion => itemName.includes(occasion));
      item.style.display = isVisible ? 'block' : 'none';
    });
  }

  var sidebar=document.getElementById("sidebar")
var closex=document.getElementById("closex")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidebar.style.left=0
})

closex.addEventListener("click",function(){
    sidebar.style.left= "-50%"
})