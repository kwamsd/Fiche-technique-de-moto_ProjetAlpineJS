/* Drag-to-scroll + réinitialisation de la carte agrandie */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  let down = false, startX = 0, scrollStart = 0;

  carousel.addEventListener('mousedown', e => {
    down = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollStart = carousel.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    down = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mousemove', e => {
    if (!down) return;
    e.preventDefault();
    const walk = (e.pageX - carousel.offsetLeft - startX) * 2;
    carousel.scrollLeft = scrollStart - walk;
  });

  /* referme la carte */
  document.addEventListener('click', e => {
    const open = document.querySelector('.carte-moto.agrandie');
    if (open && !open.contains(e.target)) open.classList.remove('agrandie');
  });
});
