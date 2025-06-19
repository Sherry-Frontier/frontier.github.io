document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-rating i');
    let currentRating = 0;
  
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        currentRating = index + 1;
        updateStars(currentRating);
      });
  
      star.addEventListener('mouseover', () => {
        updateStars(index + 1);
      });
  
      star.addEventListener('mouseout', () => {
        updateStars(currentRating);
      });
    });
  
    function updateStars(rating) {
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.remove('far');
          star.classList.add('fas');
          star.classList.add('fa-star'); // in case it’s removed
          star.style.color = 'green';
        } else {
          star.classList.remove('fas');
          star.classList.add('far');
          star.classList.add('fa-star'); // make sure icon remains
          star.style.color = '#ccc';
        }
      });
    }
  });
  