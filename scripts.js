document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header h1');
  header.addEventListener('mouseover', () => {
    header.style.color = '#008080';
    header.style.transition = 'color 0.3s';
  });

  header.addEventListener('mouseout', () => {
    header.style.color = '#333';
  });

  const image = document.querySelector('.theme-image');
  image.addEventListener('click', () => {
    alert('You clicked on the Minecraft-style cat!');
  });
});
