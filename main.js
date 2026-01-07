// Simple interaction to check off ingredients
document.addEventListener('DOMContentLoaded', () => {
  const ingredients = document.querySelectorAll('.checklist li');
  
  ingredients.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      updateStyle(item);
    });
    item.style.cursor = 'pointer';
  });

  function updateStyle(item) {
    if (item.classList.contains('checked')) {
      item.style.opacity = '0.5';
      item.style.textDecoration = 'line-through';
    } else {
      item.style.opacity = '1';
      item.style.textDecoration = 'none';
    }
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
