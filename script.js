document.addEventListener('DOMContentLoaded', function() {
  // Get references to the boxes
  var box = document.querySelector('.box');
  var box2 = document.querySelector('.box2');
  var box3 = document.querySelector('.box3');
  var box4 = document.querySelector('.box4');
  
  var display = document.getElementById('display');
  
  document.addEventListener('click', function(event) {
    if (event.target === box) {
      display.innerHTML = '<img src="t.jpg">';
    } else if (event.target === box2) {
      display.innerHTML = '<img src="nz.jpg">';
    } else if (event.target === box3) {
      display.innerHTML = '<img src="n.jpg">';
    } else if (event.target === box4) {
      display.innerHTML = '<img src="e.jpg">';
    } else {
      display.innerHTML = '';
    }
  });
});
