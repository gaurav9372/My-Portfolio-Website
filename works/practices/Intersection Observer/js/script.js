window.addEventListener("load",function(){


   const loader=document.querySelector(".loader");
    loader.className+= " hideIt";
    
   // Remove the transition class
 const square = document.querySelector('.square');
 const welcome = document.querySelector('.welcome');
// const blocks = document.querySelectorAll('.blocks');

// var options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '0px',
//   threshold: 0.1
// }
 // Create the observer, same as before:
 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       square.classList.add('square-rotate');
       welcome.classList.add('moveUp');
       return;
     }

     square.classList.remove('square-rotate');
     welcome.classList.remove('moveUp');

   });
 });

 observer.observe(square);
 observer.observe(welcome);


    
  });


