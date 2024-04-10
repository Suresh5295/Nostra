// function filterImages() {
//     const checkboxes = document.querySelectorAll('input[name="occasion"]');
//     const checkedOccasions = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id);
//     const clothingGrid = document.getElementById('clothingGrid');
//     const clothingItems = clothingGrid.querySelectorAll('div');
    
//     clothingItems.forEach(item => {
//       const itemName = item.querySelector('h2').textContent.toLowerCase();
//       const isVisible = checkedOccasions.some(occasion => itemName.includes(occasion));
//       item.style.display = isVisible ? 'block' : 'none';
//     });
//   }


function filterImages() {
    const selectedOccasions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
    const clothingItems = document.querySelectorAll('#clothingGrid > div');
  
    clothingItems.forEach(item => {
      const itemName = item.querySelector('h2').textContent.toLowerCase();
      const isVisible = selectedOccasions.some(occasion => itemName.includes(occasion));
      item.style.display = isVisible ? 'block' : 'none';
    });
  }