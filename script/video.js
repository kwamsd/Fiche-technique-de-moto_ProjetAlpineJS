/* lecture / pause des vidéos de navigation */
document.querySelectorAll('.nav-item').forEach(item => {
  const video = item.querySelector('video');

  item.addEventListener('mouseenter', () => video.play());
  item.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
