document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.carousel');
  const projectGrid = document.querySelector('.project-grid');
  const btnLeft = document.querySelector('.carousel-btn.left');
  const btnRight = document.querySelector('.carousel-btn.right');

  if (!carousel || !projectGrid || !btnLeft || !btnRight) return;

  const cardCount = projectGrid.children.length;

  // Show buttons only if more than 4 project cards
  if (cardCount > 4) {
    btnLeft.style.display = 'block';
    btnRight.style.display = 'block';
  }

  const scrollAmount = 320; // Adjust based on card width + gap

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
