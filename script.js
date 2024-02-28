document.addEventListener('DOMContentLoaded', function() {
  // Get references to the boxes
  var box = document.querySelector('.box');
  var box2 = document.querySelector('.box2');
  var box3 = document.querySelector('.box3');
  var box4 = document.querySelector('.box4');
  
  var display = document.getElementById('display');
  
  document.addEventListener('click', function(event) {
    if (event.target === box) {
      display.innerHTML = '<img src="path/to/assets/t.jpg">';
    } else if (event.target === box2) {
      display.innerHTML = '<img src="path/to/assets/nz.jpg">';
    } else if (event.target === box3) {
      display.innerHTML = '<img src="path/to/assets/n.jpg">';
    } else if (event.target === box4) {
      display.innerHTML = '<img src="path/to/assets/e.jpg">';
    } else {
      display.innerHTML = '';
    }
  });
});
