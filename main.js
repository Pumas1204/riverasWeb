const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active');
});





document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  let sections = document.querySelectorAll('section');

  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop;
          let height = sec.offsetHeight;

          if (top >= offset -600  && top < offset + height){
              sec.classList.add('show-title');
          } else {
              sec.classList.remove('show-title');
          }
      });
  }
});



  // slider function 
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter=1;
  }
},5000);



