
// <!-- toggle button -->
    

        function myFunction() {
            var navbar = document.getElementById('nav');
            navbar.classList.toggle('show');
        }

    



document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let counter = 0;
  
    function showImage(index) {
      const images = document.querySelectorAll('.carousel-images img');
      images.forEach((image) => {
        image.style.display = 'none';
      });
      images[index].style.display = 'block';
    }
  
    prevBtn.addEventListener('click', function() {
      counter--;
      if (counter < 0) {
        counter = carouselImages.children.length - 1;
      }
      showImage(counter);
    });
  
    nextBtn.addEventListener('click', function() {
      counter++;
      if (counter >= carouselImages.children.length) {
        counter = 0;
      }
      showImage(counter);
    });
  
    // Show the first image initially
    showImage(counter);
  });