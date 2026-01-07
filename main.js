// Simple interaction to check off ingredients
document.addEventListener('DOMContentLoaded', () => {
  const ingredients = document.querySelectorAll('.checklist li');

  ingredients.forEach(item => {
    // Make accessible
    item.setAttribute('role', 'checkbox');
    item.setAttribute('aria-checked', 'false');
    item.setAttribute('tabindex', '0');

    // Mouse click
    item.addEventListener('click', () => {
      toggleItem(item);
    });

    // Keyboard interaction
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Prevent scroll for Space
        toggleItem(item);
      }
    });

    item.style.cursor = 'pointer';
  });

  function toggleItem(item) {
    const isChecked = item.classList.toggle('checked');
    item.setAttribute('aria-checked', isChecked);
    updateStyle(item);
  }

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
